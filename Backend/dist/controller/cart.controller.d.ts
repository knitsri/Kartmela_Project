import type { Request, Response } from "express";
export declare function addToCart(req: Request, res: Response): Promise<void>;
export declare function getCartProducts(req: Request, res: Response): Promise<void>;
export declare function updateCartItem(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteCartItem(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function clearCart(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=cart.controller.d.ts.map