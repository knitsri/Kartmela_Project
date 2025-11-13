import { ProductModel } from "../model/productmodel.js";
import { CartModel } from "../model/cartModel.js";
import { wishListModel } from "../model/wishlist.model.js";
export async function getBestSellersData(req, res) {
    try {
        const products = await ProductModel.find({ bestSeller: true });
        res.status(201).json(products);
    }
    catch (e) {
        res.status(500).json({
            message: e
        });
    }
}
export async function getBestSellersById(req, res) {
    try {
        const userId = req.user._id;
        const product = await ProductModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        let isInWishList = false;
        let UserSelectedSize = null;
        if (userId) {
            const wishlist = await wishListModel.findOne({ userId });
            if (wishlist) {
                isInWishList = wishlist.products.some(p => p.productId.toString() === product._id.toString());
            }
            const cart = await CartModel.findOne({ userId });
            if (cart) {
                const cartItem = cart.products.find(p => p.productId.toString() === product._id.toString());
                if (cartItem) {
                    UserSelectedSize = cartItem.size;
                }
            }
        }
        res.status(200).json({ ...product.toObject(), isInWishList, UserSelectedSize });
    }
    catch (e) {
        res.status(400).json({
            message: e
        });
    }
}
//# sourceMappingURL=bestSellers.controller.js.map