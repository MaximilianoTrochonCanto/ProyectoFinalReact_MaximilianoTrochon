import React, { useContext } from 'react'
import './cartwidget.css'
import { CarritoContext } from '../../../context/context'
import { Link } from 'react-router-dom'

const Cartwidget = () => {

  const {carritoCantidad} = useContext(CarritoContext)
  
  return (
      <>
    {(carritoCantidad()>0 && <div className='notificacion' current-count={carritoCantidad()}></div>)}
    
      <Link to="/cart">
      <img className='cart' src="/ProyectoFinalReact_MaximilianoTrochon/imagenes/cart.png"  alt="" />
      </Link>
      
    
      </>
  )
}

export default Cartwidget