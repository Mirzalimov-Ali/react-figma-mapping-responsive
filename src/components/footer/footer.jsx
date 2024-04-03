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
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}} className='footer-none'>
          <H2 className='footer-none'>Services</H2>
          <p className='footer-none'>Camping</p>
          <p className='footer-none'>Lodging</p>
          <p className='footer-none'>Harbor</p>
          <p className='footer-none'>Day Use</p>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: '10px'}}>
          <H2 className='footer-none'>Menu</H2>
          <Link to={""} style={{textDecoration: "none", color: "white"}} className='footer-none'>About</Link>
          <Link to={""} style={{textDecoration: "none", color: "white"}} className='footer-none'>Services</Link>
          <Link to={""} style={{textDecoration: "none", color: "white"}} className='footer-none'>Booking</Link>
          <Link to={""} style={{textDecoration: "none", color: "white"}} className='footer-none'>Blog</Link>
        </div>
        

        <div > 
          <H2 className='footer-none'>Contact</H2>

          <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px"}}>
            <img src={footerImg1} alt="" />
            <img src={footerImg2} alt="" />
            <img src={footerImg3} alt="" />
          </div>
          

          <p className='footer-none'>021 Korea Seul, LA</p>
          <p className='footer-none'>camper@example.com</p>
          <p className='footer-none'>(021) 345-6789-99</p>
        </div>
      </FooterContainer>
      
      

    </div>
  )
}

export default Footer
