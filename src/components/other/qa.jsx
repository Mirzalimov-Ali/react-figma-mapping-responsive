import React from 'react'
import { QaContainer, QaLeft, QaLeftBox, QaRight, QaRightButton, QaRightInput } from '../../caravanStyle'

function Qa() {
  return (
    <QaContainer>
      <QaLeft>
        <QaLeftBox>
          <p>Name</p>
          <h4>Question Lorem ipsum dolor sit amet ?</h4>
        </QaLeftBox>
        <QaLeftBox>
          <p>Name</p>
          <h4>Question Lorem ipsum dolor sit amet ?</h4>
        </QaLeftBox>
        <QaLeftBox>
          <p>Name</p>
          <h4>Question Lorem ipsum dolor sit amet ?</h4>
        </QaLeftBox>
      </QaLeft>

      <QaRight>
        <h2>Send a question</h2>
        <QaRightInput type='text' placeholder='your name'/>
        <QaRightInput type='email' placeholder='your email'/>
        <QaRightInput type='text' placeholder='your question' style={{height: "100px"}}/>
        <QaRightButton>Send question</QaRightButton>
      </QaRight>
    </QaContainer>
  )
}

export default Qa
