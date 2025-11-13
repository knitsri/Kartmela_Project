
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState("")

  function handleLogOutBtn(){
     Cookies.remove('jwt_token')
     navigate("/login")
  }

  function handleSearchBtn(){
    if(userInput !== ""){
        navigate("/search",{state:{userInput}})
        setUserInput("")
    }
  }

  return (
    <>
     <div className="bg-gradient-to-r from-pink-800 to-red-800 text-white text-center text-sm py-2 animate-pulse">
      🎉 Get 20% OFF on your first order | 🚚 Free Shipping above ₹999
    </div>

      <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="max-w-[100vw] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <ShoppingCartIcon className="w-7 h-7 text-pink-600" />
              <span className="font-extrabold text-2xl text-gray-800">KartMela</span>
            </div>

            <div className="hidden sm:flex items-center gap-6 md:gap-8">
              <div className="hidden lg:flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-full bg-white min-w-[300px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                  />
                </svg>
                <input
                  className="flex-1 bg-transparent outline-none placeholder-gray-500 text-sm w-full min-w-0"
                  type="text"
                  value={userInput}
                  placeholder="Search products"
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <button 
                  className="px-3 py-1 bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-600 text-sm rounded-full  flex-shrink-0"
                  onClick={handleSearchBtn}
                >
                  Search
                </button>
              </div>

              <div className="flex items-center gap-4 md:gap-5 text-gray-600">
                
                <div 
                  className="cursor-pointer hover:text-pink-600" 
                  onClick={() => navigate("/profile")}
                  title="Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

               
                <div 
                  className="cursor-pointer hover:text-pink-600 transition-colors" 
                  onClick={() => navigate("/wishlist")}
                  title="Wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>

               
                <div 
                  className="relative cursor-pointer hover:text-pink-600 transition-colors" 
                  onClick={() => navigate("/cart")}
                  title="Cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>
                </div>
              </div>

              <button 
                onClick={handleLogOutBtn} 
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-md  text-sm md:px-6 md:text-base"
              >
                Logout
              </button>
            </div>

          
            {!open && <button
              onClick={() => setOpen(!open)}
              className="sm:hidden p-2 z-60"
            >
                <svg
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="21" height="1.5" rx=".75" fill="#426287" />
                  <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                  <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>}
          </div>

          {!open && (
            <div className="flex lg:hidden items-center gap-2 border border-gray-300 px-3 py-2 rounded-full bg-white mt-3 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                />
              </svg>
              <input
                className="flex-1 bg-transparent outline-none placeholder-gray-500 text-sm w-full"
                type="text"
                value={userInput}
                placeholder="Search products"
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button 
                className="px-3 py-1 bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-600 text-sm rounded-full transition flex-shrink-0"
                onClick={handleSearchBtn}
              >
                Search
              </button>
            </div>
          )}
        </div>

        {open && <div
          className="sm:hidden fixed top-0 left-0 w-full h-screen bg-white z-50"
        >
          <div className="pt-20 px-6">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 p-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#426287"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#426287"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex flex-col gap-6">
              <div 
                className="flex items-center gap-4 cursor-pointer hover:text-pink-600 w-full py-3 text-lg border-b border-gray-100"
                onClick={() => { navigate("/profile"); setOpen(false); }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Profile</span>
              </div>

              <div 
                className="flex items-center gap-4 cursor-pointer hover:text-pink-600 w-full py-3 text-lg border-b border-gray-100"
                onClick={() => { navigate("/wishlist"); setOpen(false); }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span>Wishlist</span>
              </div>

              <div 
                className="flex items-center gap-4 cursor-pointer hover:text-pink-600 w-full py-3 text-lg border-b border-gray-100"
                onClick={() => { navigate("/cart"); setOpen(false); }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                <span>Cart</span>
              </div>

              <button 
                onClick={() => { handleLogOutBtn(); setOpen(false); }} 
                className="w-full px-6 py-3 mt-4 bg-pink-600 hover:bg-pink-700 transition text-white rounded-full text-lg shadow"
              >
                Logout
              </button>
            </div>
          </div>
        </div>}
        
      </nav>
    </>
  );
}

export default Navbar