import mongoose from "mongoose";

export interface User {
    username : String;
    email : String ;
    password : String
}


const userSchema = new mongoose.Schema<User>({
    username : {
        type : String,
        required : true ,
        unique : true
    } , 
    email : {
        type : String ,
        required : true ,
        unique : true
    }, 
    password : {
        type : String,
        required : true
    }
})

export const userModel =  mongoose.model<User>('User',userSchema)

