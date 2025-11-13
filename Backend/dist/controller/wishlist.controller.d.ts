import type { Request, Response } from "express";
export declare function AddToWishList(req: Request, res: Response): Promise<void>;
export declare function GetWishList(req: Request, res: Response): Promise<void>;
export declare function DeleteFromWishlist(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=wishlist.controller.d.ts.map