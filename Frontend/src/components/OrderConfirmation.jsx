import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function OrderConfirmation() {
  const navigate = useNavigate();
  const location = useLocation()


  const {ordersData} = location.state

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 max-w-md w-full text-center">
        <CheckCircle className="h-16 w-16 text-pink-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">Thank you for shopping with KartMela 🎉</p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-semibold">{ordersData.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tracking ID:</span>
              <span className="font-semibold">{ordersData.trackingId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-semibold">₹{ordersData.totalPrice}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button 
            onClick={() => navigate('/profile')}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2"
          >
            <User className="h-4 w-4" />
            View Orders
          </button>
          <button 
            onClick={() => navigate('/')}
            className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 rounded-md font-medium flex items-center justify-center gap-2"
          >
            <Home className="h-4 w-4" />
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;