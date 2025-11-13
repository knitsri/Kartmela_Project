import React from "react";
import { Star, Heart } from "lucide-react";

function ProductCard({ product, isLiked, onWishlistToggle, onViewDetails }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
 
      <div className="mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">by {product.brand}</p>
        <div className="flex items-center mb-2">
          <div className="flex mr-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.rating})</span>
        </div>

        <p className="text-lg font-bold text-gray-800">₹{product.price}</p>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onViewDetails(product._id)}
          className="text-sm text-pink-500 hover:text-pink-600 font-medium"
        >
          View Details
        </button>

        <button
          className="p-2 text-gray-400 hover:text-pink-500 transition-colors"
          onClick={() => onWishlistToggle(product._id)}
        >
          <Heart
            className={`h-5 w-5 ${
              isLiked ? "text-pink-500 fill-pink-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

