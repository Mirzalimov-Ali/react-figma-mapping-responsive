import React from 'react'
import { HeaderBigText, HeaderContainer, HeaderSmallText } from '../../style'

function Header() {
  return (
    <HeaderContainer $header>
      <p>Home / Motors</p>
      <HeaderSmallText>Our ranges</HeaderSmallText>
      <HeaderBigText>Motors</HeaderBigText>
    </HeaderContainer>
  )
}

export default Header
