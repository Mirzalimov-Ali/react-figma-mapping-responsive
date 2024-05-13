import React, { useState } from 'react'
import { CardButtonWrapper, Price, Boxes, BoxesData, BoxesDataInput, BoxesDataWrapper, BoxesDownArrow, BoxesTitleWrapper, CarContainer, Card, CardBottom, CardBottomCarName, CardBottomMiddle, CostBox, CostBoxInput, HomeButton, HomeButtonContainer, HomeContainer, HomeLeftCarWrapper, HomeLeftContainer, HomeLeftParagraph, HomeRightContainer, HomeRightTop, HomeRightTopButton, HomeRightTopLeft, HomeRightTopLeftRight, HomeRightTopRight, Line, LongLine, MappingButton, SortInput, Div, CardImg, HeaderContainer, BigWrapper } from '../../style'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { campcar } from '../mock/mockdata'

function FilterSidebar() {
  const data = campcar.maindata

  const [showFilteredComp, setShowFilteredComp] =  useState(false);

  const filteredData = showFilteredComp ? data.filter((item) => item.car.company === "다온티앤티") : data

  console.log(showFilteredComp)
  console.log(filteredData)
  return (
    <HomeLeftContainer>
        <div>
            <CostBox>
                <Accordion sx={{minWidth: "240px"}} defaultExpanded>
                    <AccordionSummary sx={{fontSize: "20px", fontWeight: "600"}}>Cost of car</AccordionSummary>
                    <Line style={{marginBottom: "30px"}}/>
                    
                    <AccordionDetails>
                        <div style={{display: "flex", gap: '30px'}}>
                            <div>
                                <label htmlFor="from">from</label> <br />
                                <CostBoxInput type="number" id='from'/>
                            </div>
                            <div>
                                <label htmlFor="to">to</label> <br />
                                <CostBoxInput type="number" id='to'/>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </CostBox>

            <Boxes>
                <Accordion sx={{maxWidth: "240px"}} defaultExpanded>
                    <AccordionSummary sx={{fontSize: "20px", fontWeight: "600"}}>Brand</AccordionSummary>
                    <Line/>

                    <AccordionDetails>
                    <BoxesDataWrapper>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" id="aidal" onChange={(e) => setShowFilteredComp(e.target.checked)}/>
                            <label htmlFor="aidal">Aidal</label>
                        </BoxesData>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" id="knal"/>
                            <label htmlFor="knal">Knal</label>
                        </BoxesData>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" id="escape"/>
                            <label htmlFor="escape">escape</label>
                        </BoxesData>
                    </BoxesDataWrapper>
                </AccordionDetails>
            </Accordion>


                
            </Boxes>

            <Boxes>
                <Accordion defaultExpanded sx={{maxWidth:"240px"}}>
                    <AccordionSummary sx={{fontSize: '20px', fontWeight: "600"}}>Company</AccordionSummary>
                    <Line/>
                    <AccordionDetails>
                    <BoxesDataWrapper>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" id="escape2"/>
                            <label htmlFor="escape2">escape</label>
                        </BoxesData>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" id="aidal2"/>
                            <label htmlFor="aidal2">Aidal</label>
                        </BoxesData>
                    </BoxesDataWrapper>
                    </AccordionDetails>
                </Accordion>
            </Boxes>

            <Boxes>
                <Accordion defaultExpanded sx={{maxWidth:"240px"}}>
                    <AccordionSummary sx={{fontSize: "20px", fontWeight: "600"}}>License type</AccordionSummary>
                    <Line/>

                    <AccordionDetails>
                        <BoxesDataWrapper>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" name="" id="1year"/>
                            <label htmlFor="1year">1 year</label>
                        </BoxesData>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" name="" id="2year"/>
                            <label htmlFor="2year">2 year</label>
                        </BoxesData>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" name="" id="15year"/>
                            <label htmlFor="15year">1.5year</label>
                        </BoxesData>
                    </BoxesDataWrapper>
                    </AccordionDetails>
                </Accordion>


                
            </Boxes>

            <Boxes>
                <Accordion defaultExpanded sx={{maxWidth: "240px"}}>
                    <AccordionSummary sx={{fontSize: "19.1px", fontWeight: "600"}}>Number of travelers</AccordionSummary>
                    <Line/>
                    <AccordionDetails>
                    <BoxesDataWrapper>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" name="" id="two"/>
                            <label htmlFor="two">2</label>
                        </BoxesData>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" name="" id="three-minus-four"/>
                            <label htmlFor="three-minus-four">3-4</label>
                        </BoxesData>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" name="" id="five-plus"/>
                            <label htmlFor="five-plus">5+</label>
                        </BoxesData>
                    </BoxesDataWrapper>
                    </AccordionDetails>
                </Accordion>
            </Boxes>

            <Boxes>
                <Accordion sx={{maxWidth: "240px"}} defaultExpanded>
                    <AccordionSummary sx={{fontSize: "20px", fontWeight: "600"}}>Location</AccordionSummary>
                    <Line/>
                    <AccordionDetails>
                    <BoxesDataWrapper>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" name="" id="seoul"/>
                            <label htmlFor="seoul">Seoul</label>
                        </BoxesData>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" name="" id="Korea"/>
                            <label htmlFor="Korea">Korea</label>
                        </BoxesData>
                        <BoxesData>
                            <BoxesDataInput type="checkbox" name="" id="Pusan"/>
                            <label htmlFor="Pusan">Pusan</label>
                        </BoxesData>
                    </BoxesDataWrapper>
                    </AccordionDetails>
                </Accordion>
            </Boxes>

            <HomeButtonContainer>
                <HomeButton>Cancel</HomeButton>
                <HomeButton $search>Search</HomeButton>
            </HomeButtonContainer>

            <HomeLeftCarWrapper>
                <p>Compare</p>
                <div style={{display:"flex"}}>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </HomeLeftCarWrapper>
        </div>
    </HomeLeftContainer>
  )
}

export default FilterSidebar
