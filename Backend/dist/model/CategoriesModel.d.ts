import mongoose from "mongoose";
export interface category {
    displayName: string;
    name: string;
    image: string;
}
export declare const CatgeoryModel: mongoose.Model<category, {}, {}, {}, mongoose.Document<unknown, {}, category, {}, {}> & category & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=CategoriesModel.d.ts.map