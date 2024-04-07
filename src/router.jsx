import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import Caravan from './components/caravan/caravan'

function RouterComponent() {
  return (
    <div>
      <Navbar/>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/caravan' element={<Caravan/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default RouterComponent
