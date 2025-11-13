import type { Request,Response } from "express";
import { OrderModel } from "../model/OrderModel.js";
import { v4  as uuidv4} from "uuid";

export async function addOrders(req:Request,res:Response){
    try{
        const {products,totalPrice} = req.body 
        const userId = (req as any).user._id
        const orderId = "ORD" +  uuidv4().slice(0,8)
        const trackingId = "TRK" + uuidv4().slice(0,8)

        const order = await OrderModel.create({userId,products,totalPrice,orderId,trackingId})
        res.status(201).json(order)
   }
   catch(e){
      res.status(500).json({message:e})
   }
}

export async function getOrders(req:Request,res:Response) {
   try{
       const userId = (req as any).user._id 
       const  products = await OrderModel.find({userId}).populate("products.productId","image name") 
       res.status(200).json(products)
   }

   catch(e){
        res.status(500).json({message:e})
   }  
}
    