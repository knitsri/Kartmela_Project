import React from 'react'
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {  Star, ShoppingCart } from "lucide-react";

const apiUrl = import.meta.env.VITE_Backend_URL;

function BestSellers(props) {
  const {product} = props 
  const jwtToken = Cookies.get('jwt_token')
  const navigate = useNavigate()

   async function handleAddToCart(id){
    const options = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${jwtToken}`
      },
      body : JSON.stringify({productId:id , quantity : 1})
    }
    const url = `${apiUrl}/api/cart/addProduct`
    const response = await fetch(url,options)
    const data = await response.json()
    console.log(data)
    navigate("/cart")
  }

  return (
    <div key={product._id} className="px-3 group">
        <Link to={`/product/${product._id}`}>
            <div className="bg-white rounded-lg  shadow-md hover:shadow-lg  border border-gray-100 mb-9">
            <div className="relative overflow-hidden">
            <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                Best Seller
            </div>
            </div>
            
            <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2 truncate">{product.brand}</p>
            
            <div className="flex items-center mb-2">
                {[...Array(5)].map((_, starIndex) => (
                <Star 
                    key={starIndex} 
                    className={`h-3 w-3 ${
                    starIndex < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`} 
                />
                ))}
            <svg className="w-3 h-3 text-gray-500 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
            <span className="text-xs text-gray-500 ml-1">{product.soldCount}+ bought</span>
            </div>
            
            <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-gray-900">₹{product.price}</span>
                <button onClick={() => handleAddToCart(product._id)} className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full">
                <ShoppingCart className="h-4 w-4 " />
                </button> 
            </div>
            </div>
        </div>
        </Link>
               
    </div>
  )
}

export default BestSellers
