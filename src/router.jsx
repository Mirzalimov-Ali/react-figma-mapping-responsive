import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Home from './components/home/home'

function RouterComponent() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default RouterComponent
