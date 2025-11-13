import { CartModel } from "../model/cartModel.js";
export async function addToCart(req, res) {
    const user = req.user;
    const userId = user._id;
    try {
        const { productId, quantity, size } = req.body;
        const cart = await CartModel.findOne({ userId });
        if (!cart) {
            const item = await CartModel.create({ userId, products: [{ productId, quantity, size }] });
            res.status(201).json({ message: "Your product has added to the cart successfully." });
        }
        else {
            const existingProduct = cart.products.find(p => p.productId.toString() === productId);
            if (!existingProduct) {
                cart.products.push({ productId, quantity, size });
                res.status(200).json({ message: "Your product has added to the cart successfully." });
            }
            else {
                existingProduct.quantity += 1;
                if (size && existingProduct.size !== size) {
                    existingProduct.size = size;
                }
                res.status(200).json({ message: "Quantity updated successfully" });
            }
            await cart.save();
        }
    }
    catch (e) {
        res.status(400).json({ message: e });
    }
}
export async function getCartProducts(req, res) {
    try {
        const userId = req.user._id;
        const data = await CartModel.findOne({ userId }).populate("products.productId");
        res.status(200).json(data);
    }
    catch (e) {
        res.status(400).json({ message: e });
    }
}
export async function updateCartItem(req, res) {
    const { action } = req.body;
    const userId = req.user._id;
    try {
        const { productId } = req.params;
        const userItem = await CartModel.findOne({ userId });
        if (!userItem) {
            return res.status(400).json({ message: "Cart not found for this user" });
        }
        else {
            const products = userItem.products.find(p => p.productId.toString() === productId);
            if (!products) {
                return res.status(400).json({ message: "Product not found" });
            }
            else {
                if (action === "increase") {
                    products.quantity += 1;
                }
                else if (products.quantity > 1) {
                    products.quantity -= 1;
                }
            }
            await userItem.save();
            return res.status(200).json({ message: "Cart has updated" });
        }
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
}
export async function deleteCartItem(req, res) {
    try {
        const userId = req.user._id;
        const { productId } = req.params;
        const userItem = await CartModel.findOne({ userId });
        if (!userItem) {
            return res.status(400).json({ message: "Cart not found" });
        }
        userItem.products.pull({ productId });
        await userItem.save();
        return res.status(200).json({ message: "Product removed from cart" });
    }
    catch (e) {
        res.status(400).json({ message: e });
    }
}
export async function clearCart(req, res) {
    try {
        const userId = req.user._id;
        const clearedProducts = await CartModel.deleteOne({ userId });
        res.status(200).json({ message: "Cleared the cart successfully ..." });
    }
    catch (e) {
        res.status(400).json({ message: e });
    }
}
//# sourceMappingURL=cart.controller.js.map