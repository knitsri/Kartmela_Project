import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    displayName: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true }
});
export const CatgeoryModel = mongoose.model('Category', categorySchema);
//# sourceMappingURL=CategoriesModel.js.map