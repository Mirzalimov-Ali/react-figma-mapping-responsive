import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

// img
import carousel1 from '../../assets/carousel-img.png'
import carousel2 from '../../assets/carousel-img2.webp'
import { HomeContainer } from '../../caravanStyle'

function Home() {
  return (
    <HomeContainer>
        <Carousel autoPlay showArrows={true} centerMode={false} showStatus={false} showThumbs={false} >
            <div>
                <img src={carousel1} />
            </div>
            <div>
                <img src={carousel2} />
            </div>
        </Carousel>
    </HomeContainer>
  )
}

export default Home
