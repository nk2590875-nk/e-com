
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import ContactUs from './pages/ContactUs'
import DashboardPage from './pages/DashboardPage'
import OrderPage from './pages/OrderPage'
import ProfilePage from './pages/profilePage'
import UpdateProfile from './pages/UpdateProfile'
import SaveAddress from './pages/SaveAddress'
import WishlistPage from './pages/WishlistPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ForgetpasswordPage from './pages/ForgetpasswordPage'
import CartPage from './pages/CartPage'
import ProductdetailsPage from './pages/productdetailsPage'
import OrderconfirmationPage from './pages/OrderconfirmationPage'
import ErrorPage from './pages/ErrorPage'
import FeaturePage from './pages/FeaturePage'
import TestimonialPage from './pages/TestimonialPage'
import AdminHomePage from './pages/Admin/AdminHomePage'
import AdminMaincategoryPage from './pages/Admin/Maincategory/AdminMaincategoryPage'
import AdminMaincategoryCreatePage from './pages/Admin/maincategory/AdminMaincategoryCreatePage'
import AdminMaincategoryUpdatePage from './pages/Admin/Maincategory/AdminMaincategoryUpdatePage'







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
        <Route path='/Forget-password' element={<ForgetpasswordPage />} />
        <Route path='/Cart' element={<CartPage />} />
        <Route path='/Productdetails' element={<ProductdetailsPage />} />
        <Route path='/Order-confirmation' element={<OrderconfirmationPage />} />
        <Route path='/Testimonial' element={<TestimonialPage />} />

        {/* Admin route */}
        <Route path='/admin' element={<AdminHomePage />} />
         <Route path='/admin/maincategory' element={<AdminMaincategoryPage />} />
         
       <Route path='/admin/maincategory/Create' element={<AdminMaincategoryCreatePage />} />
        <Route path='/admin/maincategory/edit/:id' element={<AdminMaincategoryUpdatePage />} />
        <Route path='/*' element={<ErrorPage />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
