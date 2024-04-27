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
    width: 100%;
    h1 {
        font-size: 80px;
        font-weight: 700;
    }
    @media only screen and (max-width: 1300px) {
        h1 {
            font-size: 70px;
        }
    }
    @media only screen and (max-width: 660px) {
        h1 {
            width: 100%;
            text-align: center;
            font-size: 50px;
        }
    }
`

export const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
`

export const PlacesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    gap: 30px;
    margin-top: 50px;
    @media only screen and (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 660px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    gap: 6px;
`

export const CampingInfoContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 1300px) {
        padding: 0 30px;
    }
`

export const CampingInfoImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    img {
        width: 200px;
        border-radius: 10px;
    }
    @media only screen and (max-width: 420px) {
        width: 100%;
        overflow: scroll;
    }
`

export const CampingInfoImages = styled.img`
    width: 100px;
    @media only screen and (max-width: 1300px) {
        display: ${(props) => props.$tabletNone ? "none" : "flex"};
    }
    @media only screen and (max-width: 660px) {
        display: ${(props) => props.$mobileNone ? "none" : ""};
    }
`

export const CampingInfoMap = styled.img`
    @media only screen and (max-width: 1300px) {
        width: 90%;
        margin: auto;
    }
`

export const CampingInfoNameWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
    width: 100%;
`

export const CampingInfoLocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const CampingInfoLineOne = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    width: ${(props) => props.$short ? "350px" : "400px"};
    @media only screen and (max-width: 420px) {
        width: 100%;
    }
`

export const CampingInfoLineItem = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`