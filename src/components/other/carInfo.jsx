import * as React from 'react'
import { useParams } from 'react-router-dom'
import { campcar } from '../mock/mockdata';
import { CarInfoContainer, CarInfoHeader, CarInfoHeaderButton, CarInfoHeaderButtonWrapper, InfoWrapper, InfoWrapperBottom, InfoWrapperLine, InfoWrapperLine1, InfoWrapperLine2, LineWrappers, Lines, LinesImgWrapper, LinesTextWrapper, Menu, RightButton } from '../../caravanStyle';

import carInfoimg1 from '../../assets/carInfo-1.png'
import carInfoimg2 from '../../assets/carInfo-2.png'
import carInfoimg3 from '../../assets/carInfo-3.png'
import carInfoimg4 from '../../assets/carInfo-4.png'
import carInfoimg5 from '../../assets/carInfo-5.png'

import { Tabs, TabList, Tab, TabPanel } from '@mui/joy';
import ItemReviews from './itemReviews';
import Qa from './qa';
import Faq from './faq';
import Contact from './contact';



function CarInfo() {
  const { id } = useParams();
  const resultData = campcar.maindata.find((value) => value.id === parseInt(id));
  console.log("id:", resultData)
  return (
    <CarInfoContainer>
      <CarInfoHeader>
        <h1>{resultData.car.name}</h1>
        <CarInfoHeaderButtonWrapper>
            <CarInfoHeaderButton $primary>add to cart</CarInfoHeaderButton>
            <CarInfoHeaderButton>compare</CarInfoHeaderButton>
        </CarInfoHeaderButtonWrapper>
      </CarInfoHeader>
      <LineWrappers>
        <div>
            <img src={resultData.car.photo} alt="" width={"500px"}/>
        </div>
        <InfoWrapper>
            <InfoWrapperLine1>
                <div>
                    <h3>{resultData.car.name}</h3>
                    <small>aid</small>
                </div>
                <p style={{fontSize: "30px", fontWeight: "600", color: "#006DAB"}}>{resultData.car.cost}Won</p>
            </InfoWrapperLine1>
            <InfoWrapperLine/>
            <InfoWrapperLine2>
                <InfoWrapperBottom>
                    <p>Company</p>
                    <p style={{fontSize: "12px", opacity: "0.5"}}>{resultData.car.company}</p>
                </InfoWrapperBottom>
                <InfoWrapperBottom>
                    <p>People</p>
                    <p style={{fontSize: "12px", opacity: "0.5"}}>{resultData.car.people}</p>
                </InfoWrapperBottom>
                <InfoWrapperBottom>
                    <p>License type</p>
                    <p style={{fontSize: "12px", opacity: "0.5"}}>License type</p>
                </InfoWrapperBottom>
            </InfoWrapperLine2>
        </InfoWrapper>
      </LineWrappers>

      <Lines>
        <LinesTextWrapper>
            <h1>Comfort</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
        </LinesTextWrapper>
        <LinesImgWrapper src={carInfoimg1}/>
      </Lines>
      
      <Lines>
        <LinesImgWrapper src={carInfoimg2}/>
        <LinesTextWrapper>
            <h1>Tidying away is child’s play!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
        </LinesTextWrapper>
      </Lines>

      <Lines>
        <LinesTextWrapper>
            <h1>Ventilated , Lit up</h1>
            <p>In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability. As for ventilation, we also often offer double ventilation in the bathroom (Skylight + window), which is very popular with our customers… Camper relies on legendary Seitz windows. They offer the best insulation and are also the easiest to use and safest because they can’t be removed from the outside.</p>
        </LinesTextWrapper>
        <LinesImgWrapper src={carInfoimg3}/>
      </Lines>

      <Lines>
        <LinesImgWrapper src={carInfoimg4}/>
        <LinesTextWrapper>
            <h1>Easy access</h1>
            <p>We add little touches that your joints will thank you for… All our motorhomes are equipped with a built-in step to facilitate entry to the vehicle All our vans are equipped with an electric step.</p>
        </LinesTextWrapper>
      </Lines>

      <Lines>
        <LinesTextWrapper>
            <h1>Heating when driving</h1>
            <p>Fuel heating is now very popular in the industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago.One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.</p>
            <CarInfoHeaderButtonWrapper>
                <CarInfoHeaderButton $primary>add to cart</CarInfoHeaderButton>
                <RightButton>compare</RightButton>
            </CarInfoHeaderButtonWrapper>
        </LinesTextWrapper>
        <LinesImgWrapper src={carInfoimg5}/>
      </Lines>
      
      <Menu>
        <Tabs aria-label="Basic tabs" defaultValue={0} sx={{marginLeft: "-400px"}}>
            <TabList sx={{minHeight: "60px", }} disableUnderline>
                <Tab variant='soft' color='primary' sx={{bgcolor: "#006DAB33"}} disableIndicator>Item reviews</Tab>
                <Tab variant='soft' color='primary' sx={{bgcolor: "#006DAB33"}} disableIndicator>Q&A</Tab>
                <Tab variant='soft' color='primary' sx={{bgcolor: "#006DAB33"}} disableIndicator>FAQ</Tab>
                <Tab variant='soft' color='primary' sx={{bgcolor: "#006DAB33"}} disableIndicator>Contact</Tab>
            </TabList>

            <TabPanel value={0}>
                <ItemReviews/>
            </TabPanel>
            <TabPanel value={1}>
                <Qa/>
            </TabPanel>
            <TabPanel value={2}>
                <Faq/>
            </TabPanel>
            <TabPanel value={3}>
                <Contact/>
            </TabPanel>
        </Tabs>
      </Menu>
    </CarInfoContainer>
  )
}

export default CarInfo
