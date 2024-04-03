import styled from "styled-components";
import headerImg from './assets/header-img.png'

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    padding: 0 70px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
`

export const NavbarNavigationContianer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;    
    gap: 60px;
    p {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--text, #373737);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        cursor: pointer;
    }
`

export const HeaderContainer = styled.div`
    background-image: url(${headerImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 100px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    color: white;
`

// home //

export const HomeContainer = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-top: 60px;
`

export const HomeLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const Line = styled.div`
    width: 240px;
    height: 1px;
    background: rgba(55, 55, 55, 0.30);
    margin-top: 15px;
`

export const Boxes = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

export const HomeButtonContainer = styled.div`
    display: flex;
    margin-top: 50px;
    gap: 10px;
`

export const HomeButton = styled.button`
    width: 135.804px;
    height: 40.968px;
    border-radius: 60px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    border: none;
    cursor: pointer;
    color: white;
    background-color: ${(props) => props.$search ? "#006DAB" : "#FF7A00"};
    font-size: 17px;
    font-weight: 500;
`

export const HomeRightContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HomeRightTop = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1000px;
    align-items: center;
`

export const LongLine = styled.div`
    width: 1000px;
    margin-top: 10px;
    height: 1px;
    background: rgba(55, 55, 55, 0.50);
`

export const CarContainer = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    img {
        height: 150px;
    }
`

export const MappingButton = styled.button`
    background: none;
    border: 1px solid var(--blue, #006DAB);
    border-radius: 10px;
    color: #006DAB;
    font-size: 14px;
    width: 90px;
    margin-top: 20px;
    height: 30px;
    font-weight: 700;
    cursor: pointer;

`

export const FooterContainer = styled.div`
    background: #006DAB;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    gap: 200px;
    color: #fff;
    height: 300px;
    margin-top: 50px;
`

export const H2 = styled.h2`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 40px;
`