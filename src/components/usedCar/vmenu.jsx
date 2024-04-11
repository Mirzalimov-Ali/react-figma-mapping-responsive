import React from 'react'
import { AllWrapper, Button, CarName, CaravanCard, CaravanCardRight, CaravanContainer, CaravanImgWrapper, NameAndPrice, RatingWrapper } from '../../caravanStyle';
import { usedCar } from '../mock/usedCar';
import { Price } from '../../style';

import star from '../../assets/star.svg'

function Vmenu() {
  const data = usedCar.maindata
  return (
    <CaravanContainer>
        {data.map((value, key) => {
            const usedData = value.used;
            return (
                <CaravanCard key={key}>
                <CaravanImgWrapper>
                    <img src={usedData.image}/>
                </CaravanImgWrapper>
                <CaravanCardRight>
                    <AllWrapper>
                        <CarName>{usedData.name}</CarName>
                        <Price $price>{usedData.price} Won</Price>
                    </AllWrapper>
                    <AllWrapper>
                        <small style={{fontSize: "10px", color: "#373737"}}>{usedData.company}</small>
                        <RatingWrapper>
                            <img src={star} alt="" style={{width: "15px"}}/>
                            <p>{usedData.rating}</p>
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
