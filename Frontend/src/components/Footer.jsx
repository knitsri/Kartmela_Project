import React from 'react'
import { useNavigate } from "react-router-dom";
import {  Heart, Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";
function Footer() {
  const navigate = useNavigate()
  return (
   <div className="bg-[#341539] text-white py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-300">KartMela</h3>
            <p className="text-gray-300 mb-4">
              Your favorite online shopping destination for fashion, electronics, groceries, and beauty products.
            </p>
            <div className="flex space-x-4">
              <span className="text-pink-300 hover:text-pink-400 cursor-pointer">
                <Facebook className="h-5 w-5" />
              </span>
              <span className="text-pink-300 hover:text-pink-400 cursor-pointer">
                <Instagram className="h-5 w-5" />
              </span>
              <span className="text-pink-300 hover:text-pink-400 cursor-pointer">
                <Twitter className="h-5 w-5" />
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-200">Quick Links</h3>
            <ul className="space-y-2">
              <li onClick={() => navigate("/about")}><span className="text-gray-300 hover:text-pink-300 cursor-pointer">About Us</span></li>
              <li onClick={() => navigate("/contact-us")}><span className="text-gray-300 hover:text-pink-300 cursor-pointer">Contact</span></li>
              <li onClick={() => navigate("/privacy-policy")}><span className="text-gray-300 hover:text-pink-300 cursor-pointer">Privacy Policy</span></li>
              <li onClick={() => navigate("/terms-of-services")}><span className="text-gray-300 hover:text-pink-300 cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-200">Stay Updated</h3>
            <p className="text-gray-300 mb-3">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-gray-700 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-pink-400 w-full"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-r ">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Made with <Heart className="h-3 w-3 inline text-pink-400" /> by KartMela &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
     </div>
  )
}

export default Footer
