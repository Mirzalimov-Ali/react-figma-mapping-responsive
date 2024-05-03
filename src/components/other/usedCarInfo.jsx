import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import { usedCar } from '../mock/usedCar';
import { CarInfoContainer, CarInfoHeader, CarInfoHeaderButton, CarInfoHeaderButtonWrapper, InfoWrapper, InfoWrapperBottom, InfoWrapperLine, InfoWrapperLine1, InfoWrapperLine2, LineWrappers, Lines, LinesImgWrapper, LinesTextWrapper, Menu, RightButton } from '../../caravanStyle';

import carInfoimg1 from '../../assets/carInfo-1.png'
import carInfoimg2 from '../../assets/carInfo-2.png'
import carInfoimg3 from '../../assets/carInfo-3.png'
import carInfoimg4 from '../../assets/carInfo-4.png'
import carInfoimg5 from '../../assets/carInfo-5.png'

import Box from '@mui/joy/Box';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';


import ItemReviews from './itemReviews';
import Qa from './qa';
import Faq from './faq';
import Contact from './contact';



function UsedCarInfo() {
  const [index, setIndex] = React.useState(0);
  const { id } = useParams();
  const resultData = usedCar.maindata.find((value) => value.id === parseInt(id));
  console.log("id:", resultData)
  return (
    <CarInfoContainer>
      <CarInfoHeader>
        <h1>{resultData.used.name}</h1>
        <CarInfoHeaderButtonWrapper>
            <Link to={`purchase`}><CarInfoHeaderButton $primary>add to cart</CarInfoHeaderButton></Link>
            <Link to={`purchase`}><CarInfoHeaderButton>compare</CarInfoHeaderButton></Link>
        </CarInfoHeaderButtonWrapper>
      </CarInfoHeader>
      <LineWrappers>
        <div>
            <img src={resultData.used.image} alt="" width={"500px"}/>
        </div>
        <InfoWrapper>
            <InfoWrapperLine1>
                <div>
                    <h3>{resultData.used.name}</h3>
                    <small>aid</small>
                </div>
                <p style={{fontSize: "30px", fontWeight: "600", color: "#006DAB"}}>{resultData.used.price}Won</p>
            </InfoWrapperLine1>
            <InfoWrapperLine/>
            <InfoWrapperLine2>
                <InfoWrapperBottom>
                    <p>Company</p>
                    <p style={{fontSize: "12px", opacity: "0.5"}}>{resultData.used.company}</p>
                </InfoWrapperBottom>
                <InfoWrapperBottom>
                    <p>People</p>
                    <p style={{fontSize: "12px", opacity: "0.5"}}>{resultData.used.people}</p>
                </InfoWrapperBottom>
                <InfoWrapperBottom>
                    <p>License type</p>
                    <p style={{fontSize: "12px", opacity: "0.5"}}>License type</p>
                </InfoWrapperBottom>
            </InfoWrapperLine2>
        </InfoWrapper>
      </LineWrappers>

      <Lines $none>
        <LinesTextWrapper>
            <h1>Comfort</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
        </LinesTextWrapper>
        <LinesImgWrapper src={carInfoimg1}/>
      </Lines>
      
      <Lines $none>
        <LinesImgWrapper src={carInfoimg2}/>
        <LinesTextWrapper>
            <h1>Tidying away is child’s play!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
        </LinesTextWrapper>
      </Lines>

      <Lines $none>
        <LinesTextWrapper>
            <h1>Ventilated , Lit up</h1>
            <p>In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability. As for ventilation, we also often offer double ventilation in the bathroom (Skylight + window), which is very popular with our customers… Camper relies on legendary Seitz windows. They offer the best insulation and are also the easiest to use and safest because they can’t be removed from the outside.</p>
        </LinesTextWrapper>
        <LinesImgWrapper src={carInfoimg3}/>
      </Lines>

      <Lines $none>
        <LinesImgWrapper src={carInfoimg4}/>
        <LinesTextWrapper>
            <h1>Easy access</h1>
            <p>We add little touches that your joints will thank you for… All our motorhomes are equipped with a built-in step to facilitate entry to the vehicle All our vans are equipped with an electric step.</p>
        </LinesTextWrapper>
      </Lines>

      <Lines $none>
        <LinesTextWrapper>
            <h1>Heating when driving</h1>
            <p>Fuel heating is now very popular in the industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago.One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.</p>
            <CarInfoHeaderButtonWrapper>
                <Link to={`purchase`}><CarInfoHeaderButton $primary>add to cart</CarInfoHeaderButton></Link>
                <Link to={`purchase`}><RightButton>compare</RightButton></Link>
            </CarInfoHeaderButtonWrapper>
        </LinesTextWrapper>
        <LinesImgWrapper src={carInfoimg5}/>
      </Lines>

      <Lines>
        <LinesImgWrapper src={carInfoimg1}/>
        <LinesTextWrapper>
            <h1>Comfort</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
        </LinesTextWrapper>
      </Lines>
      
      <Lines>
        <LinesImgWrapper src={carInfoimg2}/>
        <LinesTextWrapper>
            <h1>Tidying away is child’s play!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
        </LinesTextWrapper>
      </Lines>

      <Lines>
        <LinesImgWrapper src={carInfoimg3}/>
        <LinesTextWrapper>
            <h1>Ventilated , Lit up</h1>
            <p>In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability. As for ventilation, we also often offer double ventilation in the bathroom (Skylight + window), which is very popular with our customers… Camper relies on legendary Seitz windows. They offer the best insulation and are also the easiest to use and safest because they can’t be removed from the outside.</p>
        </LinesTextWrapper>
      </Lines>

      <Lines>
        <LinesImgWrapper src={carInfoimg4}/>
        <LinesTextWrapper>
            <h1>Easy access</h1>
            <p>We add little touches that your joints will thank you for… All our motorhomes are equipped with a built-in step to facilitate entry to the vehicle All our vans are equipped with an electric step.</p>
        </LinesTextWrapper>
      </Lines>

      <Lines>
      <LinesImgWrapper src={carInfoimg5}/>
        <LinesTextWrapper>
            <h1>Heating when driving</h1>
            <p>Fuel heating is now very popular in the industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago.One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.</p>
            <CarInfoHeaderButtonWrapper>
                <Link to={`purchase`}><CarInfoHeaderButton $primary>add to cart</CarInfoHeaderButton></Link>
                <Link to={`purchase`}><RightButton>compare</RightButton></Link>
            </CarInfoHeaderButtonWrapper>
        </LinesTextWrapper>
      </Lines>
      
      <Menu>
        <Box
        sx={{
          flexGrow: 1,
          m: -2,
        }}
        className="tabs-wrapper"
      >
        <Tabs
          aria-label="Pipeline"
          value={index}
          onChange={(event, value) => setIndex(value)}
        >
          <TabList
            className="tablist"
            sx={{
              pt: 1,
              justifyContent: 'center',
              marginLeft: "-700px",
              bgcolor: "#006DAB33",
              [`&& .${tabClasses.root}`]: {
                padding: "0 50px",
                flex: 'initial',
                bgcolor: 'transparent',
                '&:hover': {
                  bgcolor: 'transparent',
                },
                [`&.${tabClasses.selected}`]: {
                  color: "white",

                  '&::after': {
                    height: "133%",
                    zIndex: "-1",
                    bgcolor: "#006DAB",
                  },
                },
              },
            }}
          >
            <Tab indicatorInset>
              Item reviews{' '}
            </Tab>
            <Tab indicatorInset>
              Q&A{' '}
              
            </Tab>
            <Tab indicatorInset>
              FAQ{' '}
              
            </Tab>
            <Tab indicatorInset>
              Contact{' '}
              
            </Tab>
          </TabList>
          <Box
            sx={(theme) => ({
              '--bg': theme.vars.palette.background.surface,
              background: 'var(--bg)',
              boxShadow: '0 0 0 100vmax var(--bg)',
              clipPath: 'inset(0 -100vmax)',
            })}
          >
            <TabPanel value={0}><ItemReviews/></TabPanel>
            <TabPanel value={1}><Qa/></TabPanel>
            <TabPanel value={2}><Faq/></TabPanel>
            <TabPanel value={3}><Contact/></TabPanel>
          </Box>
        </Tabs>
        </Box>
      </Menu>
    </CarInfoContainer>
  )
}

export default UsedCarInfo
