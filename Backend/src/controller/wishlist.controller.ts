import type { Request,Response } from "express";
import { wishListModel } from "../model/wishlist.model.js";


export async function AddToWishList(req:Request,res:Response){
  try{
    const userId = (req as any).user._id
    const {productId} = req.body 
    const wishlist = await wishListModel.findOne({userId})
    if(!wishlist){
       const product = await wishListModel.create({userId,products:[{productId}]})
       res.status(201).json(product)
    }
    else{
        const existingProduct = wishlist.products.find(p => p.productId.toString() === productId)
        if(!existingProduct){
            wishlist.products.push({productId})
            await wishlist.save()
            res.status(200).json({
                message : "Added to wishlist successfully."
            })
        }
        else{
            wishlist.products.pull({productId})
            await wishlist.save()
            res.status(200).json({
                message : "Removed from the wishlist successfully"
            })
        }
    }
        
  }
  catch(e){
     res.status(400).json({message:e})
  }
}

export async function GetWishList(req:Request,res:Response){
 const userId = (req as any).user._id 
 try{
   const wishlist = await wishListModel.findOne({userId}).populate("products.productId")

   res.status(200).json(wishlist)
 }
 catch(e){
    res.status(500).json({
        message : e
    })
 }
}

export async function DeleteFromWishlist(req:Request,res:Response){
   const userId = (req as any).user._id
  try{
   const {productId} = req.body
   const wishlist = await wishListModel.findOne({userId})
   if(!wishlist){
     return res.status(404).json({message:"Wishlist not found."})
   } 
   wishlist.products.pull({productId})
   await wishlist.save()
   const updatedWishlist = await wishListModel.findOne({userId}).populate("products.productId")
   return res.status(200).json(updatedWishlist)
  }
  catch(e){
    res.status(500).json({message:e})
  }
}