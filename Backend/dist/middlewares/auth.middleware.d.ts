import type { Request, Response, NextFunction } from "express";
import "dotenv/config";
interface AuthRequest extends Request {
    user?: any;
}
export declare function authenticate(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
export {};
//# sourceMappingURL=auth.middleware.d.ts.map