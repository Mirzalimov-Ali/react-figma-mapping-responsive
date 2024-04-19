import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import car1 from '../../assets/recommend-img-1.png'
import car2 from '../../assets/recommend-img-2.png'
import car3 from '../../assets/recommend-img-3.png'
import car4 from '../../assets/recommend-img-4.png'

import discoverButton from '../../assets/discover-button.png'
import downArrow from '../../assets/down-arrow.svg'
import { CarouselBox, CarouselBoxInfoWrapper } from '../../caravanStyle';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1300, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 660, min: 0 },
    items: 1.5
  }
};

function MultiCarouselComponent() {
  return (
    <Carousel responsive={responsive}>
      <CarouselBox>
        <div style={{flex: "1"}}>
          <img src={car1} alt="" style={{width: "300px", height: "200px"}}/>
        </div>
        <CarouselBoxInfoWrapper>
          <b>Knaus</b>
          <img src={discoverButton} alt="" style={{width: "250px", height: "50px", cursor:"pointer"}}/>
          <div style={{display: "flex", gap: "20px"}}>
            <p>Choose a model</p>
            <img src={downArrow} alt="" style={{width: "20px", height: "20px"}}/>
          </div>
        </CarouselBoxInfoWrapper>
      </CarouselBox>

      <CarouselBox>
        <div style={{flex: "1"}}>
          <img src={car2} alt="" style={{width: "300px", height: "200px"}}/>
        </div>
        <CarouselBoxInfoWrapper>
          <b>Aidal</b>
          <img src={discoverButton} alt="" style={{width: "250px", height: "50px", cursor:"pointer"}}/>
          <div style={{display: "flex", gap: "20px"}}>
            <p>Choose a model</p>
            <img src={downArrow} alt="" style={{width: "20px", height: "20px"}}/>
          </div>
        </CarouselBoxInfoWrapper>
      </CarouselBox>

      <CarouselBox>
        <div style={{flex: "1"}}>
          <img src={car3} alt="" style={{width: "300px", height: "200px"}}/>
        </div>
        <CarouselBoxInfoWrapper>
          <b>escape</b>
          <img src={discoverButton} alt="" style={{width: "250px", height: "50px", cursor:"pointer"}}/>
          <div style={{display: "flex", gap: "20px"}}>
            <p>Choose a model</p>
            <img src={downArrow} alt="" style={{width: "20px", height: "20px"}}/>
          </div>
        </CarouselBoxInfoWrapper>
      </CarouselBox>

      <CarouselBox>
        <div style={{flex: "1"}}>
          <img src={car4} alt="" style={{width: "300px", height: "200px"}}/>
        </div>
        <CarouselBoxInfoWrapper>
          <b>Lyseo</b>
          <img src={discoverButton} alt="" style={{width: "250px", height: "50px", cursor:"pointer"}}/>
          <div style={{display: "flex", gap: "20px"}}>
            <p>Choose a model</p>
            <img src={downArrow} alt="" style={{width: "20px", height: "20px"}}/>
          </div>
        </CarouselBoxInfoWrapper>
      </CarouselBox>

      <CarouselBox>
        <div style={{flex: "1"}}>
          <img src={car1} alt="" style={{width: "300px", height: "200px"}}/>
        </div>
        <CarouselBoxInfoWrapper>
          <b>Knaus</b>
          <img src={discoverButton} alt="" style={{width: "250px", height: "50px", cursor:"pointer"}}/>
          <div style={{display: "flex", gap: "20px"}}>
            <p>Choose a model</p>
            <img src={downArrow} alt="" style={{width: "20px", height: "20px"}}/>
          </div>
        </CarouselBoxInfoWrapper>
      </CarouselBox>
      
      <CarouselBox>
        <div style={{flex: "1"}}>
          <img src={car3} alt="" style={{width: "300px", height: "200px"}}/>
        </div>
        <CarouselBoxInfoWrapper>
          <b>Knaus</b>
          <img src={discoverButton} alt="" style={{width: "250px", height: "50px", cursor:"pointer"}}/>
          <div style={{display: "flex", gap: "20px"}}>
            <p>Choose a model</p>
            <img src={downArrow} alt="" style={{width: "20px", height: "20px"}}/>
          </div>
        </CarouselBoxInfoWrapper>
      </CarouselBox>
    </Carousel>
  )
}

export default MultiCarouselComponent