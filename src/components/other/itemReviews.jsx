import React from 'react'
import { ItemReviewData, ItemReviewDataLeft, ItemReviewDataRight, ItemReviewDataWrapper, ItemReviewHeader, ItemReviewHeaderButton, ItemReviewHeaderInput, ItemReviewHeaderLeft, ItemReviewHeaderRight, ItemReviewsContainer, Line } from './otherStyle'
import { campcar } from '../mock/mockdata'

import downArrow from '../../assets/down-arrow.svg'

function ItemReviews() {
  const data = campcar.maindata
  return (
    <ItemReviewsContainer>
      <ItemReviewHeader>
        <ItemReviewHeaderLeft>
          <p style={{fontWeight: "700"}}>Premium Review</p>
          <span style={{color: 'blue', fontWeight: "600"}}>{data.length}</span>
        </ItemReviewHeaderLeft>
        <ItemReviewHeaderRight>
          <ItemReviewHeaderInput type='text' placeholder='best'/>
          <ItemReviewHeaderButton><img src={downArrow} alt="" /></ItemReviewHeaderButton>
        </ItemReviewHeaderRight>
      </ItemReviewHeader>

      <ItemReviewDataWrapper>
        {data.map((value, key) => {
          return (
            <div>
              <ItemReviewData key={key}>
                <ItemReviewDataLeft>
                  <img src={value.car.photo} alt="" width={"100px"}/>
                  <div>
                    <p style={{fontWeight: "700"}}>{value.car.name}</p>
                    <p style={{fontSize: "13px", opacity: "0.8"}}>{value.car.company}</p>
                    <p style={{fontSize: "16px", marginTop: "10px"}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                  </div>
                </ItemReviewDataLeft>
                <ItemReviewDataRight>
                  <div style={{display: "flex", gap: "10px"}}>
                    <p>ID:</p>
                    <p>{value.id}</p>
                  </div>
                  <div style={{display: "flex", gap: "10px"}}>
                    <p>Date:</p>
                    <p>2024.4.20</p>
                  </div>
                  <div style={{display: "flex", gap: "10px"}}>
                    <p>Viewed:</p>
                    <p>135</p>
                  </div>
                </ItemReviewDataRight>
              </ItemReviewData>

              <Line/>

              <ItemReviewData key={key} $none>
                <img src={value.car.photo} alt="" width={"100%"}/>
                <ItemReviewDataLeft>
                  
                  <div>
                    <p style={{fontWeight: "700"}}>{value.car.name}</p>
                    <p style={{fontSize: "13px", opacity: "0.8"}}>{value.car.company}</p>
                    <p style={{fontSize: "16px", marginTop: "10px"}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                  </div>
                </ItemReviewDataLeft>
                <ItemReviewDataRight>
                  <div style={{display: "flex", gap: "10px"}}>
                    <p>ID:</p>
                    <p>{value.id}</p>
                  </div>
                  <div style={{display: "flex", gap: "10px"}}>
                    <p>Date:</p>
                    <p>2024.4.20</p>
                  </div>
                  <div style={{display: "flex", gap: "10px"}}>
                    <p>Viewed:</p>
                    <p>135</p>
                  </div>
                </ItemReviewDataRight>
              </ItemReviewData>
            </div>
            
          )
        }).slice(0, 6)}
      </ItemReviewDataWrapper>
    </ItemReviewsContainer>
  )
}

export default ItemReviews
