import React from 'react'
import './navbar.css'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,NewItem
} from './NavbarElements';
import image from "../../images/logo2.png"

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavLink to='/'>
        <img style={{height:"130px",marginTop:"10px",marginLeft:"30px"}} src={image} alt='logo' />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to='/about' activeStyle>
          Rent
        </NavLink>
        <NavLink to='/services' activeStyle>
          Buy
        </NavLink>
        <NavLink to='/contact-us' activeStyle>
          Pay Rent
        </NavLink>
        <NewItem to='/contact-us' activeStyle>
          Add Property<sup style={{    marginBottom: "20px", marginLeft: "5px"}}><span style={{border :"1px solid red",fontSize:"15px" ,color:"red",borderRadius:"5px",marginBottom:"10px"}}>New</span></sup>
        </NewItem>
        <NavLink to='/shortlist' activeStyle>
          Favourites
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  </>
  )
}

export default Navbar
