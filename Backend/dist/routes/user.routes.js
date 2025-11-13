import { Router } from "express";
import { registerUser, loginUser, getUserDetails, deleteUser } from "../controller/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const route = Router();
route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/user-details", authenticate, getUserDetails);
route.delete("/delete/user", authenticate, deleteUser);
export default route;
//# sourceMappingURL=user.routes.js.map