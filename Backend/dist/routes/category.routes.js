import { Router } from "express";
import { getCategories, addCategories } from "../controller/category.controller.js";
const categoryRoutes = Router();
categoryRoutes.get("/category", getCategories);
categoryRoutes.post("/addCategory", addCategories);
export default categoryRoutes;
//# sourceMappingURL=category.routes.js.map