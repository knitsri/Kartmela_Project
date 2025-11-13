import mongoose, { mongo } from "mongoose";
const reviewSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String },
}, { timestamps: true });
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    soldCount: {
        type: Number,
        required: true
    },
    description: { type: String, required: true },
    stock: { type: String, required: true },
    weight: { type: String },
    reviews: [reviewSchema],
    sizes: [{ type: String }],
    warranty: { type: String },
    bestSeller: { type: Boolean, default: false }
});
export const ProductModel = mongoose.model('Product', productSchema);
export const reviewModel = mongoose.model('Reviews', reviewSchema);
//# sourceMappingURL=productmodel.js.map