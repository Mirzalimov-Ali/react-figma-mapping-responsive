import React from 'react'
import { NavbarContainer, NavbarNavigationContianer } from '../../style'
import logo from '../../assets/logo.png'
import downArrow from '../../assets/down-arrow.svg'
import cart from '../../assets/cart.png'
import user from '../../assets/user.svg'
import menu from '../../assets/hamburger-menu.svg'

function Navbar() {
  return (
    <NavbarContainer>
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <img src={menu} alt="" className='hamburger'/>
            <img src={logo} alt="" />
        </div>
        <NavbarNavigationContianer>
            <p>Motor <img src={downArrow} alt="" /></p>
            <p>Caravan <img src={downArrow} alt="" /></p>
            <p>Tuning  <img src={downArrow} alt="" /></p>
            <p>Used Car <img src={downArrow} alt="" /></p>
            <p>Camping Place</p>
        </NavbarNavigationContianer>
        <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
            <img src={cart} alt="" style={{cursor: "pointer"}}/>
            <img src={user} alt="" style={{cursor: "pointer"}} className='navbar-none'/>
            <p className='navbar-none'>En <img src={downArrow} alt="" className='navbar-none'/></p>
            <img src={menu} alt="" className='mobile-menu'/>
        </div>
    </NavbarContainer>
  )
}

export default Navbar
