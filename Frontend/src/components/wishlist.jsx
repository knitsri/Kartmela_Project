
import {useNavigate} from "react-router-dom"
import {useState,useEffect} from "react"
import { Heart, ArrowLeft, ShoppingCart, Trash2, Star, Eye } from 'lucide-react'
import Cookies from "js-cookie"

const apiUrl = import.meta.env.VITE_Backend_URL;

function Wishlist() {
   const navigate = useNavigate()
   const [wishlist,setWishlist] = useState([])
   const [isLoading,setIsLoading] = useState(true)
   const jwtToken = Cookies.get("jwt_token")

   useEffect(() => {
    async function getWishList(){
      const options = {
         headers : {
          "Authorization" : `Bearer ${jwtToken}`
         }
      }
      const url= `${apiUrl}/api/wishlist/getWishList`
      const response = await fetch(url,options)
      const data = await response.json()
      console.log(data)
      setWishlist(data.products)
      setIsLoading(false)
    }
    getWishList()
   },[])

   async function handleAddToCart(id){
     const url = `${apiUrl}/api/cart/addProduct`
     const options = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${jwtToken}`
      },
      body : JSON.stringify({productId:id,quantity:1})
     }

     const response = await fetch(url,options)
     const data = await response.json()
     console.log(data)
  }

  async function handleDeleteFromWishlist(id){
    const options = {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${jwtToken}`
      },
      body : JSON.stringify({productId:id})
    }
    const url= `${apiUrl}/api/wishlist/deleteProduct`
    const response = await fetch(url,options)
    const data = await  response.json()
    console.log(data)
    setWishlist(data.products)
  }

   if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-pink-500 text-lg">Loading wishlist...</div>
      </div>
    )
  }

   return (

    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-pink-500"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Shopping
            </button>
            <h1 className="text-2xl font-bold text-gray-800 hidden md:block">My Wishlist</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 px-6 pt-4 md:hidden">My Wishlist</h1>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {wishlist.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Heart className="h-16 w-16 text-pink-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Save your favorite items here for later</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md font-medium "
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800">
              Saved Items ({wishlist.length})
            </h2>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((item) => (
                <div key={item.productId._id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <img 
                      src={item.productId.image} 
                      alt={item.productId.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{item.productId.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">by {item.productId.brand}</p>
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{item.productId.rating}</span>
                    </div>
                    <p className="text-lg font-bold text-gray-800">₹{item.productId.price}</p>
                  </div>


                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => navigate(`/product/${item.productId._id}`)}
                      className="flex items-center text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      <span className="text-sm">View</span>
                    </button>
                    <button 
                      onClick={() => handleAddToCart(item.productId._id)}
                      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => handleDeleteFromWishlist(item.productId._id)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Wishlist
