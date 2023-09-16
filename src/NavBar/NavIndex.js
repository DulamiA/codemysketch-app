import React from 'react'
import { Nav, NavLink, Bars, NavMenue, NavBtn, NavBtnLink, NavLinkLogIn, NavLogoLink } from './NavBarElements'
import NavLogo from './NavLogo.svg';

function NavBar() {
  return (
    <>
      <Nav>
        <NavLogoLink to="/">
            <img 
              src={NavLogo} 
              className='nav-logo' 
              alt='navLogo'
            />
        </NavLogoLink>
        <Bars />
        <NavMenue>
            <NavLink to="/letsCode" activeStyle>
                Let's Code
            </NavLink>
            <NavLink to="/howItWorks" activeStyle>
                How it Works
            </NavLink>
            <NavLink to="/aboutUs" activeStyle>
                About Us
            </NavLink>
            <NavLink to="/pricing" activeStyle>
                Pricing
            </NavLink>
        </NavMenue>
        <NavBtn>
            <NavLinkLogIn to="/logIn" activeStyle>Log In</NavLinkLogIn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default NavBar
