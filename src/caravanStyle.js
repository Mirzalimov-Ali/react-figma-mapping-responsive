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
`