import React from 'react'
import './item.css'



import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

const Item = (props) => {
  const {id,nombre,precio, urlImagen,categoria,stock} = props.data



  let url;
  

  switch(categoria){
    case "Remera":
      url =  `/${id}`
    break;
    case "Accesorio":
      url = `/accesorios/${id}`;
    break;
    case "Calzado":
      url =  `/calzado/${id}`;
    break;
    case "Auto":
      url =  `/autos/${id}`;
    break;
    case "Moto":
      url =  `/motos/${id}`;
    break;
    case "Heladera":
      url =  `/heladeras/${id}`;
      break;
    case "Televisor":
      url =  `/televisores/${id}`;
    break;
   }

  
  return (

    
    <div className='producto'>
      
      {(stock>0)?<p><img src={urlImagen}/> {categoria}: {nombre} (${precio})<Button as={Link} to={url} params={{producto: props.data}} className='boton botondetalle' variant="primary">Ver detalle</Button></p>:<p ><img src={urlImagen}/> <span className='no-disponible'>{categoria}: {nombre} (no disponible) </span> <Button as={Link} to={url}  className='boton botondetalle' variant="primary">Ver detalle</Button></p>}
    
    </div>
    
  )
}

export default Item