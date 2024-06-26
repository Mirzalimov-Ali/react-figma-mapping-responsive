import styled from "styled-components";
import headerImg from './assets/header-img.png'
import caravanImg from './assets/caravan-header-6.webp'
import tuningImg from './assets/tuning-header-5.jpg'
import usedImg from './assets/used-header.jpg'

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    padding: 0 70px;
    position: fixed;
    top: 0;
    min-width: 100vw;
    max-width: 100vw;
    background-color: #fff;
    z-index: 1001;
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
        &:hover {
            color: blue;
        }
    }
    @media only screen and (max-width: 1300px) {
        display: none;
    }
`

export const NavbarMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 50px 40px;
    font-weight: 600;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const HeaderContainer = styled.div`
    background-image: url(${(props) => props.$header ? headerImg : caravanImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 100px;
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    color: white;
`

export const HeaderContainer2 = styled.div`
    background-image: url(${(props) => props.$header? tuningImg : usedImg});
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
export const HeaderSmallText = styled.p`
    font-size: 27px;
    font-weight: 700;
    @media only screen and (max-width: 300px) {
        font-size: 23px;
    }
`

export const HeaderBigText = styled.p`
    font-size: 80px;
    font-weight: 700;
    @media only screen and (max-width: 350px) {
        font-size: 60px;
    }
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
    /* margin-top: -20px; */
    margin-top: ${(props) => props.$mobileFlexMenu ? "0" : "-20px"};
    @media only screen and (max-width: 1407px) {
        display: ${(props) => props.$mobileFlexMenu ? "flex" : "none"};
        padding: 10px 30px;
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
    padding: 0 10px;
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
    cursor: pointer;
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
    display: none;
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
    min-width: 1100px;
    /* min-width: 1100px; */
    @media only screen and (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
        min-width: auto;
        flex: 1;
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
        max-width: 440px;
        margin: auto;
        .none {
            display: none;
        }
    }
    @media only screen and (max-width: 451px) {
        max-width: 400px;
    }
    @media only screen and (max-width: 404px) {
        max-width: 270px;
    }
`

export const HomeRightTopLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .mobile-none-button {
        display: none;
    }
    @media only screen and (max-width: 1406px) {
        .mobile-none-button {
            display: flex;
        }
    }
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
    @media only screen and (max-width: 404px) {
        max-width: 100%;
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
    @media only screen and (max-width: 404px) {
        width: ${(props) => props.$short ? "30px" : "80px"};
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    padding: 10px 30px;
    border-radius: 20px;
    width: 100%;
    height: 285px;
    transition: 0.3s;
    @media only screen and (max-width: 420px) {
        width: 80%;
        margin: auto;
    }
    &:hover {
        background-color: #F0F0F0;
        transform: scale(1.05);
        transition: 0.5s ease;
        cursor: pointer;
    }
   
`

export const CardBottom = styled.div`
    flex: 1;
`

export const CardImg = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    img {
        max-width: 600px;
        /* min-height: 100px;
        max-height: 100px; */
        height: 120px;
    }
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
    @media only screen and (max-width: 500px) {
        font-size: ${(props) => props.$price ? "13px" : ""};
    }
`

export const LongLine = styled.div`
    width: 100%;
    margin-top: 10px;
    height: 1px;
    background: rgba(55, 55, 55, 0.50);
    @media only screen and (max-width: 1300px) {
        width: 100%;
        display: flex;
        margin: 10px auto;
    }
    @media only screen and (max-width: 660px) {
        width: 100vw;
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
    &:hover {
        background-color: #006DAB;
        color: white;
    }
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
       gap: 0;
       display: flex;
       justify-content: space-between;
       padding: 40px 80px;
    }
    @media only screen and (max-width: 660px) {
       .footer-none {
            display: none;
       }
       display: flex;
       justify-content: space-between;
       align-items: start;
       padding: 40px 20px;
       gap: 0;
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

export const BigWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

// login & signup
export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
	height: 100vh;
    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

`

export const LoginBox = styled.div`
    /* height: 600px; */
    height: ${(props) => props.$short ? "470px" : "600px"};
    width: 500px;
    border-radius: 20px;
    /* box-shadow: 0 0 5px 0; */
    box-shadow: 0 0 3px -1px;
    background: white;
    padding: 30px;
    h2 {
        font-weight: 700;
        font-size: 27px;
        margin-bottom: 20px;
    }
`

export const LoginInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 20px;
    border: none;
    border-radius: 10px;
    background: #3737371A;
    margin: 10px 0;
    &:focus {
        outline: none;
    }
`

export const SpaceBetweenWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 0 10px;
    div {
        display: flex;
        align-items: center;
        gap: 7px;
        label {
            font-size: 14px;
            cursor: pointer;
        }
        p {
            font-size: 14px;
            cursor: pointer;
        }
    }
`

export const CheckBox = styled.input`
    height: 20px;
    width: 20px;
    background: #3737371A;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const CheckBox2 = styled.input`
    height: 20px;
    width: 20px;
    background: #3737371A;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const SignInButton = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    background: #006DAB;
    border-radius: 10px;
    margin: 15px 0;
    color: white;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
`

export const LoginLines = styled.div`
    border: 1px solid #37373726;
    width: 100px;
`

export const CreateAccountButton = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    background: none;
    border: 2px solid #006DAB;
    border-radius: 10px;
    margin: 15px 0;
    color: #006DAB;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background: #006DAB;
        color: white;
    }
`