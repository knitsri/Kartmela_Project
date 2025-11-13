import mongoose from "mongoose"

export interface category {
    displayName : string,
    name : string,
    image : string
}

const categorySchema = new mongoose.Schema<category>({
    displayName : {type:String,required:true},
    name : {type:String,required:true},
    image : {type:String,required:true}
})

export const CatgeoryModel = mongoose.model<category>('Category',categorySchema)

