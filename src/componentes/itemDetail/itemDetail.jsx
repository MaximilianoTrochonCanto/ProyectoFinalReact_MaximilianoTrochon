import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./itemDetail.css"
import Button from 'react-bootstrap/esm/Button'
import Randomusers from '../../randomUsers/randomusers'
import { CarritoContext } from '../../context/context'
import {collection, doc, getDoc,  getFirestore } from 'firebase/firestore'
import ItemCount from '../itemCount/itemCount'



const ItemDetail = () => {
  const {productId} = useParams()
  const [prod,setProd] = useState({})

  const {agregarAlCarrito} = useContext(CarritoContext)
  const db = getFirestore();
  const [cantidadAgrega, setCantidadAgrega] = useState('')
  

  

  const onAdd = (cantidad) => {
    setCantidadAgrega(cantidad)    
    agregarAlCarrito(prod, cantidad)
    
  }

  
  

   useEffect(() =>{
    const collectionPro = collection(db, "Productos")
    const refi = doc(collectionPro,productId)
    getDoc(refi).then((res) => {
    setProd({id:res.id, ...res.data()})
      

   })

    .catch((error) => console.log(error))
    
   },[])
  




  let url;
 
   switch(prod.categoria){
    case "Remera":
      url =  `/`
    break;
    case "Accesorio":
      url = `/accesorios`;
    break;
    case "Calzado":
      url =  `/calzado`;
    break;
    case "Auto":
      url =  `/autos`;
    break;
    case "Moto":
      url =  `/motos`;
    break;
    case "Electrodomestico":
      url =  `/electrodomesticos`;
      break;
    
   }

    return (
        <div className='text-center'>

    <div className='col-6 py-1 mt-3 mx-auto itemdetail'>      
    

    
      <h1>{(prod.categoria!=="Electrodomestico")?prod.categoria:""} {prod.nombre}</h1>            
      <div>
        <img src={prod.urlImagen} />
      </div>
      {(prod.stock<0 && prod != null )?<p style={{color:"red"}}>Sin stock.</p>
      :(cantidadAgrega === '') 
      ?<>
      <p>Stock: {prod.stock}</p> 
      <p>Precio: ${prod.precio}</p> 
      <ItemCount inicial={1} stock={prod.stock} id={prod.id} onAdd={onAdd}/>
      </>
      : 
      <>
      <Link to="/cart" className='btn btn-dark'>Ir al Carrito</Link>      
      </>}
       
      </div>                    
      <Button className="boton " as={Link} to={url}>Volver</Button>
        <Randomusers/>
    </div>

  )
}

export default ItemDetail