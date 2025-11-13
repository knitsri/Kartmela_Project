
import { Truck, RotateCcw, Tag } from "lucide-react";
import Navbar from "./navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import BestSellers from "./BestSellers";
import Footer from "./Footer";

const apiUrl = import.meta.env.VITE_Backend_URL;

function Home() {
  const [bestSellersData, setBestSellersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories,setCategories] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    async function getBestSellersData() {
       const url = `${apiUrl}/api/bestSellers`;
      const response = await fetch(url);
      const data = await response.json();
      setBestSellersData(data);
      setIsLoading(false);
    }
    getBestSellersData();
  }, []);

  useEffect(() => {
    async function getCategories() {
      const url = `${apiUrl}/api/category`
      const response = await fetch(url)
      const data = await response.json()
      setCategories(data)
      setIsLoading(false)
    }
    getCategories()
  },[])

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <img 
        src="https://res.cloudinary.com/dndcaj4r2/image/upload/v1756378234/ChatGPT_Image_Aug_28_2025_04_19_50_PM_cmxsn4.png" 
        className='h-[50vh] lg:h-[70vh]  w-[100vw]'
      />
      <div className="border border-pink-500 mt-5 py-2  text-center text-sm font-semibold text-[#341539] flex justify-center gap-6 p-10 ">
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

      <h1 className="font-bold mt-10 ml-10 text-[25px] mb-5">Collections</h1>
              {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-pink-500 text-lg">Loading Categories...</div>
          </div>
        ) : (
          <div className='px-8'>
           <Slider {...settings}>
            {categories.map((category) => (
              <Categories key={category._id} category={category}/>
            ))}
          </Slider>
          </div>

        )}
      
      <div className="mt-16 px-10 mb-16">
        <h1 className="font-bold text-[25px] mb-8 text-center relative pb-3">
          Our Best Sellers
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-pink-500 rounded-full"></span>
        </h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-pink-500 text-lg">Loading best sellers...</div>
          </div>
        ) : (
          <Slider {...settings}>
            {bestSellersData.map((product) => (
              <BestSellers key={product._id} product={product}/>
            ))}
          </Slider>
        )}
      </div>

      <Footer/>
    </div>
  )
}

export default Home