import React from 'react'
import { Card, Container, PlacesWrapper } from './style'
import CampingPlaceHeader from '../header/campingPlaceHeader'
import { campingPlace } from '../mock/campingPlace'

function CampingPlace() {
  const data = campingPlace.maindata;
  return (
    <Container>
        <CampingPlaceHeader/>

        <PlacesWrapper>
            {data.map((value, key) => {
                return (
                    <Card key={key}>
                        <img src={value.campingPlace.photo} alt="" style={{borderRadius: "10px", width: "300px", height: "200px"}}/>
                    </Card>
                )
            })}
            
        </PlacesWrapper>
    </Container>
  )
}

export default CampingPlace
