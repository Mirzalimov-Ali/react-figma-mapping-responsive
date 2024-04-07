import React from 'react'
import { caravan } from '../mock/caravan'
import Header from '../header/header'

function Caravan() {
  const data = caravan.maindata
  return (
    <div>
      <Header>
        <p>Header</p>
      </Header>
    </div>
  )
}

export default Caravan
