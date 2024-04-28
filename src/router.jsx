import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Motor from './components/motor/motor'
import Footer from './components/footer/footer'
import Caravan from './components/caravan/caravan'
import Home from './components/home/home'
import Tuning from './components/tuning/tuning'
import UsedCar from './components/usedCar/usedCar'
import CarInfo from './components/other/carInfo'
import CaravanInfo from './components/other/caravanInfo'
import TuningInfo from './components/other/tuningInfo'
import UsedCarInfo from './components/other/usedCarInfo'
import CampingPlace from './components/campingPlace/campingPlace'
import CampingInfo from './components/campingPlace/campingInfo'
import Signin from './components/auth/signin'
import Registrate from './components/auth/registrate'

function RouterComponent() {
  const location = useLocation();
  const hideComponent = location.pathname !== "/login" && location.pathname !== "/signup";
  return (
    <div>
      {hideComponent && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/motor' element={<Motor/>}/>
        <Route path='/caravan' element={<Caravan/>}/>
        <Route path='/tuning' element={<Tuning/>}/>
        <Route path='/used-car' element={<UsedCar/>}/>
        <Route path='/motor/:id' element={<CarInfo/>}/>
        <Route path='/caravan/:id' element={<CaravanInfo/>}/>
        <Route path='/tuning/:id' element={<TuningInfo/>}/>
        <Route path='/used-car/:id' element={<UsedCarInfo/>}/>
        <Route path='/camping-place' element={<CampingPlace/>}/>
        <Route path='/camping-place/:id' element={<CampingInfo/>}/>

        <Route path='/login' element={<Signin/>}/>
        <Route path='/signup' element={<Registrate/>}/>
      </Routes>
      {hideComponent && <Footer/>}
    </div>
  )
}

export default RouterComponent
