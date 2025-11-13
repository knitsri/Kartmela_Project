import React from 'react'
import { useState , useEffect} from 'react'
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Truck, RotateCcw, Shield } from 'lucide-react'
import { Navigate } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_Backend_URL;

function Cart() {
  const jwtToken = Cookies.get('jwt_token')
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  
  useEffect(() => {
    async function getCartProducts(){
       const url = `${apiUrl}/api/cart/getProducts`
       const options = {
        headers : {
            "Authorization" : `Bearer ${jwtToken}`
        }
       }
       const response = await fetch(url,options)
       const data = await response.json()
       setCartProducts(data?.products || [])
       setIsLoading(false)

    }
    getCartProducts()
  },[])

  async function handleIncrease(id) {
    const url = `${apiUrl}/api/cart/update/${id}`
    const options = {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${jwtToken}`
        },
        body : JSON.stringify({action : "increase"})
    }
    const response = await fetch(url,options)
    if(response.ok){
         setCartProducts(prev => prev.map(p => p.productId._id === id ? {...p,quantity:p.quantity+1} : p))
    }
  }

  async function handleDecrease(id){
    const url = `${apiUrl}/api/cart/update/${id}`
    const options = {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${jwtToken}`
        },
        body : JSON.stringify({action:"decrease"})
    }
    const response = await fetch(url,options)

   if(response.ok){
      setCartProducts(prev => prev.map(p => {
        if (p.productId._id === id && p.quantity > 1) {
          return {...p, quantity: p.quantity - 1};
        }
        return p;
      }));
    }
  }

  async function handleDelete(id){
    const url= `${apiUrl}/api/cart/deleteProduct/${id}`
    const options = {
        "method" : "DELETE",
        headers : {
           "Content-Type" : "application/json",
          "Authorization" : `Bearer ${jwtToken}`
        }
    }
    const response = await fetch(url,options)
    if(response.ok){
        const filteredCartProducts = cartProducts.filter(p => p.productId._id !== id)
        setCartProducts(filteredCartProducts)
    }
  }

  async function clearCart(){
    const options = {
       method : "DELETE",
       headers : {
        "AUthorization" : `Bearer ${jwtToken}`
       }
    }
    const url = `${apiUrl}/api/cart/clear`
    await fetch(url,options)
    setCartProducts([])
  }

    const subtotal = cartProducts.reduce((total, product) => total + (product.productId.price * product.quantity), 0)
    const shipping = subtotal > 999 ? 0 : 1000
    const total = subtotal + shipping

  async function handleCheckOutBtn(){
    const options = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${jwtToken}`
      },
      body : JSON.stringify({products : cartProducts,totalPrice:total})
    }
    const url = `${apiUrl}/api/cart/place-orders`
    const response = await fetch(url,options)
    if(response.ok){
         const ordersData = await response.json()
         console.log(ordersData)
         clearCart()
         navigate("/order-confirmation",{state:{ordersData}}) 
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-pink-500 text-lg">Loading cart...</div>
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
              Continue Shopping
            </button>
            <h1 className="text-2xl font-bold text-gray-800 hidden md:block">Shopping Cart</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {cartProducts.length === 0 ? (
          
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some products to see them here</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md font-medium"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Cart Items ({cartProducts.length})
                </h2>
                
                
                {cartProducts.map((product) => (
                  <div key={product._id} className="border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:mb-0">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={product.productId.image} 
                          alt={product.productId.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-800 mb-1">{product.productId.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">by {product.productId.brand}</p>
                        <p className="text-lg font-bold text-gray-800 mb-3">₹{product.productId.price}</p>
                        {product.size && <p className="text-gray-600 text-sm mb-2">size : {product.size}</p>}
                        <div className="flex items-center mb-4">
                          <span className="text-sm text-gray-600 mr-3">Quantity:</span>
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button className="px-3 py-1 text-gray-600 hover:text-gray-800" onClick={() => handleDecrease(product.productId._id)}>
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-1 border-l border-r border-gray-300">
                              {product.quantity}
                            </span>
                            <button className="px-3 py-1 text-gray-600 hover:text-gray-800">
                              <Plus className="h-4 w-4" onClick={() => handleIncrease(product.productId._id)}/>
                            </button>
                          </div>
                        </div>
                        
                        <button className="flex items-center text-red-600 hover:text-red-800 text-sm" onClick={() => handleDelete(product.productId._id)}>
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">₹{shipping}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
                
               
                <button onClick={handleCheckOutBtn} className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-md font-medium mb-4 transition-colors">
                  Proceed to Checkout
                </button>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-pink-500 mr-2" />
                      <span className="text-sm text-gray-600">Free shipping on orders over ₹999</span>
                    </div>
                    <div className="flex items-center">
                      <RotateCcw className="h-5 w-5 text-pink-500 mr-2" />
                      <span className="text-sm text-gray-600">30-day easy returns</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-pink-500 mr-2" />
                      <span className="text-sm text-gray-600">Secure payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
  
}

export default Cart
