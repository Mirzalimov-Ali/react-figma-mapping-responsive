import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Popup from 'reactjs-popup';

// img
import carousel1 from '../../assets/carousel-img.png'
import carousel2 from '../../assets/carousel-img2.webp'
import { HomeContainer, HomeTitles, MultiCarouselContainer } from '../../caravanStyle'
import MultiCarouselComponent from './multiCarousel';

import homeBox1 from '../../assets/home-box-1.png'
import homeBox2 from '../../assets/home-box-2.png'
import homeBox3 from '../../assets/home-box-3.png'
import homeBox4 from '../../assets/home-box-4.png'
import homeBox5 from '../../assets/home-box-5.png'
import homeBox6 from '../../assets/home-box-6.png'
import homeBox7 from '../../assets/home-box-7.png'
import homeBox8 from '../../assets/home-box-8.png'
import videosImg from '../../assets/videos.png'
import recommendImg from '../../assets/recommend.png'

function Home() {
  return (
    <HomeContainer>
        <Carousel autoPlay showArrows={true} centerMode={false} showStatus={false} showThumbs={false} >
            <div>
                <img src={carousel1}/>
            </div>
            <div>
                <img src={carousel2} />
            </div>
        </Carousel>

        <HomeTitles src={recommendImg}/>
        <MultiCarouselContainer>
          <MultiCarouselComponent/>
        </MultiCarouselContainer>
        
        
        <HomeTitles src={videosImg} style={{margin: '30px 0'}}/>
        <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px"}}>
          <Popup trigger={<button className="button"> <img src={homeBox1} alt="" style={{width: "200px", height: '200px', cursor: "pointer", borderRadius: "20px"}}/></button>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Name of this video</div>
                <div className="content" style={{display: "flex", justifyContent: "center"}}>
                  <iframe style={{borderRadius: "20px"}} width="560" height="315" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=3EXnqjj-ClECDAjZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            )}
          </Popup>

          <Popup trigger={<button className="button"> <img src={homeBox2} alt="" style={{width: "200px", height: '200px', cursor: "pointer", borderRadius: "20px"}}/></button>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Name of this video</div>
                <div className="content" style={{display: "flex", justifyContent: "center"}}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/7LZl-X2CKXk?si=I99Y6gNlZlm8D5SB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            )}
          </Popup>

          <Popup trigger={<button className="button"> <img src={homeBox3} alt="" style={{width: "200px", height: '200px', cursor: "pointer", borderRadius: "20px"}}/></button>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Name of this video</div>
                <div className="content" style={{display: "flex", justifyContent: "center"}}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/9NpSU-j6eV8?si=J47iquMJ3ABNqBO1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </div>
              </div>
            )}
          </Popup>

          <Popup trigger={<button className="button"> <img src={homeBox4} alt="" style={{width: "200px", height: '200px', cursor: "pointer", borderRadius: "20px"}}/></button>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Name of this video</div>
                <div className="content" style={{display: "flex", justifyContent: "center"}}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/7mEcEtu0Y_0?si=Mb_ZE0hy4N4qxvxP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            )}
          </Popup>

          <Popup trigger={<button className="button"> <img src={homeBox5} alt="" style={{width: "200px", height: '200px', cursor: "pointer", borderRadius: "20px"}}/></button>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Name of this video</div>
                <div className="content" style={{display: "flex", justifyContent: "center"}}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/gwNJyhAWXD8?si=Ncd0XG42JZq7h3Q0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </div>
              </div>
            )}
          </Popup>

          <Popup trigger={<button className="button"> <img src={homeBox6} alt="" style={{width: "200px", height: '200px', cursor: "pointer", borderRadius: "20px"}}/></button>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Name of this video</div>
                <div className="content" style={{display: "flex", justifyContent: "center"}}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/gSjoX1c-ZWY?si=qnP3ijJsp4cfZg71" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            )}
          </Popup>

          <Popup trigger={<button className="button"> <img src={homeBox7} alt="" style={{width: "200px", height: '200px', cursor: "pointer", borderRadius: "20px"}}/></button>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Name of this video</div>
                <div className="content" style={{display: "flex", justifyContent: "center"}}>
                  <iframe style={{borderRadius: "20px"}} width="560" height="315" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=3EXnqjj-ClECDAjZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            )}
          </Popup>
          
          <Popup trigger={<button className="button"> <img src={homeBox8} alt="" style={{width: "200px", height: '200px', cursor: "pointer", borderRadius: "20px"}}/></button>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Name of this video</div>
                <div className="content" style={{display: "flex", justifyContent: "center"}}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/gdVZCp4ShjE?si=IUbEQlkYhOZfyVK3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            )}
          </Popup>
        </div>
        
    </HomeContainer>
  )
}

export default Home