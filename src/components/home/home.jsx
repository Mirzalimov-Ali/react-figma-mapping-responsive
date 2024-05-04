import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Popup from 'reactjs-popup';

// img
import carousel1 from '../../assets/carousel-img.png'
import carousel2 from '../../assets/header-2.png'
import { BlogsContainer, BlogsLeft, BlogsLeftP, BlogsRight, CarouselImg, HomeContainer, HomeTitles, MultiCarouselContainer, VideosContainer } from '../../caravanStyle'
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
import blogsImg from '../../assets/blogs.png'

import blogsImg1 from '../../assets/blogs-img-1.png'
import blogsImg2 from '../../assets/blogs-img-2.png'
import blogsImg3 from '../../assets/blogs-img-3.png'
import blogsImg4 from '../../assets/blogs-img-4.png'
import blogsImg5 from '../../assets/blogs-img-5.png'
import blogsImg6 from '../../assets/blogs-img-6.png'
import { Titles } from '../other/otherStyle';

function Home() {
  return (
    <HomeContainer>
        <Carousel autoPlay showArrows={true} centerMode={false} showStatus={false} showThumbs={false} >
            <div>
                <CarouselImg src={carousel1}/>
            </div>
            <div>
                <CarouselImg src={carousel2} />
            </div>
        </Carousel>

        <Titles style={{fontSize: "30px", margin: '20px auto'}}>Recommend</Titles>
        <MultiCarouselContainer>
          <MultiCarouselComponent/>
        </MultiCarouselContainer>
        
        
        <Titles style={{fontSize: "30px", margin: '30px auto'}}>Videos</Titles>
        <VideosContainer>
          <Popup trigger={<img src={homeBox1} alt="" style={{width: "300px", height: "300px", cursor: "pointer", borderRadius: "20px"}}/>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Name of this video</div>
                <div className="content" style={{display: "flex", justifyContent: "center"}}>
                  <iframe style={{borderRadius: "20px"}} width="90%" height="315" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=3EXnqjj-ClECDAjZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            )}
          </Popup>
          

          <Popup trigger={<img src={homeBox2} alt="" style={{width: "300px", height: '300px', cursor: "pointer", borderRadius: "20px"}}/>} modal nested>
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

          <Popup trigger={<img src={homeBox3} alt="" style={{width: "300px", height: "300px", cursor: "pointer", borderRadius: "20px"}}/>} modal nested>
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

          <Popup trigger={<img src={homeBox4} alt="" style={{width: "300px", height: "300px", cursor: "pointer", borderRadius: "20px"}}/>} modal nested>
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

          <Popup trigger={<img src={homeBox5} alt="" style={{width: "300px", height: "300px", cursor: "pointer", borderRadius: "20px"}}/>} modal nested>
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

          <Popup trigger={<img src={homeBox6} alt="" style={{width: "300px", height: "300px", cursor: "pointer", borderRadius: "20px"}}/>} modal nested>
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

          <Popup trigger={<img src={homeBox7} alt="" style={{width: "300px", height: "300px", cursor: "pointer", borderRadius: "20px"}}/>} modal nested>
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
          
          <Popup trigger={<img src={homeBox8} alt="" style={{width: "300px", height: "300px", cursor: "pointer", borderRadius: "20px"}}/>} modal nested>
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
        </VideosContainer>

        {/* <HomeTitles src={blogsImg}/> */}
        <Titles style={{fontSize: "30px", margin: "30px auto"}}>Blogs</Titles>
        <BlogsContainer>
          <BlogsLeft>
            <h2 style={{marginBottom: "30px"}}>Camper</h2>
            <p style={{color: "orange", marginBottom: "10px"}}>@camper_1</p>
            <BlogsLeftP>Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.</BlogsLeftP>
          </BlogsLeft>
          <BlogsRight>
            <img src={blogsImg1} alt="" />
            <img src={blogsImg2} alt="" />
            <img src={blogsImg3} alt="" />
            <img src={blogsImg4} alt="" />
            <img src={blogsImg5} alt="" />
            <img src={blogsImg6} alt="" />
          </BlogsRight>
        </BlogsContainer>
    </HomeContainer>
  )
}

export default Home