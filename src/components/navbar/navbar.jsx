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
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function Navbar() {
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
            <img src={user} alt="" style={{cursor: "pointer"}} className='navbar-none'/>
            <p className='navbar-none'>En <img src={downArrow} alt="" className='navbar-none'/></p>
            <img src={menu} alt="" className='mobile-menu' onClick={toggleDrawer(true)}/>
            <Drawer open={open} onClose={toggleDrawer(false)}> {DrawerList} </Drawer>
        </div>
    </NavbarContainer>
  )
}

export default Navbar
