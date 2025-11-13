import "dotenv/config";
import jwt from "jsonwebtoken";
export async function authenticate(req, res, next) {
    const headers = req.headers.authorization;
    const token = headers?.split(" ")[1];
    if (!token) {
        res.status(400).json({
            message: "Token not given"
        });
    }
    try {
        const secret_code = process.env.SECRET_CODE;
        const isVerified = jwt.verify(token, secret_code);
        req.user = isVerified;
        next();
    }
    catch (e) {
        res.status(400).json({
            message: "Invalid Token"
        });
    }
}
//# sourceMappingURL=auth.middleware.js.map