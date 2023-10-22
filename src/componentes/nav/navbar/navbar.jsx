import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../cartwidget/cartwidget';
import {BrowserRouter as Router,Link,Route,Routes} from "react-router-dom"
import './navbar.css'
import { Accesorios } from '../../../paginas/Accesorios';
import { Remeras } from '../../../paginas/Remeras';
import { Calzado } from '../../../paginas/Calzado';



export const NavbarBootstrap = ({carrito}) => {

    

    return (
        //<Router>
        <>
    <Navbar bg="dark" data-bs-theme="dark" className="Navbar col-12">
    <Container>
      <Navbar.Brand>Ventasmania</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/ProyectoFinalReact-MaximilianoTrochon/remeras">Remeras</Nav.Link>
        <Nav.Link as={Link} to="/ProyectoFinalReact-MaximilianoTrochon/calzado">Calzado</Nav.Link>
        <Nav.Link as={Link} to="/ProyectoFinalReact-MaximilianoTrochon/accesorios">Accesorios</Nav.Link>
      </Nav>
            <Cartwidget/>                                
    </Container>
  </Navbar>
  <div>
       
  </div>
  </>
    //</Router>

      
  )
}

