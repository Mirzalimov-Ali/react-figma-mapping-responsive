import React from 'react'
import { Boxes, CarContainer, HomeButton, HomeButtonContainer, HomeContainer, HomeLeftContainer, HomeRightContainer, HomeRightTop, Line, LongLine, MappingButton } from '../../style'

import { campcar } from '../mock/mockdata'

// img //
import downArrow from '../../assets/big-down-arrow.svg'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import fourDots from '../../assets/four-dots.svg'
import menu from '../../assets/menu.svg'
import star from '../../assets/star.svg'

function Home() {
  const data = campcar.maindata

  return (
    <HomeContainer>
        <HomeLeftContainer>
            <div>
                <p style={{fontWeight: "700", fontSize: "18px"}}>Cost of car</p>
                <Line/>
                <div style={{marginTop: "30px", display: "flex", gap: "25px"}}>
                    <div>
                        <label htmlFor="from">from</label> <br />
                        <input type="text" style={{border: "1px solid rgba(55, 55, 55, 0.60)", height: "36px", width: "90px", borderRadius: "10px"}} id='from'/>
                    </div>
                    <div>
                        <label htmlFor="to">to</label> <br />
                        <input type="text" style={{border: "1px solid rgba(55, 55, 55, 0.60)", height: "36px", width: "90px", borderRadius: "10px"}} id='to'/>
                    </div>
                </div>
                <Boxes>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <h3>Brand</h3>
                        <img src={downArrow} alt="" style={{marginRight: "50px"}} />
                    </div>
                    <Line/>
                    <div style={{marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px"}}>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="aidal" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="aidal">Aidal</label>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="knal" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="knal">Knal</label>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="escape" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="escape">escape</label>
                        </div>
                    </div>
                </Boxes>
                <Boxes>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <h3>Company</h3>
                        <img src={downArrow} alt="" style={{marginRight: "50px"}} />
                    </div>
                    <Line/>
                    <div style={{marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px"}}>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="escape2" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="escape2">escape</label>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="aidal2" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="aidal2">Aidal</label>
                        </div>
                    </div>
                </Boxes>
                <Boxes>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <h3>License type</h3>
                        <img src={downArrow} alt=""  style={{marginRight: "50px"}}/>
                    </div>
                    <Line/>
                    <div style={{marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px"}}>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="1year" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="1year">1 year</label>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="2year" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="2year">2 year</label>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="15year" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="15year">1.5year</label>
                        </div>
                    </div>
                </Boxes>
                <Boxes>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <h3>Number of travelers</h3>
                        <img src={downArrow} alt=""  style={{marginRight: "50px"}}/>
                    </div>
                    <Line/>
                    <div style={{marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px"}}>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="two" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="two">2</label>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="three-minus-four" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="three-minus-four">3-4</label>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="five-plus" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="five-plus">5+</label>
                        </div>
                    </div>
                </Boxes>
                <Boxes>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <h3>Location</h3>
                        <img src={downArrow} alt="" style={{marginRight: "50px"}}/>
                    </div>
                    <Line/>
                    <div style={{marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px"}}>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="seoul" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="seoul">Seoul</label>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="Korea" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="Korea">Korea</label>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <input type="checkbox" name="" id="Pusan" style={{width: "22px", height: "22px"}}/>
                            <label htmlFor="Pusan">Pusan</label>
                        </div>
                    </div>
                </Boxes>
                <HomeButtonContainer>
                    <HomeButton>Cancel</HomeButton>
                    <HomeButton $search>Search</HomeButton>
                </HomeButtonContainer>

                <div style={{marginTop: '50px', color: "#006DAB", fontSize: "17px", fontWeight: "700"}}>
                    <p>Compare</p>
                    <div>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </HomeLeftContainer>

        <HomeRightContainer>
            <HomeRightTop>
                <div className='mobile-flex' style={{display: "flex", alignItems: "center"}}>
                    <div style={{fontWeight: "600"}}>
                        <p className='item'>Item  <span style={{marginLeft: "10px", color: "#006DAB"}}>25.156</span></p>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <button style={{height: "40px", border: "1px solid rgba(55, 55, 55, 0.30)", borderRadius: "5px 0 0 5px", background: "none", width: "40px", cursor: "pointer", marginLeft: '20px'}}><img src={fourDots} alt=""/></button>
                        <button style={{height: "40px", border: "1px solid rgba(55, 55, 55, 0.30)", borderRadius: "0 5px 5px 0", background: "none", width: "40px", cursor: "pointer"}}><img src={menu} alt=""/></button>
                    </div>
                </div>
                
                <div style={{display: "flex", alignItems: "center"}}>
                    <p style={{fontWeight: "500"}}>Sort by</p>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input type="text" placeholder='Select' style={{height: "40px", border: "1px solid rgba(55, 55, 55, 0.30)", borderRadius: "5px 0 0 5px", padding: "0 10px", marginLeft: "10px"}}/>
                        <button style={{height: "40px", border: "1px solid rgba(55, 55, 55, 0.30)", borderRadius: "0 5px 5px 0", background: "none", width: "40px", cursor: "pointer"}}><img src={downArrow} alt=""/></button>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input type="text" placeholder='60' style={{height: "40px", border: "1px solid rgba(55, 55, 55, 0.30)", borderRadius: "5px 0 0 5px", padding: "0 10px", marginLeft: "20px", width: "60px"}}/>
                        <button style={{height: "40px", border: "1px solid rgba(55, 55, 55, 0.30)", borderRadius: "0 5px 5px 0", background: "none", width: "40px", cursor: "pointer"}}><img src={downArrow} alt=""/></button>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <button style={{height: "40px", border: "1px solid rgba(55, 55, 55, 0.30)", borderRadius: "5px 0 0 5px", background: "none", width: "40px", cursor: "pointer", marginLeft: '20px'}} className='mobile-none'><img src={fourDots} alt=""/></button>
                        <button style={{height: "40px", border: "1px solid rgba(55, 55, 55, 0.30)", borderRadius: "0 5px 5px 0", background: "none", width: "40px", cursor: "pointer"}} className='mobile-none'><img src={menu} alt=""/></button>
                    </div>
                </div>
            </HomeRightTop>
            
            <LongLine/>

            <CarContainer>
                {data.map((value, key)=> {
                    return (
                        <div key={key} style={{display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.10)", padding: "10px 0"}} className='car-box'>
                            <img src={value.car.photo} alt="Photo of car not entered" />
                            <div>
                                <p style={{fontSize: "19px", fontWeight: "600", marginBottom: "5px"}}>{value.car.name}</p>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "start", width: "100%", marginBottom: "20px"}}>
                                    <p style={{fontSize: "14px", fontWeight: "400"}}>{value.car.company}</p>
                                    <div style={{display: "flex", alignItems: "center", height: "20px"}}>
                                        <img src={star} alt="" width={"20px"}/>
                                        <p>5.3</p>
                                    </div>
                                </div>
                                <p style={{color: "#006DAB", fontSize: "20px", fontWeight: "700"}}>{value.car.cost} Won</p>
                                <div style={{display: "flex", gap: '20px'}}>
                                    <MappingButton>Order</MappingButton>
                                    <MappingButton>Compare</MappingButton>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </CarContainer>
        </HomeRightContainer>
    </HomeContainer>
  )
}

export default Home