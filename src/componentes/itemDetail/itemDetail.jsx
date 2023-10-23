import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./itemDetail.css"
import Button from 'react-bootstrap/esm/Button'
import Randomusers from '../../randomUsers/randomusers'
import { CarritoContext } from '../../context/context'
import {collection, doc, getDoc, getDocs, getFirestore, Firestore, updateDoc, query} from 'firebase/firestore'
import ItemCount from '../itemCount/itemCount'
import {update, ref} from 'firebase/database'


const ItemDetail = () => {
  const {productId} = useParams()
  const [prod,setProd] = useState({})

  const {quitarDeCarrito, agregarAlCarrito} = useContext(CarritoContext)
  const db = getFirestore();
  const [cantidadAgrega, setCantidadAgrega] = useState('')
  const [estaEdit,setEstaEdit] = useState(false)

  

  const onAdd = (cantidad) => {
    setCantidadAgrega(cantidad)    
    agregarAlCarrito(prod, cantidad)
    editarStock(cantidad)
  }

  const editarStock = async(cantidad) =>{    
    const q = query(collection(db,"Productos"))
    const querySnapshot = await getDocs(q)
    let pID = '';
        querySnapshot.forEach((pr) => {
       
          pID = pr.id;
        });

    const producto = doc(db,"Productos",productId)

    await updateDoc(producto,{
      stock: prod.stock - cantidad
    })
    
  }
  
  console.log(cantidadAgrega)

   useEffect(() =>{
    const collectionPro = collection(db, "Productos")
    const refi = doc(collectionPro,productId)
    getDoc(refi).then((res) => {
    setProd({id:res.id, ...res.data()})
      

   })

    .catch((error) => console.log(error))
    
   },[])
  




  let url;
 
  (prod.categoria === "Remera")?url = `/ProyectoFinalReact_MaximilianoTrochon`:(prod.categoria === "Accesorio")?url = `/ProyectoFinalReact_MaximilianoTrochon/accesorios`:url = `/ProyectoFinalReact_MaximilianoTrochon/calzado`;
  
    return (
        <div className='text-center'>

    <div className='col-6 py-1 mt-3 mx-auto itemdetail'>      
    
      <h1>{prod.categoria} {prod.nombre}</h1>            
      <img src={prod.urlImagen} />
      {(prod.stock<0 && prod != null )?<p style={{color:"red"}}>Sin stock.</p>:<p>Stock: {prod.stock}</p>}      
      <p>Precio: ${prod.precio}</p> 
      { cantidadAgrega === '' ? <ItemCount inicial={1} stock={prod.stock} onAdd={onAdd}/>
      : <Link to="/ProyectoFinalReact_MaximilianoTrochon/cart" className='btn btn-dark'>Ir al Carrito</Link>}
      </div>                    
      <Button className="boton " as={Link} to={url}>Volver</Button>
        <Randomusers/>
    </div>

  )
}

export default ItemDetail