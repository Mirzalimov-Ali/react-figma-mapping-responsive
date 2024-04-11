import styled from 'styled-components'

export const CaravanContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 60px
`

export const CaravanCard = styled.div`
    width: 100%;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    border-radius: 20px;
    padding: 10px 20px;
    gap: 30px;
    display: flex;
    img {
        width: 200px;
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
    justify-content: space-between;
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

export const HomeContainer = styled.div`
    img {
        height: 100vh;
    }
`