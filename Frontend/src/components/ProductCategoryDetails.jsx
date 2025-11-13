
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"
import { Filter, ArrowLeft,  ChevronLeft, ChevronRight } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const apiUrl = import.meta.env.VITE_Backend_URL;

function ProductCategoryDetails() {
    const { category } = useParams()
    const navigate = useNavigate()
    const [categoryData, setCategoryData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const pageFromUrl = parseInt(searchParams.get('page'))  || 1
    const sortFromUrl = searchParams.get("sort") || "featured"
    const [currentPage, setCurrentPage] = useState(pageFromUrl)
    const [totalPages,setTotalPages] = useState(3) 
    const [totalCategoryProducts, setTotalCategoryProducts] = useState(null)
    const [sortOption, setSortOption] = useState(sortFromUrl)
    const priceFromUrl = searchParams.get("price") || "all"
    const [priceFilter, setPriceFilter] = useState(priceFromUrl)
    const [likedProducts, setLikedProducts] = useState({})
    const jwtToken = Cookies.get('jwt_token')
    
 

  useEffect(() => {
    async function getCategoryDetails() {
        const options = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`
          }
        }
        const url = `${apiUrl}/api/getCategoryDetails/${category}?page=${currentPage}&limit=5&sort=${sortOption}&price=${priceFilter}`
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        setCategoryData(data.products)
        setTotalPages(data.totalNumOfPages)
        setTotalCategoryProducts(data.totalNumOfCategoryProducts)
        setIsLoading(false)
    }
    getCategoryDetails()
  },[currentPage,category,sortOption,priceFilter])

  
  const handleSortChange = (value) => {
    setSortOption(value)
    setSearchParams({page:currentPage,sort:value,price:priceFilter})
  }

  const handlePriceFilter = (range) => {
    setPriceFilter(range)
    setCurrentPage(1)
    setSearchParams({page:currentPage,sort:sortOption,price:range})
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setSearchParams({page,sort:sortOption,price:priceFilter})
  }

  async function handleWishlistBtn(id){
        setLikedProducts(prev => ({...prev,[id]:!prev[id]}))
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
      let wishlistObj = {}
      data.products.forEach(i => {
         wishlistObj[i.productId._id] = true 
      })
      setLikedProducts(wishlistObj)
      
    }
    getWishList()
  },[])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-pink-500 text-lg">Loading {category} products...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate("/")}
              className="flex items-center text-gray-600 hover:text-pink-500 min-w-[190px]"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Categories
            </button>
            <h1 className="text-2xl font-bold text-gray-800 capitalize hidden md:block">{category} Collection</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-2xl font-bold text-gray-800 capitalize  px-6 pt-5 md:hidden'>{category} Collection</h1>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <div className="flex items-center mb-6">
                <Filter className="h-5 w-5 text-pink-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-3">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-1000', label: 'Under ₹1000' },
                    { value: '1000-2000', label: '₹1000 - ₹2000' },
                    { value: '2000-3000', label: '₹2000 - ₹3000' },
                    { value: '3000+', label: 'Over ₹3000' }
                  ].map((option) => (
                    <div  key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={option.value}
                        checked={priceFilter === option.value}
                        onChange={() => handlePriceFilter(option.value)}
                        className="text-pink-500 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{option.label}</span>
                    </div>
                  ))}
                </div>
              </div>


              <div>
                <h3 className="font-medium text-gray-800 mb-3">Sort By</h3>
                <select
                  value={sortOption}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">{categoryData.length} products found</p>
            </div>

            {categoryData.length === 0  ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-600 text-lg">No products found for the selected filter.</p>
              </div>
            ) : totalCategoryProducts === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <p className="text-gray-600 text-lg">No products available in this category yet.</p>
                </div>
              ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {categoryData.map((product) => (
                   <ProductCard
                      key={product._id}
                      product={product}
                      isLiked={likedProducts[product._id]}
                      onWishlistToggle={handleWishlistBtn}
                      onViewDetails={(id) => navigate(`/product/${id}`)}
                    />
                  ))}
                </div>

                <div className="flex justify-center items-center space-x-2  bottom-6 left-0 right-0 ">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md ${
                      currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-md text-sm font-medium ${
                          currentPage === page
                            ? 'bg-pink-500 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-md ${
                      currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategoryDetails

