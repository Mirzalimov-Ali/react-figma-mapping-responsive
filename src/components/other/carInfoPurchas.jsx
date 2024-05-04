import React from 'react'
import { Description, PlaceOrderButton, PurchaseButton, PurchaseCarWrapper, PurchaseContainer, PurchaseInputs, PurchaseLeftWrapper, PurchaseLeftWrapperImg, PurchaseLeftWrapperPriceBox, PurchaseRightWrapper, PurchaseSelect, SpaceBetween, Titles } from './otherStyle'
import cart from '../../assets/cart-text.png'
import { campcar } from '../mock/mockdata';
import { useParams } from 'react-router-dom';

function CarInfoPurchase() {
  const { id } = useParams();
  const data = campcar.maindata.find((value) => value.id === parseInt(id));
  return (
    <PurchaseContainer>
        <Titles>Cart</Titles>
        <PurchaseCarWrapper>
            <PurchaseLeftWrapper>
                <PurchaseLeftWrapperImg src={data.car.photo} alt="" />
                <PurchaseLeftWrapperPriceBox>
                    <p>Purchase price</p>
                    <p style={{fontWeight: "600"}}>{data.car.cost}</p>
                </PurchaseLeftWrapperPriceBox>
            </PurchaseLeftWrapper>

            <PurchaseRightWrapper>
                <SpaceBetween>
                    <h1 style={{fontWeight: '600'}}>{data.car.name}</h1>
                    <h1 style={{fontWeight: '600', color: "#006DAB", marginTop: '20px'}}>{data.car.cost} W</h1>
                </SpaceBetween>
                <p style={{marginTop: "30px", fontWeight: "500"}}>Description</p>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, error blanditiis tempore quidem eum placeat!</Description>
                <PurchaseButton>Continue to payment</PurchaseButton>

                <h2 style={{marginTop: "42px"}}>Enter Account Details</h2>

                <label htmlFor="first-name">First name</label>
                <PurchaseInputs type='text' placeholder='First name' id='first-name'/>

                <label htmlFor="last-name">Last name</label>
                <PurchaseInputs type='text' placeholder='Last name' id='last-name'/>

                <label htmlFor="email">Email</label>
                <PurchaseInputs type='email' placeholder='Your email' id='email'/>

                <label htmlFor="phone">Mobile Phone Number</label>
                <PurchaseInputs type='number' placeholder='Mobile Phone Number' id='phone'/>
                
                <h2 style={{marginTop: "42px"}}>Card</h2>

                <label htmlFor="card-name">Name on card</label>
                <PurchaseInputs type='text' placeholder='Name on card' id='card-name'/>
                
                <label htmlFor="card-number">Card Number</label>
                <PurchaseInputs type='number' placeholder='Card Number' id='card-number'/>
                
                <label htmlFor="month">Expiration Month</label>
                <PurchaseSelect id='month'>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                </PurchaseSelect>

                <label htmlFor="year">Expiration Year</label>
                <PurchaseSelect id='year'>
                    <option value="1">2024</option>
                    <option value="2">2025</option>
                    <option value="3">2026</option>
                </PurchaseSelect>

                <label htmlFor="CVV">CVV</label>
                <PurchaseInputs type='text' placeholder='CVV' id='CVV'/>

                <label htmlFor="zip">Billing Zip Cod</label>
                <PurchaseInputs type='number' placeholder='Billing Zip Cod' id='zip'/>
                
                <PlaceOrderButton>Place Order</PlaceOrderButton>
            </PurchaseRightWrapper>
        </PurchaseCarWrapper>
    </PurchaseContainer>
  )
}

export default CarInfoPurchase
