import React from 'react'
import './item.css'



import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

const Item = (props) => {
  const {id,nombre,precio, urlImagen,categoria,stock} = props.data



  let url;
  
  (categoria === "Remera")?url = `/ProyectoFinalReact_MaximilianoTrochon/${id}`:(categoria === "Accesorio")?url = `/ProyectoFinalReact_MaximilianoTrochon/accesorios/${id}`:url = `/ProyectoFinalReact_MaximilianoTrochon/calzado/${id}`;
  return (

    
    <div className='producto'>
      
      {(stock>0)?<p><img src={urlImagen}/> {categoria}: {nombre} (${precio})<Button as={Link} to={url} params={{producto: props.data}} className='boton botondetalle' variant="primary">Ver detalle</Button></p>:<p ><img src={urlImagen}/> <span className='no-disponible'>{categoria}: {nombre} (no disponible) </span> <Button as={Link} to={url} className='boton botondetalle' variant="primary">Ver detalle</Button></p>}
    
    </div>
    
  )
}

export default Item