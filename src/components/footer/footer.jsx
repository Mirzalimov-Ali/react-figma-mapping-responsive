import React from 'react'
import { Link } from 'react-router-dom'

import footerImg1 from '../../assets/footer-img-1.png'
import footerImg2 from '../../assets/footer-img-2.png'
import footerImg3 from '../../assets/footer-img-3.png'
import { FooterContainer, H2 } from '../../style'

function Footer() {
  return (
    <div>
      <FooterContainer>
        <div>
          <p style={{fontSize: "40px", fontWeight: "600"}}>Camper</p>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
          <H2>Services</H2>
          <p>Camping</p>
          <p>Lodging</p>
          <p>Harbor</p>
          <p>Day Use</p>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: '10px'}}>
          <H2>Menu</H2>
          <Link to={""} style={{textDecoration: "none", color: "white"}}>About</Link>
          <Link to={""} style={{textDecoration: "none", color: "white"}}>Services</Link>
          <Link to={""} style={{textDecoration: "none", color: "white"}}>Booking</Link>
          <Link to={""} style={{textDecoration: "none", color: "white"}}>Blog</Link>
        </div>
        

        <div > 
          <H2>Contact</H2>

          <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px"}}>
            <img src={footerImg1} alt="" />
            <img src={footerImg2} alt="" />
            <img src={footerImg3} alt="" />
          </div>
          

          <p>021 Korea Seul, LA</p>
          <p>camper@example.com</p>
          <p>(021) 345-6789-99</p>
        </div>
      </FooterContainer>
      
      

    </div>
  )
}

export default Footer
