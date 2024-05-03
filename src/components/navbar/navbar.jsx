import React from 'react'
import { NavbarContainer, NavbarNavigationContianer } from '../../style'
import logo from '../../assets/logo.png'
import downArrow from '../../assets/down-arrow.svg'
import cart from '../../assets/cart.png'
import user from '../../assets/user.svg'
import menu from '../../assets/hamburger-menu.svg'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Signin from '../auth/signin'

import { CheckBox, CreateAccountButton, LoginBox, LoginContainer, LoginInput, LoginLines, SignInButton, SpaceBetweenWrapper } from '../../style'
import socialImgs from '../../assets/login-social.png'

function Navbar() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "50px", fontSize: "20px"}}>
        <Link style={{textDecoration: "none", color: "black"}} to={"/"}><p>Home</p></Link>
        <Link style={{textDecoration: "none", color: "black"}} to={"/motor"}><p>Motor</p></Link>
        <Link style={{textDecoration: "none", color: "black"}} to={"/caravan"}><p>Caravan</p></Link>
        <Link style={{textDecoration: "none", color: "black"}} to={"/tuning"}><p>Tuning</p></Link>
        <Link style={{textDecoration: "none", color: "black"}} to={"/used-car"}><p>Used car</p></Link>
        <Link style={{textDecoration: "none", color: "black"}} to={"/camping-place"}><p>Camping place</p></Link>
      </List>
    </Box>
  );


  return (
    <NavbarContainer>
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <img src={menu} alt="" className='hamburger' onClick={toggleDrawer(true)}/>
            <Drawer open={open} onClose={toggleDrawer(false)}> {DrawerList} </Drawer>
            <Link to={"/"}><img src={logo} alt="" /></Link>
        </div>
        <NavbarNavigationContianer>
            <Link style={{textDecoration: "none"}} to={"/motor"}><p>Motor <img src={downArrow} alt="" /></p></Link>
            <Link style={{textDecoration: "none"}} to={"/caravan"}><p>Caravan <img src={downArrow} alt="" /></p></Link>
            <Link style={{textDecoration: "none"}} to={"/tuning"}><p>Tuning  <img src={downArrow} alt="" /></p></Link>
            <Link style={{textDecoration: "none"}} to={"/used-car"}><p>Used Car <img src={downArrow} alt="" /></p></Link>
            <Link style={{textDecoration: "none"}} to={"/camping-place"}><p>Camping Place</p></Link>
        </NavbarNavigationContianer>
        <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
            <img src={cart} alt="" style={{cursor: "pointer"}}/>
            <img onClick={() => setModalOpen(true)} src={user} alt="" style={{cursor: "pointer"}} className='navbar-none'/>
            <p className='navbar-none'>En <img src={downArrow} alt="" className='navbar-none'/></p>
            <img src={menu} alt="" className='mobile-menu' onClick={toggleDrawer(true)}/>
            <Drawer open={open} onClose={toggleDrawer(false)}> {DrawerList} </Drawer>
        </div>

        <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
            <h2>Sign in</h2>
            <label htmlFor="email" style={{marginTop: "30px"}}>Email</label>
            <LoginInput type='email' id='email' placeholder='Your email'/>

            <label htmlFor="pwd">Password</label>
            <LoginInput type='password' id='pwd' placeholder='Your password'/>

            <SpaceBetweenWrapper>
              <div>
                <CheckBox type='checkbox' id='keep-me'/>
                <label htmlFor='keep-me'>Keep me logged in</label>
              </div>
              <div>
                <p>Forget your password ?</p>
              </div>
            </SpaceBetweenWrapper>

            <SignInButton>sign in</SignInButton>
            <div style={{display: 'flex', justifyContent: 'center', gap: "10px", alignItems: 'center'}}> 
              <LoginLines/>
              <p style={{opacity: "0.7"}}>OR</p>
              <LoginLines/>
            </div>

            <div style={{display: "flex", justifyContent: "center", margin: "20px"}}>
              <img src={socialImgs} alt=""/>
            </div>

            <Link to={"/signup"}>
              <CreateAccountButton>create account</CreateAccountButton>
            </Link>
        </Sheet>
        </Modal>
    </NavbarContainer>
  )
}

export default Navbar
