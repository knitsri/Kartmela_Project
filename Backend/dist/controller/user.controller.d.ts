import type { Request, Response } from "express";
import "dotenv/config";
export declare function registerUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function loginUser(req: Request, res: Response): Promise<void>;
export declare function getUserDetails(req: Request, res: Response): Promise<void>;
export declare function deleteUser(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=user.controller.d.ts.map