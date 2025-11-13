
import type { Request, Response } from "express";
import { reviewModel } from "../model/productmodel.js";
import { ProductModel } from "../model/productmodel.js";
import { wishListModel } from "../model/wishlist.model.js";


export async function postProductReviews(req:Request,res:Response){
    const {comment} = req.body
    const id = req.params.productId
    
    try{
        const user = (req as any).user.username
        const review = await reviewModel.create({comment,username:user})
        const product = await ProductModel.findByIdAndUpdate(id,{$push: {reviews : review}},{new:true})
        res.status(201).json(product)
    }

    catch(e){
      res.status(500).json({
        message : e
      })
    } 
}

export async function getProductsByCategory(req:Request,res:Response){
try{
  const {category} = req.params 
  const page = req.query.page ? parseInt(req.query.page as string) : 1 
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 5 
  const skip = (page-1)*limit 


  const sort = req.query.sort
  let sortOption = {}
  if(sort === "price-low"){
    sortOption = {price : 1}
  }
  else if(sort === "price-high"){
    sortOption = {price : -1}
  }

  else if(sort === "rating"){
    sortOption = {rating : -1}
  }


  const price = req.query.price  as string
  let filterOption = {} 
  if(price && price != "all"){
    const [min,max] = price.split("-").map(Number)
    filterOption = {price : {$gte:min,$lte:max}}
  }

  const products = await ProductModel.find({category,...filterOption}).sort(sortOption).skip(skip).limit(limit)
  const totalNumOfProducts = await ProductModel.countDocuments({category,...filterOption})
  const totalNumOfPages = Math.ceil(totalNumOfProducts/limit)
  const totalNumOfCategoryProducts = await ProductModel.countDocuments({category})
  return res.status(200).json({products,totalNumOfPages,totalNumOfCategoryProducts})
}
catch(e){
 res.status(400).json({message:e})
}
}

export async function getSearchResults(req:Request,res:Response){
  try{
    const {searchText} = req.params 
    const products = await ProductModel.find({name : {$regex : searchText,$options : "i"}})
    return res.status(200).json(products)
  }
  catch(e) {
   return res.status(500).json({message:e})
  }
}


