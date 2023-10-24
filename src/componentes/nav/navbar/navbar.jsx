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
      <Nav className="me-auto">
        <NavDropdown title="Ropa">
          <NavDropdown.Item as={Link} to="/ProyectoFinalReact_MaximilianoTrochon/remeras">Remeras</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/ProyectoFinalReact_MaximilianoTrochon/calzado">Calzado</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/ProyectoFinalReact_MaximilianoTrochon/accesorios">Accesorios</NavDropdown.Item>        
        </NavDropdown>
        <NavDropdown title="Vehículos">
          <NavDropdown.Item as={Link} to="/ProyectoFinalReact_MaximilianoTrochon/motos">Motos</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/ProyectoFinalReact_MaximilianoTrochon/autos">Autos</NavDropdown.Item>
          
        </NavDropdown>
        <NavDropdown title="Electrodomésticos">
          <NavDropdown.Item as={Link} to="/ProyectoFinalReact_MaximilianoTrochon/televisores">Televisores</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/ProyectoFinalReact_MaximilianoTrochon/heladeras">Heladeras</NavDropdown.Item>
          
        </NavDropdown>
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

