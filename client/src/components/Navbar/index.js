import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink
} from './NavbarElements';
import intellichoice from '../../images/intellihoice-logo-512x512.png';

/* Navbar component */
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={intellichoice} width= "225" alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          {/* Practice and Profile navigation */}
          <NavLink to='/practice' activeStyle>
            Practice
          </NavLink>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          {/* Logout button */}
          <NavBtnLink to='/logout'>
            Quit
          </NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;