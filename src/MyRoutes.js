import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Second from './Second'
import Home from './pages/Home'
import Scholarships from './pages/Scholarships'
import Sports from './pages/Sports'
import Covid19 from './pages/Covid19'
import AboutUs from './pages/AboutUs'
import FAQs from './pages/FAQs'
import Register from './pages/Register'
import Login from './pages/Login'
import EmailConfirmation from './pages/EmailConfirmation'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import UserDashboard from './pages/UserDashboard'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/second' element={<Second/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/scholarships' element={<Scholarships/>}/>
            <Route path='/sports' element={<Sports/>}/>
            <Route path='/covid19' element={<Covid19/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='faqs' element={<FAQs/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/confirm/:token' element={<EmailConfirmation/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            <Route path='/resetpassword/:token' element={<ResetPassword/>}/>

            <Route path='user/dashboard' element={<UserDashboard/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes