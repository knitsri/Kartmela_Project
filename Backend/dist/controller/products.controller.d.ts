import type { Request, Response } from "express";
export declare function postProductReviews(req: Request, res: Response): Promise<void>;
export declare function getProductsByCategory(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getSearchResults(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=products.controller.d.ts.map