import React from 'react'
import { QaContainer, QaLeft, QaLeftBox, QaRight, QaRightButton, QaRightInput } from '../../caravanStyle'
import { FaqBox } from './style'

import bottomArrow from '../../assets/bottom-arrow.png'

function Faq() {
  return (
    <QaContainer>
      <QaLeft>
        <FaqBox>
          <h4>Frequently asked questions </h4>
          <img src={bottomArrow} alt="" />
        </FaqBox>
        <FaqBox>
          <h4>Frequently asked questions </h4>
          <img src={bottomArrow} alt="" />
        </FaqBox>
        <FaqBox>
          <h4>Frequently asked questions </h4>
          <img src={bottomArrow} alt="" />
        </FaqBox>
        <FaqBox>
          <h4>Frequently asked questions </h4>
          <img src={bottomArrow} alt="" />
        </FaqBox>
      </QaLeft>

      <QaRight>
        <h2>Have you got a question</h2>
        <QaRightInput type='text' placeholder='your name'/>
        <QaRightInput type='email' placeholder='your email'/>
        <QaRightInput type='text' placeholder='your question' style={{height: "100px"}}/>
        <QaRightButton>Send question</QaRightButton>
      </QaRight>
    </QaContainer>
  )
}

export default Faq
