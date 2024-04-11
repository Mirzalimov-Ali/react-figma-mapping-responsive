import React from 'react'
import { CardButtonWrapper, Price, CarContainer, Card, CardBottom, CardBottomCarName, CardBottomMiddle, MappingButton, CardImg} from '../../style'

import { tuning } from '../mock/tuning'

// img //
import star from '../../assets/star.svg'

function GridMenu() {
  const data = tuning.maindata
  return (
    <CarContainer>
        {data.map((value, key)=> {
            const tuningData = value.tuning;
            return (
                <Card key={key}>
                    <CardImg>
                        <img src={tuningData.image} alt="Photo of car not entered" width={"100%"}/>
                    </CardImg>
                    <CardBottom>
                        <CardBottomCarName>{tuningData.name}</CardBottomCarName>
                        <CardBottomMiddle>
                            <p>{tuningData.company}</p>
                            <div>
                                <img src={star} alt="" width={"20px"}/>
                                <label>{tuningData.rating}</label>
                            </div>
                        </CardBottomMiddle>
                        <Price>{tuningData.price} Won</Price>
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
