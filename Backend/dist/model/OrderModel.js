import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
            },
            size: {
                type: String,
            }
        }
    ],
    totalPrice: { type: Number, required: true },
    orderId: { type: String },
    trackingId: { type: String }
}, { timestamps: true });
export const OrderModel = mongoose.model('Orders', orderSchema);
//# sourceMappingURL=OrderModel.js.map