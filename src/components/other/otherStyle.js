import styled from "styled-components";

export const ItemReviewsContainer = styled.div`
    width: 100%;
    padding: 0 100px;
    @media only screen and (max-width: 1300px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

export const ItemReviewHeader = styled.div`
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
    gap: 950px;
    @media only screen and (max-width: 1306px) {
        justify-content: space-between;
        gap: 0;
        width: 100%;
    }
`

export const ItemReviewHeaderLeft = styled.div`
    display: flex;
    gap: 20px;
`  

export const ItemReviewHeaderRight = styled.div`
    display: flex;
    align-items: center;
`  

export const ItemReviewHeaderInput = styled.input`
    height: 30px;
    border-radius: 5px 0 0 5px;
    color: blue;
    padding-left: 10px;
    width: 130px;
    border-right: none;
    border: 1px solid gray;
    &:focus {
        outline: none;
    }
`

export const ItemReviewHeaderButton = styled.button`
    background: none;
    border: 1px solid gray;
    height: 30px;
    width: 30px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
`

export const ItemReviewDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ItemReviewData = styled.div`
    display: ${(props) => props.$none ? "none" : "flex"};
    width: 100%;
    justify-content: center;
    gap: 600px;
    padding: 20px;
    @media only screen and (max-width: 1306px) {
        justify-content: space-between;
        gap: 50px;
        width: 100%;
    }
    @media only screen and (max-width: 700px) {
        display: ${(props) => props.$none ? "flex" : "none"};
        flex-direction: column;
    }
`

export const Line = styled.div`
    width: 1300px;
    border: 1px solid #37373726;
    margin: auto;
    @media only screen and (max-width: 1306px) {
        width: 100%;
    }
`

export const ItemReviewDataLeft = styled.div`
    display: flex;
    gap: 20px;
`

export const ItemReviewDataRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

// faq
export const FaqBox = styled.div`
    width: 38vw;
    height: 60px;
    border-radius: 10px;
    box-shadow: 5px 10px 10px -10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 750px) {
        display: flex;
        width: 90vw;
    }
`

// purchase
export const PurchaseContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`

export const PurchaseCarWrapper = styled.div`
    display: flex;
    gap: 30px;
    @media only screen and (max-width: 1300px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`

export const PurchaseLeftWrapper = styled.div`
    width: 811px;
    height: 476px;
    box-shadow: 0 0 5px 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    @media only screen and (max-width: 1300px) {
        position: relative;
    }
    @media only screen and (max-width: 820px) {
        width: 100vw;
    }
`

export const PurchaseLeftWrapperImg = styled.img`
    width: 70%;
`

export const PurchaseLeftWrapperPriceBox = styled.div`
    background: #3737371A;
    height: 50px;
    width: 350px;
    position: absolute;
    z-index: 1000;
    border-radius: 10px;
    top: 620px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media only screen and (max-width: 660px) {
        width: 100%;
    }
`

export const PurchaseRightWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    label {
        margin-top: 20px;
    }
    height: 600px;
    overflow-y: scroll;
    @media only screen and (max-width: 1300px) {
        margin-left: 0;
    }
`

export const SpaceBetween = styled.div`
    @media only screen and (max-width: 1300px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        h1 {
            margin-top: 20px;
        }
    }

    @media only screen and (max-width: 660px) {
        h1 {
            font-size: 23px;
        }
    }
`

export const Description = styled.p`
    width: 300px;
    margin-top: 10px;
    @media only screen and (max-width: 1300px) {
        width: 90vw;
    }
`

export const PurchaseButton = styled.button`
    background: #006DAB;
    color: white;
    width: 311px;
    border: none;
    border-radius: 10px;
    min-height: 45px;
    font-size: 20px;
    font-weight: 700;
    margin-top: 160px;
    @media only screen and (max-width: 1300px) {
        width: 100%;
        margin-top: 20px;
    }
`

export const PurchaseInputs = styled.input`
    width: 311px;
    min-height: 50px;
    border-radius: 10px;
    background: #3737371A;
    padding: 0 20px;
    border: none;
    margin-top: 10px;
    &:focus {
        outline: none;
    }
    @media only screen and (max-width: 1300px) {
        width: 100%;
    }
`

export const PurchaseSelect = styled.select`
    width: 311px;
    min-height: 50px;
    border-radius: 10px;
    background: #3737371A;
    padding: 0 20px;
    border: none;
    margin-top: 10px;
    &:focus {
        outline: none;
    }
    @media only screen and (max-width: 1300px) {
        width: 100%;
    }
`

export const PlaceOrderButton = styled.div`
    background: #006DAB;
    color: white;
    width: 311px;
    border: none;
    border-radius: 10px;
    min-height: 45px;
    font-size: 20px;
    font-weight: 700;
    margin-top: 50px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1300px) {
        width: 100%;
    }
`

export const Titles = styled.p`
    font-size: 35px;
    font-weight: 600;
    color: #373737;
    text-decoration: underline;
    text-decoration-color: #FF7A00;
`