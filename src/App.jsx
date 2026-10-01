
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ProfilePage from "./pages/ProfilePage";
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import ContactUs from './pages/ContactUs'
import DashboardPage from './pages/DashboardPage'
import OrderPage from './pages/OrderPage'
//import ProfilePage from './pages/profilePage'
import UpdateProfile from './pages/UpdateProfile'
import SaveAddress from './pages/SaveAddress'
import WishlistPage from './pages/WishlistPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import CartPage from './pages/CartPage'
import  ProductDetailsPage from './pages/ProductDetailsPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import ErrorPage from './pages/ErrorPage'
import FeaturePage from './pages/FeaturePage'
import TestimonialPage from './pages/TestimonialPage'
import AdminHomePage from './pages/Admin/AdminHomePage'
import AdminMainCategoryPage from './pages/Admin/MainCategory/AdminMainCategoryPage'
import AdminMainCategoryCreatePage from './pages/Admin/MainCategory/AdminMainCategoryCreatePage'
import AdminMainCategoryUpdatePage from './pages/Admin/MainCategory/AdminMainCategoryUpdatePage'







export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='/Shop' element={<ShopPage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Feature' element={<FeaturePage />} />
        <Route path='/Contact' element={<ContactUs />} />
        <Route path='/Dashboard' element={<DashboardPage />} />
        <Route path='/Order' element={<OrderPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/Update-profile' element={<UpdateProfile />} />
        <Route path='/Address' element={<SaveAddress />} />
        <Route path='/Wishlist' element={<WishlistPage />} />
        <Route path='/Signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/Forget-password' element={<ForgetPasswordPage />} />
        <Route path='/Cart' element={<CartPage />} />
        <Route path='/ProductDetailsPage' element={<ProductDetailsPage />} />
        <Route path='/Order-confirmation' element={<OrderConfirmationPage />} />
        <Route path='/Testimonial' element={<TestimonialPage />} />

        {/* Admin route */}
        <Route path='/admin' element={<AdminHomePage />} />
         <Route path='/admin/MainCategory' element={<AdminMainCategoryPage />} />
         
       <Route path='/admin/MainCategory/Create' element={<AdminMainCategoryCreatePage />} />
        <Route path='/admin/MainCategory/edit/:id' element={<AdminMainCategoryUpdatePage />} />
        <Route path='/*' element={<ErrorPage />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
