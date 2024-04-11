import React from 'react'
import { NavbarContainer, NavbarNavigationContianer } from '../../style'
import logo from '../../assets/logo.png'
import downArrow from '../../assets/down-arrow.svg'
import cart from '../../assets/cart.png'
import user from '../../assets/user.svg'
import menu from '../../assets/hamburger-menu.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <NavbarContainer>
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <img src={menu} alt="" className='hamburger'/>
            <Link to={"/"}><img src={logo} alt="" /></Link>
        </div>
        <NavbarNavigationContianer>
            <Link style={{textDecoration: "none"}} to={"/motor"}><p>Motor <img src={downArrow} alt="" /></p></Link>
            <Link style={{textDecoration: "none"}} to={"/caravan"}><p>Caravan <img src={downArrow} alt="" /></p></Link>
            <Link style={{textDecoration: "none"}} to={"/tuning"}><p>Tuning  <img src={downArrow} alt="" /></p></Link>
            <Link style={{textDecoration: "none"}} to={"/used-car"}><p>Used Car <img src={downArrow} alt="" /></p></Link>
            <Link style={{textDecoration: "none"}} to={"/"}><p>Camping Place</p></Link>
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
