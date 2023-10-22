import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productos } from '../../productos/productos'
import "./itemDetail.css"
import Button from 'react-bootstrap/esm/Button'
import Randomusers from '../../randomUsers/randomusers'
import { CarritoContext } from '../../context/context'

const ItemDetail = () => {
  const {productId} = useParams()
  const producto = productos.find(p => p.id == productId)
  const {id,nombre,precio, imagen,categoria,stock} = producto
  const {quitarDeCarrito, agregarAlCarrito,carritoItems} = useContext(CarritoContext)
  let url;
 
  (categoria === "Remera")?url = `/ProyectoFinalReact_MaximilianoTrochon`:(categoria === "Accesorio")?url = `/ProyectoFinalReact_MaximilianoTrochon/accesorios`:url = `/ProyectoFinalReact_MaximilianoTrochon/calzado`;
  console.log(id)

    return (
        <div className='text-center'>

    <div className='col-6 py-1 mt-3 mx-auto itemdetail'>
      <h1>{categoria} {nombre}</h1>            
      <img src={imagen} />
      {(stock>0)?<p>Stock: {stock}</p>:<p style={{color:"red"}}>Sin stock.</p>}
      {console.log(imagen)}
      <p>Precio: ${precio}</p>
    </div>
      {(stock>0)?<Button onClick={() => agregarAlCarrito(id)}>Agregar</Button>:""}
      
      {(carritoItems[id] > 0)?<Button onClick={() => quitarDeCarrito(id)}>Quitar</Button>:""}
       
      <Button className="boton " as={Link} to={url}>Volver</Button>
        <Randomusers/>
    </div>

  )
}

export default ItemDetail