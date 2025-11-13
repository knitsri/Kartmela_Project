import { Router } from "express";
import { addOrders, getOrders } from "../controller/orders.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const orderRoutes = Router();
orderRoutes.post("/cart/place-orders", authenticate, addOrders);
orderRoutes.get("/orders/user-orders", authenticate, getOrders);
export default orderRoutes;
//# sourceMappingURL=order.routes.js.map