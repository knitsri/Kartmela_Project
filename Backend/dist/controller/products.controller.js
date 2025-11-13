import { reviewModel } from "../model/productmodel.js";
import { ProductModel } from "../model/productmodel.js";
import { wishListModel } from "../model/wishlist.model.js";
export async function postProductReviews(req, res) {
    const { comment } = req.body;
    const id = req.params.productId;
    try {
        const user = req.user.username;
        const review = await reviewModel.create({ comment, username: user });
        const product = await ProductModel.findByIdAndUpdate(id, { $push: { reviews: review } }, { new: true });
        res.status(201).json(product);
    }
    catch (e) {
        res.status(500).json({
            message: e
        });
    }
}
export async function getProductsByCategory(req, res) {
    try {
        const { category } = req.params;
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 5;
        const skip = (page - 1) * limit;
        const sort = req.query.sort;
        let sortOption = {};
        if (sort === "price-low") {
            sortOption = { price: 1 };
        }
        else if (sort === "price-high") {
            sortOption = { price: -1 };
        }
        else if (sort === "rating") {
            sortOption = { rating: -1 };
        }
        const price = req.query.price;
        let filterOption = {};
        if (price && price != "all") {
            const [min, max] = price.split("-").map(Number);
            filterOption = { price: { $gte: min, $lte: max } };
        }
        const products = await ProductModel.find({ category, ...filterOption }).sort(sortOption).skip(skip).limit(limit);
        const totalNumOfProducts = await ProductModel.countDocuments({ category, ...filterOption });
        const totalNumOfPages = Math.ceil(totalNumOfProducts / limit);
        const totalNumOfCategoryProducts = await ProductModel.countDocuments({ category });
        return res.status(200).json({ products, totalNumOfPages, totalNumOfCategoryProducts });
    }
    catch (e) {
        res.status(400).json({ message: e });
    }
}
export async function getSearchResults(req, res) {
    try {
        const { searchText } = req.params;
        const products = await ProductModel.find({ name: { $regex: searchText, $options: "i" } });
        return res.status(200).json(products);
    }
    catch (e) {
        return res.status(500).json({ message: e });
    }
}
//# sourceMappingURL=products.controller.js.map