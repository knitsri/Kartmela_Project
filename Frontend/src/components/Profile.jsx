
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Trash2, Mail, Phone } from "lucide-react";

const apiUrl = import.meta.env.VITE_Backend_URL;

function ProfilePage() {
  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwt_token');
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  
  

  useEffect(() => {
    async function getUserOrders() {
        const url = `${apiUrl}/api/orders/user-orders`;
        const options = {
          headers: {
            "Authorization": `Bearer ${jwtToken}`
          }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setOrders(data);
        console.log(data)
        setIsLoading(false);
    }
    getUserOrders();
  },[]);

  useEffect(() => {
     async function getUserDetails() {
        const options = {
          headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${jwtToken}`
          }
        }
        const url = `${apiUrl}/auth/api/user-details`
        const response =  await fetch(url,options)
        const data = await response.json()
        setUser(data)
        console.log(data)
     }
     getUserDetails()
  },[])

  async function handleDeleteBtn(){
    const options = {
     method : "DELETE" ,
     headers : {
      "Content-Type" : "application/json",
      "AUthorization" : `Bearer ${jwtToken}`
     }
    }
    const url = `${apiUrl}/auth/api/delete/user`
    await fetch(url,options)
    Cookies.remove('jwt_token')
    navigate("/signup")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-pink-500 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-800 to-red-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-pink-200 mt-2">Manage your account and orders</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 sticky top-24">
               <div className="text-center">

                 <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center">
                   <span className="text-3xl font-bold text-white">
                    {user?.username?.[0]?.toUpperCase() || "U"}
                  </span>
                 </div>
                 <h2 className="text-xl font-bold text-gray-800">{user.username}</h2>
                 <p className="text-gray-600 mt-1">{user.email}</p>
                 <div className="flex justify-center items-center mt-6">
                   <div className="text-center  px-4 py-4 bg-gray-50 rounded-lg border border-gray-200">
                     <p className="text-2xl font-bold text-pink-600">{orders.length}</p>
                     <p className="text-xs text-gray-600">Orders</p>
                   </div>
                 </div>
               </div>
               <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-lg border border-pink-200">
                <h3 className="font-semibold text-gray-800 mb-2">Need Help?</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                   <Mail className="h-4 w-4 text-pink-500" />
                   support@kartmela.com
                 </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                   <Phone className="h-4 w-4 text-pink-500" />
                   +1-800-KARTMELA
                 </div>
               </div>
               
               <button onClick={handleDeleteBtn} className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition duration-200 flex items-center justify-center gap-2">
                 <Trash2 className="h-4 w-4" />
                 Delete Account
               </button>
             </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Order History</h2>
                <span className="text-sm text-gray-600">{orders.length} orders</span>
              </div>

              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">No orders yet</h3>
                  <p className="text-gray-500 mt-2">Start shopping to see your orders here</p>
                  <button 
                    onClick={() => navigate("/")}
                    className="mt-4 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md ">
  
                      <div className="flex justify-between space-x-10 ">
                        <div className="mb-4">
                        <h3 className="font-semibold text-gray-800">Order #{order.orderId}</h3>
                        <p className="text-sm text-gray-600">Tracking: {order.trackingId}</p>
                        <p className="text-sm text-gray-600">Total: ₹{order.totalPrice}</p>
                      </div>
                        <div>
                           <p className="text-sm text-gray-600">Ordered On : {new Date(order.createdAt).toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {order.products.map((item) => (
                          <div key={item._id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                           <img 
                              src={item.productId.image} 
                              alt={item.productId.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800">{item.productId.name}</h4>
                              <p className="text-gray-500 text-sm">
                                {item.size && `Size: ${item.size} | `}Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;