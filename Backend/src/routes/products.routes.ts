import { Router } from "express";
import { getBestSellersData,getBestSellersById } from "../controller/bestSellers.controller.js";
import { postProductReviews , getProductsByCategory,getSearchResults} from "../controller/products.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const routes = Router()

routes.get("/bestSellers",getBestSellersData)
routes.get("/bestSellers/:id",authenticate,getBestSellersById)
routes.post("/addReviews/:productId", authenticate, postProductReviews)
routes.get("/getCategoryDetails/:category",authenticate,getProductsByCategory)
routes.get("/products/search/:searchText",getSearchResults)


export default routes



