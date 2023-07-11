import React, { useContext, useState } from 'react';
import "./Header.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,Button
} from 'reactstrap';

import { useNavigate } from 'react-router-dom';
import { userData } from '../../Provider';
export default function Header(args) {
  const image=require("../../assests/icon.png")
  const nav=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
const {isAuthenticated,setIsAuthenticated}=useContext(userData)
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    {!(isAuthenticated) ? 
    <Navbar {...args} className='navbar navbar-expand-md my-2' color="dark"
    dark>
    <NavbarBrand href="/"> <img src={image} className="logo" alt=""/>SENDER</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav >
        <NavItem>
          <NavLink  className="navlink" href="/">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  className="navlink" href="/register">
            Register
          </NavLink>
        </NavItem>            
      </Nav>
     </Collapse>
  </Navbar> :<Navbar {...args} className='navbar navbar-expand-md navbar-light' style={{background: "#e3f2fd"}}>
  <NavbarBrand href="/"><img src={image} className="logo" alt=""/></NavbarBrand>  
    <Nav >
      <NavItem>
        <NavLink href=""><Button onClick={()=>{setIsAuthenticated(false);
        nav("/")}}>Logout</Button></NavLink>
      </NavItem>                 
    </Nav>   
</Navbar>} 
  </div>  
  );
}

