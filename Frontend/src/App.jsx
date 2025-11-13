
import Home from "./components/home"
import Login from "./components/login"
import SignUp from "./components/signup"
import ProductItemDetails from "./components/ProductItemDetails"
import Cart from "./components/cart"
import Wishlist from "./components/wishlist"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import ProductCategoryDetails from "./components/ProductCategoryDetails"
import ProfilePage from "./components/Profile"
import OrderConfirmation from "./components/OrderConfirmation"
import SearchPage from "./components/SearchPage"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsOfService from "./components/TermsOfServices"
import ProtectedRoute from "./components/ProtectedRoute"
import NotFound from "./components/NotFound"

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/product/:id" element={<ProtectedRoute><ProductItemDetails/></ProtectedRoute>}/>
        <Route path="/product/category/:category" element={<ProtectedRoute><ProductCategoryDetails/></ProtectedRoute>}/>
        <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist/></ProtectedRoute>}></Route>
        <Route path="/profile" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}></Route>
        <Route path="/order-confirmation" element={<ProtectedRoute><OrderConfirmation/></ProtectedRoute>}></Route>
        <Route path="/search" element={<ProtectedRoute><SearchPage/></ProtectedRoute>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/terms-of-services" element={<TermsOfService/>}></Route>
        <Route path="*" element={<ProtectedRoute><NotFound/></ProtectedRoute>}/>
      </Routes>

     </BrowserRouter>
    </>
  )
}

export default App



