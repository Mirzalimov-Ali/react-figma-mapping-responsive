import React from 'react'
import { AllWrapper, Button, CarName, CaravanCard, CaravanCardRight, CaravanContainer, CaravanImgWrapper, NameAndPrice, RatingWrapper } from '../../caravanStyle';
import { tuning } from '../mock/tuning';
import { Price } from '../../style';

import star from '../../assets/star.svg'

function Vmenu() {
  const data = tuning.maindata
  return (
    <CaravanContainer>
        {data.map((value, key) => {
            const tuningData = value.tuning;
            return (
                <CaravanCard key={key}>
                <CaravanImgWrapper>
                    <img src={tuningData.image}/>
                </CaravanImgWrapper>
                <CaravanCardRight>
                    <AllWrapper>
                        <CarName>{tuningData.name}</CarName>
                        <Price $price>{tuningData.price} Won</Price>
                    </AllWrapper>
                    <AllWrapper>
                        <small style={{fontSize: "10px", color: "#373737"}}>{tuningData.company}</small>
                        <RatingWrapper>
                            <img src={star} alt="" style={{width: "15px"}}/>
                            <p>{tuningData .rating}</p>
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
