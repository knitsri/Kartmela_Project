import { CatgeoryModel } from "../model/CategoriesModel.js";
export async function getCategories(req, res) {
    try {
        const categories = await CatgeoryModel.find();
        return res.status(200).json(categories);
    }
    catch (e) {
        return res.status(500).json({ error: e });
    }
}
export async function addCategories(req, res) {
    try {
        if (!Array.isArray(req.body)) {
            return res.status(400).json({ message: "The request body must be an array." });
        }
        const categories = await CatgeoryModel.insertMany(req.body);
        return res.status(201).json(categories);
    }
    catch (e) {
        return res.status(500).json({ error: e });
    }
}
//# sourceMappingURL=category.controller.js.map