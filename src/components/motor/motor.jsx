import React, { useState, useCallback } from 'react'
import { CardButtonWrapper, Price, Boxes, BoxesData, BoxesDataInput, BoxesDataWrapper, BoxesDownArrow, BoxesTitleWrapper, CarContainer, Card, CardBottom, CardBottomCarName, CardBottomMiddle, CostBox, CostBoxInput, HomeButton, HomeButtonContainer, HomeContainer, HomeLeftCarWrapper, HomeLeftContainer, HomeLeftParagraph, HomeRightContainer, HomeRightTop, HomeRightTopButton, HomeRightTopLeft, HomeRightTopLeftRight, HomeRightTopRight, Line, LongLine, MappingButton, SortInput, Div, CardImg, HeaderContainer, BigWrapper } from '../../style'

import { campcar } from '../mock/mockdata'

// img //
import downArrow from '../../assets/big-down-arrow.svg'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import fourDots from '../../assets/four-dots.svg'
import menu from '../../assets/menu.svg'
import GridMenu from './gridMenu'
import Vmenu from './vmenu'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// mui
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Header from '../header/header'

import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import FilterSidebar from '../filterSidebar/filterSidebar'
import MobileFilterSidebar from '../filterSidebar/mobileFilterSidebar'

function Motor() {
  const [active, setActive] = useState(true)
  
  function handleGridClicked() {
    setActive(false)
  }
  
  function handleVClicked() {
    setActive(true)
  }

  // mui
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
    

  const [showFilteredComp, setShowFilteredComp] =  useState(false);
  const filteredData = showFilteredComp ? campcar.maindata.filter((item) => item.car.company === "다온티앤티") : campcar.maindata
  const filteredData2 = showFilteredComp ? campcar.maindata.filter((item) => item.car.company === "제일모빌") : campcar.maindata

//   console.log(filteredData)

//   console.log(filteredData)
  const DrawerList = (
    // <Box sx={{ width: 350 }} role="presentation">
    //   <List>
    //     <HomeLeftContainer $mobileFlexMenu>
    //         <div style={{position: "fixed", left: "300px"}}>
    //             <CloseIcon onClick={toggleDrawer(false)}/>
    //         </div>
    //         <div>
    //             <HomeLeftParagraph>Cost of car</HomeLeftParagraph>
    //             <Line/>
    //             <CostBox>
    //                 <div>
    //                     <label htmlFor="from">from</label> <br />
    //                     <CostBoxInput type="text" id='from'/>
    //                 </div>
    //                 <div>
    //                     <label htmlFor="to">to</label> <br />
    //                     <CostBoxInput type="text" id='to'/>
    //                 </div>
    //             </CostBox>

    //             <Boxes>
    //                 <BoxesTitleWrapper>
    //                     <h3>Brand</h3>
    //                     <BoxesDownArrow src={downArrow} />
    //                 </BoxesTitleWrapper>

    //                 <Line/>

    //                 <BoxesDataWrapper>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" id="aidal"/>
    //                         <label htmlFor="aidal">Aidal</label>
    //                     </BoxesData>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" id="knal"/>
    //                         <label htmlFor="knal">Knal</label>
    //                     </BoxesData>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" id="escape"/>
    //                         <label htmlFor="escape">escape</label>
    //                     </BoxesData>
    //                 </BoxesDataWrapper>
    //             </Boxes>

    //             <Boxes>
    //                 <BoxesTitleWrapper>
    //                     <h3>Company</h3>
    //                     <BoxesDownArrow src={downArrow} alt="" />
    //                 </BoxesTitleWrapper>

    //                 <Line/>

    //                 <BoxesDataWrapper>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" id="escape2"/>
    //                         <label htmlFor="escape2">escape</label>
    //                     </BoxesData>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" id="aidal2"/>
    //                         <label htmlFor="aidal2">Aidal</label>
    //                     </BoxesData>
    //                 </BoxesDataWrapper>
    //             </Boxes>

    //             <Boxes>
    //                 <BoxesTitleWrapper>
    //                     <h3>License type</h3>
    //                     <BoxesDownArrow src={downArrow} alt=""/>
    //                 </BoxesTitleWrapper>

    //                 <Line/>

    //                 <BoxesDataWrapper>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" name="" id="1year"/>
    //                         <label htmlFor="1year">1 year</label>
    //                     </BoxesData>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" name="" id="2year"/>
    //                         <label htmlFor="2year">2 year</label>
    //                     </BoxesData>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" name="" id="15year"/>
    //                         <label htmlFor="15year">1.5year</label>
    //                     </BoxesData>
    //                 </BoxesDataWrapper>
    //             </Boxes>

    //             <Boxes>
    //                 <BoxesTitleWrapper>
    //                     <h3>Number of travelers</h3>
    //                     <BoxesDownArrow src={downArrow} alt=""/>
    //                 </BoxesTitleWrapper>
    //                 <Line/>
    //                 <BoxesDataWrapper>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" name="" id="two"/>
    //                         <label htmlFor="two">2</label>
    //                     </BoxesData>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" name="" id="three-minus-four"/>
    //                         <label htmlFor="three-minus-four">3-4</label>
    //                     </BoxesData>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" name="" id="five-plus"/>
    //                         <label htmlFor="five-plus">5+</label>
    //                     </BoxesData>
    //                 </BoxesDataWrapper>
    //             </Boxes>
    //             <Boxes>
    //                 <BoxesTitleWrapper>
    //                     <h3>Location</h3>
    //                     <BoxesDownArrow src={downArrow} alt=""/>
    //                 </BoxesTitleWrapper>
    //                 <Line/>
    //                 <BoxesDataWrapper>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" name="" id="seoul"/>
    //                         <label htmlFor="seoul">Seoul</label>
    //                     </BoxesData>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" name="" id="Korea"/>
    //                         <label htmlFor="Korea">Korea</label>
    //                     </BoxesData>
    //                     <BoxesData>
    //                         <BoxesDataInput type="checkbox" name="" id="Pusan"/>
    //                         <label htmlFor="Pusan">Pusan</label>
    //                     </BoxesData>
    //                 </BoxesDataWrapper>
    //             </Boxes>
    //             <HomeButtonContainer>
    //                 <HomeButton>Cancel</HomeButton>
    //                 <HomeButton $search>Search</HomeButton>
    //             </HomeButtonContainer>

    //             <HomeLeftCarWrapper>
    //                 <p>Compare</p>
    //                 <div>
    //                     <img src={img1} alt="" />
    //                     <img src={img2} alt="" />
    //                     <img src={img3} alt="" />
    //                 </div>
    //             </HomeLeftCarWrapper>
    //         </div>
    //     </HomeLeftContainer>
    //   </List>
    // </Box>

     <Box sx={{ width: 350 }} role="presentation">
        <MobileFilterSidebar/>
    </Box>
  );
  
  const data = campcar.maindata
  return (
    <div>
        <Header/>
        <HomeContainer>
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

            {/* <FilterSidebar/> */}

            <HomeRightContainer>
                <HomeRightTop>
                    <HomeRightTopLeft>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{fontWeight: "600"}}>Item<span style={{marginLeft: "10px", color: "#006DAB"}}>{data.length}</span></p>

                            <Button onClick={toggleDrawer(true)} className='mobile-none-button'><MenuIcon/></Button>
                            <Drawer open={open} onClose={toggleDrawer(false)}>
                                {DrawerList}
                            </Drawer>
                        </div>
                        <HomeRightTopLeftRight $displayNone>
                            <HomeRightTopButton onClick={handleVClicked}><img src={fourDots} alt=""/></HomeRightTopButton>
                            <HomeRightTopButton $rightButton onClick={handleGridClicked}><img src={menu} alt=""/></HomeRightTopButton>
                        </HomeRightTopLeftRight>
                    </HomeRightTopLeft>
                    
                    <HomeRightTopRight>
                        <p>Sort<span style={{marginLeft: '5px'}}>by</span></p>
                        <div>
                            <SortInput type="text" placeholder='Select'/>
                            <HomeRightTopButton $rightButton><img src={downArrow} alt=""/></HomeRightTopButton>
                        </div>
                        <div>
                            <SortInput type="text" placeholder='60' $short/>
                            <HomeRightTopButton $rightButton><img src={downArrow} alt=""/></HomeRightTopButton>
                        </div>
                        <div className='none'>
                            <HomeRightTopButton onClick={handleVClicked}><img src={fourDots} alt=""/></HomeRightTopButton>
                            <HomeRightTopButton $rightButton onClick={handleGridClicked}><img src={menu} alt=""/></HomeRightTopButton>
                        </div>
                    </HomeRightTopRight>
                </HomeRightTop>
                <LongLine/>

                {active ? <GridMenu filteredData={filteredData} filterData2={filteredData2}/> : <Vmenu/>}
                
            </HomeRightContainer>
        </HomeContainer>
    </div>
    
    
  )
}

export default Motor