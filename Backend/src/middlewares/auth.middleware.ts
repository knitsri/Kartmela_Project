import type { Request,Response,NextFunction } from "express";
import "dotenv/config"
import jwt from "jsonwebtoken"

 interface AuthRequest extends Request{
    user ?: any
}

export async function authenticate(req:AuthRequest,res:Response,next:NextFunction){
    const headers = req.headers.authorization
    const token = headers?.split(" ")[1]
    if(!token){
        res.status(400).json({
            message : "Token not given"
        })
    }
    try{
       const secret_code = process.env.SECRET_CODE
       const isVerified =  jwt.verify(token as string,secret_code as string)
       req.user = isVerified
       next()
    }
    catch(e) {
        res.status(400).json({
            message : "Invalid Token"
        })
    }
}
