import React, { useContext } from 'react'
import './cartwidget.css'
import { CarritoContext } from '../../../context/context'

const Cartwidget = () => {

  const {carritoItems} = useContext(CarritoContext)
  console.log(carritoItems)
  return (
      <>
    <div className='notificacion' current-count={Object.values(carritoItems).reduce((a, b) => a + b, 0)}></div>
    <img src="/ProyectoFinalReact_MaximilianoTrochon/imagenes/cart.png" className='cart' alt="" />
      </>
  )
}

export default Cartwidget