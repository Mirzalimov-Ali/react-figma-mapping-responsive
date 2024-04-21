import React from 'react'
import { CardButtonWrapper, Price, CarContainer, Card, CardBottom, CardBottomCarName, CardBottomMiddle, MappingButton, CardImg} from '../../style'

import { usedCar } from '../mock/usedCar'

// img //
import star from '../../assets/star.svg'
import { Link } from 'react-router-dom'

function GridMenu() {
  const data = usedCar.maindata
  console.log(data)
  return (
    <CarContainer>
        {data.map((value, key)=> {
            const Data = value.used
            return (
                <Card key={key}>
                    <Link to={`${value.id}`}>
                        <CardImg>
                            <img src={Data.image} alt="Photo of car not entered" width={"100%"}/>
                        </CardImg>
                    </Link>
                    
                    <CardBottom>
                        <CardBottomCarName>{Data.name}</CardBottomCarName>
                        <CardBottomMiddle>
                            <p>{Data.company}</p>
                            <div>
                                <img src={star} alt="" width={"20px"}/>
                                <label>{Data.rating}</label>
                            </div>
                        </CardBottomMiddle>
                        <Price>{Data.price} Won</Price>
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
