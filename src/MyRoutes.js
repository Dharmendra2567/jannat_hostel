import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Second from './Second'
import Home from './pages/Home'
import Scholarships from './pages/Scholarships'
import Sports from './pages/Sports'
import Covid19 from './pages/Covid19'
import AboutUs from './pages/AboutUs'

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
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes