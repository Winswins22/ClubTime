import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #03001c;
  background-color: grey;
  color: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  margin: 0;
  z-index: 999;
  width: 110%;
  left: 0;
  transition: background-color 0.5s, color 0.5s;
`
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 0;

  ${Container}
`

export const NavLogo = styled(Link)` 
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  line-height: 100%;
  transition: color 0.5s;
  @media screen and (max-width: 650px) {
    font-size: 1.8rem;
    width: 90%;
  }
`

export const Img = styled.img` 
  width: 70px;
  margin-right: 10px;
  height: 80%;
`


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')}; //slides the mobile nav bar over when icon is clicked
    opacity: 1;
    transition: all 0.5s ease;
    background-color: ${({theme}) => theme.bkgColor};
  }
`

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 3px solid #4b59f7;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  transition: color 0.5s;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
  height: 100%;
  
  &:hover {
    color: #4b59f7;
    transition: color 0.5s;
    }
  }
`
