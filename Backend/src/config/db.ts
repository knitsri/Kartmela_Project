import mongoose from "mongoose";

export default async function connectToDb(url:string){
    await mongoose.connect(url)
    console.log('Connected to mongodb')
}