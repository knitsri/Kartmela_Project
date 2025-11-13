import { Truck, RotateCcw, Tag, Shield, Heart, ShoppingBag } from 'lucide-react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-gradient-to-r from-pink-800 to-red-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About KartMela</h1>
          <p className="text-xl text-pink-200">
            Your one-stop shop for quality products at the best prices
          </p>
        </div>
      </div>

      
      <div className="border border-pink-500 mt-5 py-2 text-center text-sm font-semibold text-[#341539] flex justify-center gap-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-pink-500" /> Fast Delivery
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw className="h-4 w-4 text-pink-500" /> Easy Returns
        </div>
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-pink-500" /> Lowest Prices
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Who We Are</h2>
          <p className="text-gray-600 text-lg text-center leading-relaxed">
            KartMela is a modern e-commerce platform designed to make shopping simple, 
            enjoyable, and affordable. We bring together fashion, electronics, and daily 
            essentials under one trusted platform.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-pink-100 p-2 rounded-full">
                <Tag className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Affordable Shopping</h3>
                <p className="text-gray-600 text-sm">Quality products at the best prices for everyone</p>
              </div>
            </div>

            
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-pink-100 p-2 rounded-full">
                <ShoppingBag className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Quality Products</h3>
                <p className="text-gray-600 text-sm">Curated selection from trusted sellers and brands</p>
              </div>
            </div>

            
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-pink-100 p-2 rounded-full">
                <Shield className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Secure Shopping</h3>
                <p className="text-gray-600 text-sm">Safe and seamless checkout experience</p>
              </div>
            </div>

            {/* Mission Point 4 */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-pink-100 p-2 rounded-full">
                <Truck className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Quick shipping with easy returns policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;