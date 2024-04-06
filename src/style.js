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
    .hamburger {
        display: none;
    }
    .mobile-menu {
        display: none;
    }
    @media only screen and (max-width: 1300px) {
        .hamburger {
            display: flex;
        }
    }
    @media only screen and (max-width: 660px) {
        .hamburger {
            display: none;
        }
        .navbar-none {
            display: none;
        }
        .mobile-menu {
            display: flex;
        }
        padding: 20px;
    }
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
    @media only screen and (max-width: 1300px) {
        display: none;
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
    padding: 0 20%;
`

export const HomeLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    flex: 1;
    @media only screen and (max-width: 1407px) {
        display: none;
    }
`

export const HomeLeftParagraph = styled.p`
    font-weight: 600;
    font-size: 18px;
`

export const CostBox = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 25px;
`
export const CostBoxInput = styled.input`
    border: 1px solid rgba(55, 55, 55, 0.60);
    height: 36px; 
    width: 90px; 
    border-radius: 10px;
`

export const BoxesTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const BoxesDownArrow = styled.img`
    margin-right: 50px;
`

export const BoxesDataWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column; 
    gap: 10px;
`

export const BoxesData = styled.div`
    display: flex;
    gap: 10px;
`

export const BoxesDataInput = styled.input`
    width: 22px;
    height: 22px;
`
export const HomeLeftCarWrapper = styled.div`
    margin-top: 50px;
    color: #006DAB;
    font-size: 17px;
    font-weight: 700;
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
    flex: 8;
    @media only screen and (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const HomeRightTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 1300px) {
       display: flex;
       justify-content: center;
       gap: 50px;
       width: 100%;
    }
    @media only screen and (max-width: 660px) {
        flex-direction: column;
        gap: 20px;
        .none {
            display: none;
        }
    }
`

export const HomeRightTopLeft = styled.div`
    display: flex;
    align-items: center;
`

export const HomeRightTopLeftRight = styled.div`
    display: ${(props) => props.$displayNone ? "none" : "flex"};
    align-items: center;
    margin-left: 20px;
    @media only screen and (max-width: 660px) {
        display: ${(props) => props.$displayNone ? "flex" : "none"};
    }
`
export const HomeRightTopButton = styled.button`
    height: 40px; 
    border: 1px solid rgba(55, 55, 55, 0.30);
    border-radius: ${(props) => props.$rightButton ? "0 5px 5px 0": "5px 0 0 5px"};
    background: none;
    width: 40px;
    cursor: pointer;
`

export const HomeRightTopRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    div {
        display: flex;
        align-items: center;
    }
    @media only screen and (max-width: 1089px) {
        display: flex;
    }
    @media only screen and (max-width: 451px) {
        gap: 0;
    }
`

export const SortInput = styled.input`
    height: 40px; 
    border: 1px solid rgba(55, 55, 55, 0.30); 
    border-radius: 5px 0 0 5px;
    padding: 0 10px;
    margin-left: 10px;
    width: ${(props) => props.$short ? "60px" : ""};
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    padding: 10px 30px;
    border-radius: 20px;
    width: 100%;
    @media only screen and (max-width: 420px) {
        width: 80%;
        margin: auto;
    }
   
`

export const CardBottom = styled.div`
    flex: 1;
`

export const CardImg = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const CardBottomCarName = styled.p`
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 5px;
`

export const CardBottomMiddle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    p {
        font-size: 14px;
        font-weight: 400;
    }
    div {
        display: flex;
        align-items: center;
        height: 20px;
    }
`

export const CardButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
`

export const Price = styled.p`
    color: #006DAB;
    font-size: 20px;
    font-weight: 700;
`

export const LongLine = styled.div`
    width: 100%;
    margin-top: 10px;
    height: 1px;
    background: rgba(55, 55, 55, 0.50);
    @media only screen and (max-width: 1300px) {
        /* width: 300px; */
        width: 100%;
        display: flex;
        margin: 10px auto;
    }
    @media only screen and (max-width: 660px) {
        width: 100%;
    }
`

export const CarContainer = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    .car-box {
        width: 90%;
    }
    @media only screen and (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
        display: grid;
        margin: 30px auto;
        .car-box {
            width: 100%;
            border-radius: 20px;
        }
    }
    @media only screen and (max-width: 660px) {
        grid-template-columns: repeat(1, 1fr);
        display: grid;
        margin: 30px auto;
        .car-box {
            width: 100%;
            border-radius: 20px;
        }
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
    @media only screen and (max-width: 1300px) {
       .footer-none {
            display: none;
       }
       gap: 100px;
    }
    @media only screen and (max-width: 660px) {
       .footer-none {
            display: none;
       }
       /* gap: 50px; */
       display: flex;
       justify-content: space-between;
       align-items: start;
       padding: 40px 30px;
    }
`

export const H2 = styled.h2`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 40px;
`