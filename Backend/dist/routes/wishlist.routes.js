import { Router } from "express";
import { AddToWishList, GetWishList, DeleteFromWishlist } from "../controller/wishlist.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const wishlistroute = Router();
wishlistroute.post("/addToWishlist", authenticate, AddToWishList);
wishlistroute.get("/getWishList", authenticate, GetWishList);
wishlistroute.delete("/deleteProduct", authenticate, DeleteFromWishlist);
export default wishlistroute;
//# sourceMappingURL=wishlist.routes.js.map