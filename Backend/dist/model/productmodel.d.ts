import mongoose from "mongoose";
export interface Review {
    username: string;
    comment: string;
    createdAt?: Date;
}
export interface Product {
    name: string;
    description: string;
    brand: string;
    price: number;
    category: string;
    rating: number;
    image: string;
    soldCount: Number;
    stock: string;
    reviews?: Review[];
    sizes?: string[];
    weight?: string;
    warranty?: string;
    bestSeller?: boolean;
}
export declare const ProductModel: mongoose.Model<Product, {}, {}, {}, mongoose.Document<unknown, {}, Product, {}, {}> & Product & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export declare const reviewModel: mongoose.Model<Review, {}, {}, {}, mongoose.Document<unknown, {}, Review, {}, {}> & Review & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=productmodel.d.ts.map