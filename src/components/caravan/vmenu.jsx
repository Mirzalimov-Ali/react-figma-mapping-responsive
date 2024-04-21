import React from 'react'
import { AllWrapper, Button, CarName, CaravanCard, CaravanCardRight, CaravanContainer, CaravanImgWrapper, NameAndPrice, RatingWrapper } from '../../caravanStyle';
import { caravan } from '../mock/caravan';
import { Price } from '../../style';

import star from '../../assets/star.svg'
import { Link } from 'react-router-dom';

function Vmenu() {
  const data = caravan.maindata
  return (
    <CaravanContainer>
        {data.map((value, key) => {
            const caravan = value.caravan;
            return (
                <CaravanCard key={key}>
                    <Link to={`${value.id}`}>
                        <CaravanImgWrapper>
                            <img src={caravan.image}/>
                        </CaravanImgWrapper>    
                    </Link>
                <CaravanCardRight>
                    <AllWrapper>
                        <CarName>{caravan.name}</CarName>
                        <Price $price>{caravan.price} Won</Price>
                    </AllWrapper>
                    <AllWrapper>
                        <small style={{fontSize: "10px", color: "#373737"}}>{caravan.company}</small>
                        <RatingWrapper>
                            <img src={star} alt="" style={{width: "15px"}}/>
                            <p>{caravan .rating}</p>
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
