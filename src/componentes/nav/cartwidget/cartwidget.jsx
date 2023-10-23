import React, { useContext } from 'react'
import './cartwidget.css'
import { CarritoContext } from '../../../context/context'

import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cartwidget = () => {

  const {carritoItems, carritoCantidad} = useContext(CarritoContext)
  
  return (
      <>
    {(carritoCantidad()>0 && <div className='notificacion' current-count={carritoCantidad()}></div>)}
    
      <Link to="/ProyectoFinalReact_MaximilianoTrochon/cart">
      <img className='cart' src="/ProyectoFinalReact_MaximilianoTrochon/imagenes/cart.png"  alt="" />
      </Link>
      
    
      </>
  )
}

export default Cartwidget