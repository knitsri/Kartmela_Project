import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate,Navigate } from "react-router-dom";
import {useState} from 'react'
import Cookies from "js-cookie"

const apiUrl = import.meta.env.VITE_Backend_URL;

function SignUp() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [errorMsg,setErrorMsg] = useState('')
  const settings = {
    dots: true,
    infinite: true,
     arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  const navigate = useNavigate()

  function onSubmitSuccess(){
      navigate("/login",{replace:true})
  }

  function onSubmitFailure(e){
     setShowErrorMsg(true)
     setErrorMsg(e)
  }

  async function onSubmitSignupForm(e){
    e.preventDefault()
    const url = `${apiUrl}/auth/api/register`
    const userDetails = {username,email,password}
    const options = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(userDetails)
    }
    const response = await fetch(url,options)
    const data = await response.json()
    if(response.ok){
       onSubmitSuccess()
    }
    else{
      onSubmitFailure(data.message)
    }
  }

  const token = Cookies.get("jwt_token")
  if(token){
    return <Navigate to="/" replace/>
  }

   return(
      <div className=" h-screen bg-[#111827] text-white flex flex-row overflow-y-hidden">
         <div className="w-[50vw] h-screen hidden lg:block">
        <Slider {...settings} className="h-full">
          <div >
            <img 
              src="https://res.cloudinary.com/dndcaj4r2/image/upload/v1756024214/WhatsApp_Image_2025-08-24_at_13.41.03_gqueij.jpg" 
              alt="signup-img" 
              className="w-[50vw] h-screen object-cover"
            />
          </div>
          <div>
            <img 
              src="https://res.cloudinary.com/dndcaj4r2/image/upload/v1756033650/WhatsApp_Image_2025-08-24_at_13.42.20_hhqgbz.jpg"  
              alt="signup-img" 
              className="w-full h-screen object-cover"
            />
          </div>
          <div>
            <img 
              src="https://res.cloudinary.com/dndcaj4r2/image/upload/v1756035437/WhatsApp_Image_2025-08-24_at_13.46.20_vzroih.jpg"  
              alt="signup-img" 
              className="w-full h-screen object-cover"
            />
          </div>
          <div>
            <img 
              src="https://res.cloudinary.com/dndcaj4r2/image/upload/v1756035496/WhatsApp_Image_2025-08-24_at_13.48.04_q0l1wj.jpg"  
              alt="signup-img" 
              className="w-[50vw] h-screen object-cover"
            />
          </div>
          <div>
            <img 
              src="https://res.cloudinary.com/dndcaj4r2/image/upload/v1756035687/Your_Gateway_to_Stunning_Model_Ecommerce_Photography_with_Cliik_Studios_hfcjbj.jpg"  
              alt="signup-img" 
              className="w-full h-screen object-cover"
            />
          </div>
        </Slider>
      </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to KartMela</h1>
        <form className="flex flex-col gap-4 w-2/3" onSubmit={onSubmitSignupForm}>
          <div className="flex flex-col">
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-white p-2 bg-transparent rounded" placeholder="Enter username" required/>
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-white p-2 bg-transparent rounded" placeholder="Enter email" required/>
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-white p-2 bg-transparent rounded" placeholder="Enter password" required/>
          </div>
          <button className="bg-white text-black font-semibold p-2 rounded mt-4">Create Account</button>
          {showErrorMsg && <p className="pt-3 pb-3 text-red-500 text-center">{errorMsg}</p>}
          <p className="text-center mt-7">Already have an account ? <span className="underline hover:text-blue-500" onClick={() => navigate('/login',true)}>Login</span></p>
        </form>
      </div>
    </div>
      
   )
}

export default SignUp