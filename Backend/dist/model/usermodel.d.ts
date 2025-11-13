import mongoose from "mongoose";
export interface User {
    username: String;
    email: String;
    password: String;
}
export declare const userModel: mongoose.Model<User, {}, {}, {}, mongoose.Document<unknown, {}, User, {}, {}> & User & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=usermodel.d.ts.map