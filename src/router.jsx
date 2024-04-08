import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Motor from './components/motor/motor'
import Footer from './components/footer/footer'
import Caravan from './components/caravan/caravan'

function RouterComponent() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path='/' element={<Motor/>}/>
        <Route path='/caravan' element={<Caravan/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default RouterComponent
