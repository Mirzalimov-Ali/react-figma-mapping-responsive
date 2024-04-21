import styled from 'styled-components'
import carInfoHeader from './assets/carInfoHeader.png'

export const CaravanContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 60px
`

export const CaravanCard = styled.div`
    width: 1100px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    border-radius: 20px;
    padding: 10px 20px;
    gap: 30px;
    display: flex;
    img {
        width: 200px;
    }
    @media only screen and (max-width: 1300px) {
        width: 100%;
    }
`

export const CaravanImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const CaravanCardRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 8;
    justify-content: center;
`

export const AllWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    justify-content: ${(props) => props.$gap ? "space-evenly" : "space-between"};
    gap: ${(props) => props.$gap ? "20px": "0"};
`

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const Button = styled.div`
    width: 270.325px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid var(--blue, #006DAB);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    color: #006DAB;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 30px;
    &:hover {
        background-color: #006DAB;
        color: white;
    }
    @media only screen and (max-width: 1300px) {
        width: 200px;
        gap: 20px;
    }
    @media only screen and (max-width: 694px) {
        width: 100px;
        gap: 20px;
    }
`

export const CarName = styled.p`
    @media only screen and (max-width: 500px) {
        font-size: 14px;
    }
`


/* home */
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HomeTitles = styled.img`
    max-width: 200px;
    max-height: 39px;
    margin: 30px auto;
`

export const CarouselBox = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CarouselBoxInfoWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const MultiCarouselContainer = styled.div`
    min-width: 100px;
    max-width: 1300px; 
    margin: auto;
    @media only screen and (max-width: 1300px) {
        min-width: 0;
        max-width: 700px;
    }
    @media only screen and (max-width: 660px) {
        min-width: 0;
        max-width: 300px;
    }
`

export const VideosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-content: center;
    margin: auto;
    @media only screen and (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
    } 
    @media only screen and (max-width: 660px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const BlogsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    @media only screen and (max-width: 1300px) {
        flex-direction: column;
        align-items: center;
    } 
`

export const BlogsLeft = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1300px) {
        flex-direction: column;
        align-items: center;
    } 
    @media only screen and (max-width: 660px) {
        align-items: start;
    } 
`

export const BlogsLeftP = styled.p`
    width: 400px;
    @media only screen and (max-width: 1300px) {
        width: 80vw;
    } 
`

export const BlogsRight = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    @media only screen and (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
    } 
    @media only screen and (max-width: 660px) {
        grid-template-columns: repeat(1, 1fr);
    } 
`


/* carInfo */
export const CarInfoContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    margin-bottom: 6100px;
    width: 100vw;
`

export const CarInfoHeader = styled.div`
    background-image: url(${carInfoHeader});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 700px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const CarInfoHeaderButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
`

export const CarInfoHeaderButton = styled.button`
    border-radius: 10px;
    color: white;
    width: 180px;
    height: 50px;
    cursor: pointer;
    text-transform: uppercase;
    border: ${(props) => props.$primary ? "none" : "2px solid white"};
    background: ${(props) => props.$primary ? "#006DAB" : "none"};
    font-size: 16px;
    font-weight: 600;
    &:hover {
        background: ${(props) => props.$primary ? "none" : "#006DAB"};
        border: ${(props) => props.$primary ? "2px solid black" : "none"};
        color: ${(props) => props.$primary ? "black" : "none"};
    }
`

export const LineWrappers = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    @media only screen and (max-width: 1300px) {
        flex-direction: column;
        align-items: center;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: white;
    box-shadow: 3px 10px 31px -10px rgba(0,0,0,1);
    height: 300px;
    width: 500px;
    padding: 30px;
`

export const InfoWrapperLine1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
`

export const InfoWrapperLine = styled.div`
    border: 1px solid #3737374D;
    margin: 10px 20px 10px 0;
`

export const InfoWrapperLine2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;
`

export const InfoWrapperBottom = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Lines = styled.div`
    display: ${(props) => props.$none ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    gap: 67px;
    @media only screen and (max-width: 1300px) {
        flex-direction: column;
        align-items: center;
        display: ${(props) => props.$none ? "none" : "flex"};
        gap: 0;
    }
`

export const LinesTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1 {
        font-weight: 500;
    }
    p {
        width: 533px;
    }
    @media only screen and (max-width: 1300px) {
        display: flex;
        align-items: start;
        width: 600px;
        margin: 20px 0 50px 0;
    }
`

export const LinesImgWrapper = styled.img`
    width: 600px;
    height: 400px;
`

export const RightButton = styled.button`
    border-radius: 10px;
    color: #006DAB;
    width: 180px;
    height: 50px;
    cursor: pointer;
    text-transform: uppercase;
    border: 2px solid #006DAB;
    background: none;
    font-size: 16px;
    font-weight: 600;
    &:hover {
        background-color: #006DAB;
        color: white    ;
    }
`

export const Menu = styled.div`
    height: 60px;
    background: #006DAB33;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 1300px) {
        display: flex;
        justify-content: center;
        .tabs-wrapper {
            display: flex;
            justify-content: center;
            margin: auto;
            width: 100%;
        }
        .tablist {
            margin: auto;
            width: 100%;
        }
    }
`

/* Q&A */
export const QaContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    @media only screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        width: 100vw;
    }
`

export const QaLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 38vw;
    gap: 20px;
    @media only screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        width: 100vw;
    }
`

export const QaLeftBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
    p {
        opacity: 0.7;
        font-size: 14px;
    }
`

export const QaRight = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 10px 20px -5px;
    width: 400px;
    h2 {
        text-align: center;
        margin-bottom: 20px;
    }
`

export const QaRightInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: none;
    background: #3737374D;
    padding: 0 20px;
    margin-bottom: 10px;
`

export const QaRightButton = styled.button`
    background: #006DAB;
    border: none;
    color: white;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
`