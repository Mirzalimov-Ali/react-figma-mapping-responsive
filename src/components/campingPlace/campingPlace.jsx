import React from 'react'
import { Card, Container, PlacesWrapper } from './style'
import CampingPlaceHeader from '../header/campingPlaceHeader'
import { campingPlace } from '../mock/campingPlace'
import { Link } from 'react-router-dom';

function CampingPlace() {
  const data = campingPlace.maindata;
  return (
    <Container>
        <CampingPlaceHeader/>

        <PlacesWrapper>
            {data.map((value, key) => {
                return (
                    <Card key={key}>
                        <Link to={`${value.id}`}>
                            <img src={value.campingPlace.photo} alt="" style={{borderRadius: "10px", width: "300px", height: "200px"}}/>
                        </Link>
                        <p style={{fontWeight: "600"}}>{value.campingPlace.name}</p>
                        <small>{value.campingPlace.location}</small>
                    </Card>
                )
            })}
            
        </PlacesWrapper>
    </Container>
  )
}

export default CampingPlace
