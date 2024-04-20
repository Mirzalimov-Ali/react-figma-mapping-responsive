import React from 'react'
import { AllWrapper, Button, CarName, CaravanCard, CaravanCardRight, CaravanContainer, CaravanImgWrapper, NameAndPrice, RatingWrapper } from '../../caravanStyle';
import { campcar } from '../mock/mockdata';
import { Price } from '../../style';

import star from '../../assets/star.svg'

function Vmenu() {
  const data = campcar.maindata
  return (
    <CaravanContainer>
        {data.map((value, key) => {
            const car = value.car;
            return (
                <CaravanCard key={key}>
                    <CaravanImgWrapper>
                        <img src={car.photo}/>
                    </CaravanImgWrapper>
                    <CaravanCardRight>
                        <AllWrapper>
                            <CarName>{car.name}</CarName>
                            <Price $price>{car.cost} Won</Price>
                        </AllWrapper>
                        <AllWrapper>
                            <small style={{fontSize: "10px", color: "#373737"}}>{car.company}</small>
                            <RatingWrapper>
                                <img src={star} alt="" style={{width: "15px"}}/>
                                <p>{car.rating}</p>
                            </RatingWrapper>
                        </AllWrapper>
                        <AllWrapper $gap>
                            <Button>Order</Button>
                            <Button>Compare</Button>
                        </AllWrapper>
                    </CaravanCardRight>
                </CaravanCard>
            )
        })}
    </CaravanContainer>
  )
}

export default Vmenu
