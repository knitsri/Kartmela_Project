import React, { useState } from 'react'
import Cookies from "js-cookie"
import { useParams } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_Backend_URL;

function Reviews(props) {
  const {id} = useParams()
  const jwtToken = Cookies.get('jwt_token')
 
 const {setShowReviewModal,setReviews,setProductsData} = props
 const [comment, setComment] = useState("")

  async function onSubmitReview() {
   const url = `${apiUrl}/api/addReviews/${id}`
   const options = {
    method :"POST",
    headers : {
      "Content-Type"  : "application/json",
      "Authorization" : `Bearer ${jwtToken}`
    },
    body : JSON.stringify({comment})
   }
   const response =  await fetch(url,options)
   const data = await response.json()
   console.log(data)
   setProductsData(data)
   setReviews(data.reviews)
   setShowReviewModal(false)
 }


  return (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md mx-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Write a Review</h3>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Review
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts about this product..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setShowReviewModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button onClick={onSubmitReview} className="flex-1 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
