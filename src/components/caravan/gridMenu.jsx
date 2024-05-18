import React from 'react'
import { CardButtonWrapper, Price, CarContainer, Card, CardBottom, CardBottomCarName, CardBottomMiddle, MappingButton, CardImg} from '../../style'

import { caravan } from '../mock/caravan'

// img //
import star from '../../assets/star.svg'
import { Link } from 'react-router-dom'

function GridMenu({filteredData}) {
  const data = caravan.maindata
  return (
    <CarContainer>
        {filteredData.map((value, key)=> {
            const caravanData = value.caravan;
            return (
                <Card key={key}>
                    <Link to={`${value.id}`}>
                        <CardImg>
                            <img src={caravanData.image} alt="Photo of car not entered" width={"100%"}/>
                        </CardImg>
                    </Link>
                    
                    <CardBottom>
                        <CardBottomCarName>{caravanData.name}</CardBottomCarName>
                        <CardBottomMiddle>
                            <p>{caravanData.company}</p>
                            <div>
                                <img src={star} alt="" width={"20px"}/>
                                <label>{caravanData.rating}</label>
                            </div>
                        </CardBottomMiddle>
                        <Price>{caravanData.price} Won</Price>
                        <CardButtonWrapper>
                            <MappingButton>Order</MappingButton>
                            <MappingButton>Compare</MappingButton>
                        </CardButtonWrapper>
                    </CardBottom>
                </Card>
            )
        })}
    </CarContainer>
  )
}

export default GridMenu
