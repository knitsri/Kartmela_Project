import mongoose, { mongo } from "mongoose";

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


const reviewSchema = new mongoose.Schema<Review>({
    username: { type: String, required: true },
    comment:  { type: String },
}, {timestamps : true});
 

const productSchema = new  mongoose.Schema<Product>({
    name : {
        type : String,
        required : true
    },
    brand : {
        type : String ,
        required : true
    },
    price : {
        type : Number ,
        required : true
    },
    category : {
        type : String ,
        required : true
    },
    rating : {
        type : Number ,
        required : true
    },
    image : {
        type : String ,
        required : true
    },
    soldCount : {
        type : Number ,
        required : true
    },
    description: { type: String, required: true },
    stock:       { type: String, required: true },
    weight:       {type: String},
    reviews:     [reviewSchema],
    sizes:       [{ type: String }],
    warranty:    {type:String},
    bestSeller: {type:Boolean,default:false}
})


export const ProductModel = mongoose.model<Product>('Product',productSchema)
export const reviewModel = mongoose.model<Review>('Reviews',reviewSchema)
