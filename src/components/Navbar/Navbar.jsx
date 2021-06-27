import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useState } from 'react';
//Styled Components
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  Img,
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
} from './Navbar.elements'
//Images
import ClubTimeLogo from '../../images/clubTime.png'


export const Navbar = () => {
  //Mobile mode hamburger menu button functionality
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);

  //Background transparent when scrolled
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Nav navbarSolid={navbar}>
      <NavbarContainer>
        <NavLogo to='/ClubTime'>
          <Img src={ClubTimeLogo} ></Img>
          ClubTime
        </NavLogo>
        <MobileIcon onClick={handleClick}> {/*Toggles between the X and the triple bar icon when clicked*/}
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to='/'>Sign out</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/explore'>Explore</NavLinks>
          </NavItem>

        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar