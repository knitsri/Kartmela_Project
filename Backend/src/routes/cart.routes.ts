import { Router } from "express";
import { addToCart,getCartProducts,updateCartItem,deleteCartItem,clearCart } from "../controller/cart.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const cartroute = Router()

cartroute.get("/getProducts",authenticate,getCartProducts)
cartroute.post("/addProduct",authenticate,addToCart)
cartroute.put("/update/:productId",authenticate,updateCartItem)
cartroute.delete("/deleteProduct/:productId",authenticate,deleteCartItem)
cartroute.delete("/clear",authenticate,clearCart)

export default cartroute