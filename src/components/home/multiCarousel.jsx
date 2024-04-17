import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import card from '../../assets/card.png'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function MultiCarouselComponent() {
  return (
    <Carousel responsive={responsive}>
      <div style={{marginTop: "1000px", border: "10px solid red", zIndex: "1000"}}><img src={card} alt="" style={{width: "300px", height: "300px"}}/></div>
      <div><img src={card} alt="" style={{width: "300px", height: "300px"}}/></div>
      <div><img src={card} alt="" style={{width: "300px", height: "300px"}}/></div>
      <div><img src={card} alt="" style={{width: "300px", height: "300px"}}/></div>
    </Carousel>
  )
}

export default MultiCarouselComponent