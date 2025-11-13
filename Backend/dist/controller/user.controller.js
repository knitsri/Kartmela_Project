import { userModel } from "../model/usermodel.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { z } from "zod";
export async function registerUser(req, res) {
    const { username, email, password } = req.body;
    const userRules = z.object({
        username: z.string().min(3).max(20),
        email: z.email(),
        password: z.string().min(4).max(12)
    });
    const parsedData = userRules.safeParse({ username, email, password });
    if (!parsedData.success) {
        const msg = parsedData.error.issues.map(i => i.message);
        return res.status(400).json({ message: msg.join(", ") });
    }
    try {
        const existingUser = await userModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                message: "You already have an account. Please log in to continue."
            });
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await userModel.create({ username, email, password: hashedPassword });
            return res.status(201).json({
                message: "user created successfully"
            });
        }
    }
    catch (e) {
        return res.status(500).json({
            error: e
        });
    }
}
export async function loginUser(req, res) {
    const { username, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ username });
        if (!existingUser) {
            res.status(400).json({
                message: "You have not registered yet!!!"
            });
        }
        else {
            const isValidPwd = await bcrypt.compare(password, existingUser.password);
            if (!isValidPwd) {
                res.status(400).json({
                    message: "Invalid credentials"
                });
            }
            else {
                const secret_key = process.env.SECRET_CODE;
                const payload = { username, email: existingUser.email, _id: existingUser._id };
                const jwt_token = jwt.sign(payload, secret_key, { expiresIn: "24h" });
                res.status(200).json({
                    message: "Login successful",
                    token: jwt_token
                });
            }
        }
    }
    catch (e) {
        res.status(500).json({
            error: e
        });
    }
}
export async function getUserDetails(req, res) {
    try {
        const userId = req.user._id;
        const user = await userModel.findById(userId);
        res.status(200).json(user);
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
}
export async function deleteUser(req, res) {
    try {
        const userId = req.user._id;
        await userModel.findByIdAndDelete(userId);
        res.status(200).json({ message: "Deleted the user successfully." });
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
}
//# sourceMappingURL=user.controller.js.map