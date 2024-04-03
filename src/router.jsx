import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Home from './components/home/home'
import Footer from './components/footer/footer'

function RouterComponent() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default RouterComponent
