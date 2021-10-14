import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavMenu.css';
import redLogo from '../../../images/logo2.png';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
     return (
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
               <Container>
               <Navbar.Brand as={NavLink} to="/home">
               <img
               src={redLogo}
               width="160"
               height="40"
               className="d-inline-block align-top"
               alt=""
               />
               
               </Navbar.Brand>
               <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/shipping"><i className="fas fa-cart-plus"></i></Nav.Link>
                    <Nav.Link as={NavLink} style={{color : "#1a1a1b", fontWeight:"600", margin : "0 10px"}}  to="/login">Login</Nav.Link>
                    <Nav.Link as={NavLink} style={{ background: "#F91944" , color : "#FFF", padding : "6px 16px", borderRadius : "25px", marginLeft : "10px"}} className="btn-pro" to="/signup">Sign up</Nav.Link>
               </Nav>
               </Container>
          </Navbar>
     );
};

export default NavMenu;