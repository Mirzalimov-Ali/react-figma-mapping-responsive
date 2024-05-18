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
import MobileFilterSidebar from '../filterSidebar/mobileFilterSidebar'

function Motor() {
  const data = campcar.maindata
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
    

//   const [showFilteredComp, setShowFilteredComp] =  useState({
//     다온티앤티: true,
//     영남캠핑카: true,
//     제일모빌: true,
//     스타모빌: true,
//     한울캠핑카: true,
//     훼미리캠핑카: true,
//     에이스캠퍼: true,
//     월든모빌: true,
//     위드원모터스: true,
//     미스터캠퍼: true,
//     드림캠핑카: true,
//     모터홈코리아: true,

//     일종보통: true,
//     이종보통: true,

//     삼인: true,
//     사인: true,
//     오인: true,
//     육인: true,

//     수도권: true,
//     경상권: true,
//     충청권: true,

//     from: 0,
//     to: 1000000000,
//   });

//   const filteredData  = data.filter((item) => {
//     if (showFilteredComp.from && item.car.cost < showFilteredComp.from) {
//         return false;
//     }
//     if (showFilteredComp.to && item.car.cost > showFilteredComp.to) {
//         return false;
//     }


//     if(showFilteredComp.다온티앤티 && item.car.company === "다온티앤티") {
//         return false;
//     }
//     if(showFilteredComp.영남캠핑카 && item.car.company === "영남캠핑카") {
//         return true;
//     }
//     if(showFilteredComp.제일모빌 && item.car.company === "제일모빌") {
//         return true;
//     }
//     if(showFilteredComp.스타모빌 && item.car.company === "스타모빌") {
//         return true;
//     }
//     if(showFilteredComp.한울캠핑카 && item.car.company === "한울캠핑카") {
//         return true;
//     }
//     if(showFilteredComp.훼미리캠핑카 && item.car.company === "훼미리캠핑카") {
//         return true;
//     }
//     if(showFilteredComp.에이스캠퍼 && item.car.company === "에이스캠퍼") {
//         return true;
//     }
//     if(showFilteredComp.월든모빌 && item.car.company === "월든모빌") {
//         return true;
//     }
//     if(showFilteredComp.위드원모터스 && item.car.company === "위드원모터스") {
//         return true;
//     }
//     if(showFilteredComp.미스터캠퍼 && item.car.company === "미스터캠퍼") {
//         return true;
//     }
//     if(showFilteredComp.드림캠핑카 && item.car.company === "드림캠핑카") {
//         return true;
//     }
//     if(showFilteredComp.모터홈코리아 && item.car.company === "모터홈코리아") {
//         return true;
//     }


//     if(showFilteredComp.일종보통 && item.car.license === "1종 보통") {
//         return true;
//     }
//     if(showFilteredComp.이종보통 && item.car.license === "2종 보통") {
//         return true;
//     }

//     if(showFilteredComp.삼인 && item.car.people === "3인") {
//         return true;
//     }
//     if(showFilteredComp.사인 && item.car.people === "4인") {
//         return true;
//     }
//     if(showFilteredComp.오인 && item.car.people === "5인") {
//         return true;
//     }
//     if(showFilteredComp.육인 && item.car.people === "6인") {
//         return true;
//     }

//     if(showFilteredComp.수도권 && item.car.location === "수도권") {
//         return true;
//     }
//     return false;
//   })


  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleCompanyChange = (filterItem) => {
    const isSelected = selectedCompanies.includes(filterItem);
    setSelectedCompanies(
      isSelected
        ? []
        : [...selectedCompanies, filterItem]
    );
  };


  const filteredData = data.filter(
    (item) =>
        selectedCompanies.length === 0 ||
        selectedCompanies.includes(item.car.company) ||
        selectedCompanies.includes(item.car.license) ||
        selectedCompanies.includes(item.car.people) ||
        selectedCompanies.includes(item.car.location)
  );


//   const handleCheckBoxChange = (company) => {
//     setShowFilteredComp({
//         ...showFilteredComp,
//         [company]: !showFilteredComp[company]
//     })
//   }



  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation">
      <List>
        <HomeLeftContainer $mobileFlexMenu>
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
                    <Accordion defaultExpanded sx={{maxWidth:"240px"}}>
                        <AccordionSummary sx={{fontSize: '20px', fontWeight: "600"}}>Company</AccordionSummary>
                        <Line/>
                        <AccordionDetails>
                        <BoxesDataWrapper>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="escape2" onChange={() => handleCompanyChange("다온티앤티")}/>
                                <label htmlFor="escape2">다온티앤티</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("영남캠핑카")}/>
                                <label htmlFor="aidal2">영남캠핑카</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("제일모빌")}/>
                                <label htmlFor="aidal2">제일모빌</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("스타모빌")}/>
                                <label htmlFor="aidal2">스타모빌</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("한울캠핑카")}/>
                                <label htmlFor="aidal2">한울캠핑카</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("훼미리캠핑카")}/>
                                <label htmlFor="aidal2">훼미리캠핑카</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("에이스캠퍼")}/>
                                <label htmlFor="aidal2">에이스캠퍼</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("월든모빌")}/>
                                <label htmlFor="aidal2">월든모빌</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("위드원모터스")}/>
                                <label htmlFor="aidal2">위드원모터스</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("미스터캠퍼")}/>
                                <label htmlFor="aidal2">미스터캠퍼</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("드림캠핑카")}/>
                                <label htmlFor="aidal2">드림캠핑카</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("모터홈코리아")}/>
                                <label htmlFor="aidal2">모터홈코리아</label>
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
                                <BoxesDataInput type="checkbox" name="" id="1year" onClick={() => handleCompanyChange("1종 보통")}/>
                                <label htmlFor="1year">1종 보통</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="2year" onClick={() => handleCompanyChange("2종 보통")}/>
                                <label htmlFor="2year">2종 보통</label>
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
                                <BoxesDataInput type="checkbox" name="" id="two" onClick={() => handleCompanyChange("3인")}/>
                                <label htmlFor="two">3인</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="three-minus-four"  onClick={() => handleCompanyChange("4인")}/>
                                <label htmlFor="three-minus-four">4인</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="five-plus" onClick={() => handleCompanyChange("5인")}/>
                                <label htmlFor="five-plus">5인</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="five-plus" onClick={() => handleCompanyChange("6인")}/>
                                <label htmlFor="five-plus">6인</label>
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
                                <BoxesDataInput type="checkbox" name="" id="seoul" onClick={() => handleCompanyChange("수도권")}/>
                                <label htmlFor="seoul">수도권</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="Korea" onClick={() => handleCompanyChange("경상권")}/>
                                <label htmlFor="Korea">경상권</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="Pusan" onClick={() => handleCompanyChange("충청권")}/>
                                <label htmlFor="Pusan">충청권</label>
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
      </List>
    </Box>
  );
  
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
                        <Accordion defaultExpanded sx={{maxWidth:"240px"}}>
                            <AccordionSummary sx={{fontSize: '20px', fontWeight: "600"}}>Company</AccordionSummary>
                            <Line/>
                            <AccordionDetails>
                            <BoxesDataWrapper>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="escape2" onChange={() => handleCompanyChange("다온티앤티")}/>
                                    <label htmlFor="escape2">다온티앤티</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("영남캠핑카")}/>
                                    <label htmlFor="aidal2">영남캠핑카</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("제일모빌")}/>
                                    <label htmlFor="aidal2">제일모빌</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("스타모빌")}/>
                                    <label htmlFor="aidal2">스타모빌</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("한울캠핑카")}/>
                                    <label htmlFor="aidal2">한울캠핑카</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("훼미리캠핑카")}/>
                                    <label htmlFor="aidal2">훼미리캠핑카</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("에이스캠퍼")}/>
                                    <label htmlFor="aidal2">에이스캠퍼</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("월든모빌")}/>
                                    <label htmlFor="aidal2">월든모빌</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("위드원모터스")}/>
                                    <label htmlFor="aidal2">위드원모터스</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("미스터캠퍼")}/>
                                    <label htmlFor="aidal2">미스터캠퍼</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("드림캠핑카")}/>
                                    <label htmlFor="aidal2">드림캠핑카</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("모터홈코리아")}/>
                                    <label htmlFor="aidal2">모터홈코리아</label>
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
                                    <BoxesDataInput type="checkbox" name="" id="1year" onClick={() => handleCompanyChange("1종 보통")}/>
                                    <label htmlFor="1year">1종 보통</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="2year" onClick={() => handleCompanyChange("2종 보통")}/>
                                    <label htmlFor="2year">2종 보통</label>
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
                                    <BoxesDataInput type="checkbox" name="" id="two" onClick={() => handleCompanyChange("3인")}/>
                                    <label htmlFor="two">3인</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="three-minus-four"  onClick={() => handleCompanyChange("4인")}/>
                                    <label htmlFor="three-minus-four">4인</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="five-plus" onClick={() => handleCompanyChange("5인")}/>
                                    <label htmlFor="five-plus">5인</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="five-plus" onClick={() => handleCompanyChange("6인")}/>
                                    <label htmlFor="five-plus">6인</label>
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
                                    <BoxesDataInput type="checkbox" name="" id="seoul" onClick={() => handleCompanyChange("수도권")}/>
                                    <label htmlFor="seoul">수도권</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="Korea" onClick={() => handleCompanyChange("경상권")}/>
                                    <label htmlFor="Korea">경상권</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="Pusan" onClick={() => handleCompanyChange("충청권")}/>
                                    <label htmlFor="Pusan">충청권</label>
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

            <HomeRightContainer>
                <HomeRightTop>
                    <HomeRightTopLeft>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{fontWeight: "600"}}>Item<span style={{marginLeft: "10px", color: "#006DAB"}}>{filteredData.length}</span></p>

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

                {active ? <GridMenu filteredData={filteredData}/> : <Vmenu filteredData={filteredData}/>}
                
            </HomeRightContainer>
        </HomeContainer>
    </div>
    
    
  )
}

export default Motor