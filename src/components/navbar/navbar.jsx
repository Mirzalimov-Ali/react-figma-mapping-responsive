import React from 'react'
import { NavbarContainer, NavbarNavigationContianer } from '../../style'
import logo from '../../assets/logo.png'
import downArrow from '../../assets/down-arrow.svg'
import cart from '../../assets/cart.png'
import user from '../../assets/user.svg'

function Navbar() {
  return (
    <NavbarContainer>
        <div>
            <img src={logo} alt="" />
        </div>
        <NavbarNavigationContianer>
            <p>Motor <img src={downArrow} alt="" /></p>
            <p>Caravan <img src={downArrow} alt="" /></p>
            <p>Tuning  <img src={downArrow} alt="" /></p>
            <p>Used Car <img src={downArrow} alt="" /></p>
            <p>Camping Place</p>
        </NavbarNavigationContianer>
        <div style={{display: "flex", gap: "20px"}}>
            <img src={cart} alt="" style={{cursor: "pointer"}}/>
            <img src={user} alt="" style={{cursor: "pointer"}}/>
            <p style={{display: "flex", alignItems: "center", gap: "5px", fontFamily: "Montserrat"}}>En <img src={downArrow} alt=""/></p>
        </div>
    </NavbarContainer>
  )
}

export default Navbar
