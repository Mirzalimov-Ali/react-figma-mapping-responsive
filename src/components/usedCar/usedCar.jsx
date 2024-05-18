import React, { useState } from 'react'
import { CardButtonWrapper, Price, Boxes, BoxesData, BoxesDataInput, BoxesDataWrapper, BoxesDownArrow, BoxesTitleWrapper, CarContainer, Card, CardBottom, CardBottomCarName, CardBottomMiddle, CostBox, CostBoxInput, HomeButton, HomeButtonContainer, HomeContainer, HomeLeftCarWrapper, HomeLeftContainer, HomeLeftParagraph, HomeRightContainer, HomeRightTop, HomeRightTopButton, HomeRightTopLeft, HomeRightTopLeftRight, HomeRightTopRight, Line, LongLine, MappingButton, SortInput, Div, CardImg, HeaderContainer, BigWrapper } from '../../style'


// img //
import downArrow from '../../assets/big-down-arrow.svg'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import fourDots from '../../assets/four-dots.svg'
import menu from '../../assets/menu.svg'
import GridMenu from './gridMenu'
import Vmenu from './vmenu'
import UsedHeader from '../header/usedHeader'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { usedCar } from '../mock/usedCar'

function UsedCar() {
  const data = usedCar.maindata

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


  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleCompanyChange = (companyName) => {
    const isSelected = selectedCompanies.includes(companyName);
    setSelectedCompanies(
      isSelected
        ? ""
        : [...selectedCompanies, companyName]
    );
  };

  const filteredData = data.filter(
    (item) =>
        selectedCompanies.length === 0 ||
        selectedCompanies.includes(item.used.company) ||
        selectedCompanies.includes(item.used.license) ||
        selectedCompanies.includes(item.used.people) ||
        selectedCompanies.includes(item.used.location)
  );

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
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("제일모빌")}/>
                                <label htmlFor="aidal2">제일모빌</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("영남캠핑카")}/>
                                <label htmlFor="aidal2">영남캠핑카</label>
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
                                <BoxesDataInput type="checkbox" name="" id="1year" onChange={() => handleCompanyChange("1종 보통")}/>
                                <label htmlFor="1year">1종 보통</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="2year" onChange={() => handleCompanyChange("2종 보통")}/>
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
                                <BoxesDataInput type="checkbox" name="" id="two" onChange={() => handleCompanyChange("3인")}/>
                                <label htmlFor="two">3</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="three-minus-four" onChange={() => handleCompanyChange("4인")}/>
                                <label htmlFor="three-minus-four">4</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="five-plus" onChange={() => handleCompanyChange("5인")}/>
                                <label htmlFor="five-plus">5</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="five-plus" onChange={() => handleCompanyChange("6인")}/>
                                <label htmlFor="five-plus">6</label>
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
                                <BoxesDataInput type="checkbox" name="" id="seoul" onChange={() => handleCompanyChange("Seoul")}/>
                                <label htmlFor="seoul">서울</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="Korea" onChange={() => handleCompanyChange("Busan")}/>
                                <label htmlFor="Korea">부산</label>
                            </BoxesData>
                            <BoxesData>
                                <BoxesDataInput type="checkbox" name="" id="Pusan" onChange={() => handleCompanyChange("Daegu")}/>
                                <label htmlFor="Pusan">대구</label>
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
        <UsedHeader/>
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
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("제일모빌")}/>
                                    <label htmlFor="aidal2">제일모빌</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" id="aidal2" onChange={() => handleCompanyChange("영남캠핑카")}/>
                                    <label htmlFor="aidal2">영남캠핑카</label>
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
                                    <BoxesDataInput type="checkbox" name="" id="1year" onChange={() => handleCompanyChange("1종 보통")}/>
                                    <label htmlFor="1year">1종 보통</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="2year" onChange={() => handleCompanyChange("2종 보통")}/>
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
                                    <BoxesDataInput type="checkbox" name="" id="two" onChange={() => handleCompanyChange("3인")}/>
                                    <label htmlFor="two">3</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="three-minus-four" onChange={() => handleCompanyChange("4인")}/>
                                    <label htmlFor="three-minus-four">4</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="five-plus" onChange={() => handleCompanyChange("5인")}/>
                                    <label htmlFor="five-plus">5</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="five-plus" onChange={() => handleCompanyChange("6인")}/>
                                    <label htmlFor="five-plus">6</label>
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
                                    <BoxesDataInput type="checkbox" name="" id="seoul" onChange={() => handleCompanyChange("Seoul")}/>
                                    <label htmlFor="seoul">서울</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="Korea" onChange={() => handleCompanyChange("Busan")}/>
                                    <label htmlFor="Korea">부산</label>
                                </BoxesData>
                                <BoxesData>
                                    <BoxesDataInput type="checkbox" name="" id="Pusan" onChange={() => handleCompanyChange("Daegu")}/>
                                    <label htmlFor="Pusan">대구</label>
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

export default UsedCar