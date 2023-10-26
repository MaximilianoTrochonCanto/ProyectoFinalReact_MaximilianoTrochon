import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../cartwidget/cartwidget';
import {BrowserRouter as Router,Link,Route,Routes} from "react-router-dom"
import './navbar.css'

import { NavDropdown, NavLink } from 'react-bootstrap';



export const NavbarBootstrap = ({carrito}) => {

    

    return (
        //<Router>
        <>
    <Navbar bg="dark" data-bs-theme="dark" className="Navbar col-12">
    <Container>
      <Navbar.Brand>Ventasmania</Navbar.Brand>
      <Nav className="me-auto linksmenu">
        <NavDropdown title="Ropa">
          <NavDropdown.Item as={Link} to="/">Remeras</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/calzado">Calzado</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/accesorios">Accesorios</NavDropdown.Item>        
        </NavDropdown>
        <NavDropdown title="Vehículos">
          <NavDropdown.Item as={Link} to="/motos">Motos</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/autos">Autos</NavDropdown.Item>
          
        </NavDropdown>
        <NavLink as={Link} to="/electrodomesticos">Electrodomesticos</NavLink>        
      </Nav>     
              
        <Cartwidget  />                                       
      
    </Container>
  </Navbar>
  <div>
       
  </div>
  </>
    //</Router>

      
  )
}

