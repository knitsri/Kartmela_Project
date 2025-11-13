import { useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import { Star, ShoppingCart, Heart, ArrowLeft, Truck, RotateCcw, Shield,MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Reviews from "./reviews";
import Cookies from "js-cookie"

const apiUrl = import.meta.env.VITE_Backend_URL;

function ProductItemDetails() {

  const navigate = useNavigate();
  const [product, setProductsData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [reviews, setReviews] = useState([])
  const [showReviewModal,setShowReviewModal] = useState(false)
  const [selectedSize, setSelectedSize] = useState("")
  const [isLiked,setIsLiked] = useState(false)

  const {id} = useParams()

  const jwtToken = Cookies.get('jwt_token')



  useEffect(() => {
    async function getBestSellersProductData(){
      const options = {
        headers : {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${jwtToken}`
        }
      }
      const url = `${apiUrl}/api/bestSellers/${id}`
     const response = await fetch(url,options)
     const data = await response.json()
     console.log(data)
     setProductsData(data)
     setReviews(data.reviews)
     setIsLoading(false)
     setIsLiked(data.isInWishList)
     setSelectedSize(data.UserSelectedSize)
    }
    getBestSellersProductData()
  },[])

   async function HandleAddToCart(){
     const url = `${apiUrl}/api/cart/addProduct`
     const options = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${jwtToken}`
      },
      body : JSON.stringify({productId:id,quantity:1,size:selectedSize})
     }
     console.log(selectedSize)

     const response = await fetch(url,options)
     const data = await response.json()
     navigate("/cart")
     console.log(data)
  }

  async function handleWishlistBtn(){
        setIsLiked(prev => !prev)
        const url= `${apiUrl}/api/wishlist/addToWishlist`
        const options = {
          method : "POST",
          headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${jwtToken}`
          },
          body : JSON.stringify({productId:id})
        }
        const response = await fetch(url,options)
        const data = await response.json()
        console.log(data)
  }

  function renderLoadingView(){
     return(
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center ">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-pink-500 animate-spin mb-4"></div>
        <div>
          <p className="text-gray-600 font-medium mt-2">Loading product details...</p>
        </div>
    </div>
     )
  }

  function renderProductsView(){
    return(
      <div className="min-h-screen bg-gray-50">

      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-pink-500 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>

 
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-6">
          <div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-100  md:h-180 object-cover"
              />
            </div>
          </div>


          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">by {product.brand}</p>
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className={`h-4 w-4 ${
                      starIndex < Math.floor(product.rating) 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                ({product.rating}) • {product.soldCount}+ bought
              </span>
            </div>

            <div className="mb-6">
              <span className="text-2xl font-bold text-gray-800">₹{product.price}</span>
            </div>

            <div className={`mb-6 inline-block px-3 py-1 rounded-full text-sm font-medium ${
              product.stock === "In Stock" 
                ? "bg-green-100 text-green-800" 
                : "bg-red-100 text-red-800"
            }`}>
              {product.stock}
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={selectedSize === size ? "px-4 py-2 border border-pink-500 text-gray-700 rounded-md hover:border-gray-400" : "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:border-gray-400"}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-4 mb-6">
              <button onClick={HandleAddToCart} className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              
              <button className="p-3 border border-gray-300 rounded-md" onClick={handleWishlistBtn}>
              <Heart
              className={`h-5 w-5 ${
                isLiked ? "text-pink-500 fill-pink-500" : "text-gray-600"
              }`}
               />
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-800 mb-4">Product Details</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <MessageSquare className="h-5 w-5 mr-2 text-pink-500" />
            Customer Reviews ({reviews.length})
          </h2>
          
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {console.log(reviews)}

              {reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-800">{review.username}</span>
                    <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">No reviews yet. Be the first to review this product!</p>
          )}

          <div className="mt-8 text-center">
            <button onClick={() => setShowReviewModal(true)} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Write a Review
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Why Shop With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over ₹999</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <RotateCcw className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day return policy</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">Safe and encrypted</p>
            </div>
          </div>
        </div>
      </div>
      {showReviewModal && <Reviews setShowReviewModal={setShowReviewModal} setReviews={setReviews}  setProductsData={setProductsData}/>}
    </div>
    )
  }

  return (
    isLoading ? ( renderLoadingView() ) : (renderProductsView())
  );
  
}

export default ProductItemDetails
