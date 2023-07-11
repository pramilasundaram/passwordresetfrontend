import React from 'react';
import "./Footer.css";
import {IoIosArrowUp} from "react-icons/io";
import {Navbar,NavItem,Nav,NavLink,NavbarBrand} from 'reactstrap';
export default function Footer() {
  return (  
  <Navbar  className='navbar fixed-bottom navbar-light' style={{background: "#e3f2fd"}}>
  <NavbarBrand href=""><p className='copyright'>copyright© 2023 Pramila,Villupuram | All rights reserved.</p></NavbarBrand>
  <Nav>  
  <NavItem>
    <NavLink href=""><IoIosArrowUp/></NavLink>
  </NavItem>
  </Nav>
  </Navbar>     
  );
}
