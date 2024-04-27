import React from 'react'
import { CampingPlaceHeaderContainer } from '../campingPlace/style'

function CampingPlaceHeader() {
  return (
    <CampingPlaceHeaderContainer>
        <p>Home / Camping place</p>
        <p style={{fontSize: "80px", fontWeight: "700"}}>Camping places</p>
    </CampingPlaceHeaderContainer>
  )
}

export default CampingPlaceHeader
