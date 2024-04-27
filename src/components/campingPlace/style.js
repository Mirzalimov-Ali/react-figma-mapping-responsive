import styled from "styled-components";
import headerImg from '../../assets/camping-place-header.png'

export const CampingPlaceHeaderContainer = styled.div`
    background-image: url(${headerImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    gap: 40px;
`

export const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
`

export const PlacesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    border: 1px solid #000;
    gap: 30px;
    margin-top: 50px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    width: 300px;
    gap: 20px;
`