import React from 'react'
import { QaContainer, QaLeft, QaLeftBox, QaRight, QaRightButton, QaRightInput } from '../../caravanStyle'
import { FaqBox } from './style'

import map from '../../assets/map.png'

function Contact() {
  return (
    <QaContainer>
      <div style={{display: 'flex', flexDirection: 'column', gap: "20px"}}>
        <img src={map} alt="" />
        <div style={{display:'flex', gap: "30px"}}>
          <div style={{padding: "20px", boxShadow: "0px 10px 40px -20px", width: "50%", borderRadius: "10px"}}>
            <p style={{fontSize: "13px"}}>Phone number:</p>
            <p style={{fontWeight: "500"}}>+7 237 181 181</p>
            <p style={{fontWeight: "500"}}>+7 210 181 181</p>
          </div>
          <div style={{padding: "20px", boxShadow: "0px 10px 40px -20px", width: "50%", borderRadius: "10px"}}>
            <p style={{fontSize: "13px"}}>E - mail:</p>
            <p style={{fontWeight: "500"}}>logo.uz</p>
          </div>
        </div>
      </div>

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

export default Contact
