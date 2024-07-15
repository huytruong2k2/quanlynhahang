import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
          <Navbar setShowLogin={setShowLogin}></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/Cart' element={<Cart></Cart>}/>
            <Route path='/Order' element={<PlaceOrder></PlaceOrder>}/>
          </Routes>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App