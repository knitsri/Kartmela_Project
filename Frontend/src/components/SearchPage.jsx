import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const apiUrl = import.meta.env.VITE_Backend_URL;

function SearchPage() {
  const location = useLocation()
  const userInput = location.state?.userInput || ""
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const jwtToken = Cookies.get('jwt_token')
  const navigate = useNavigate()

  useEffect(() => {
    async function getSearchResults() {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken}`
        }
      }
      const url = `${apiUrl}/api/products/search/${userInput}`
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
      setSearchResults(data)
      setIsLoading(false)
    }
    getSearchResults()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-800 to-red-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          <p className="text-pink-200">
            Found {searchResults.length} results for "{userInput}"
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-pink-500 text-lg">Searching products...</div>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-600">No products found</h3>
            <p className="text-gray-500 mt-2">Try searching with different keywords</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <div key={product._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg  border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2 truncate">{product.brand}</p>
                  
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star 
                        key={starIndex} 
                        className={`h-3 w-3 ${
                          starIndex < Math.floor(product.rating || 4) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <p className="font-bold text-gray-900">₹{product.price}</p>
                    <button onClick={() => navigate(`/product/${product._id}`)} className='text-pink-400 hover:text-pink-600'>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPage