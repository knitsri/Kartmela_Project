import { CatgeoryModel } from "../model/CategoriesModel.js";
import type { Request,Response } from "express";


export async function getCategories(req:Request,res:Response){
   try{
    const categories = await CatgeoryModel.find()
    return res.status(200).json(categories)
   }
   catch(e){
      return res.status(500).json({error:e})
   }
}

export async function addCategories(req:Request,res:Response){
   try{
    if(!Array.isArray(req.body)){
        return res.status(400).json({message:"The request body must be an array."})
    }
    const categories = await CatgeoryModel.insertMany(req.body)
    return res.status(201).json(categories)
   }
   catch(e){
      return res.status(500).json({error:e})
   }
}

