import React, { createContext, useEffect, useState } from 'react'
import { doc,  getFirestore, updateDoc, collection, getDocs } from 'firebase/firestore'

export const CarritoContext = createContext()





export const ContextProvider = (props) => {

    
    const db = getFirestore();
    const carritoAlmacenado = JSON.parse(localStorage.getItem("carrito")) || []
    
        
    
  const [carritoItems, setCarritoItems] = useState(carritoAlmacenado)
  const [prods,setProds] = useState([])

  useEffect(() =>{
    const pCollection = collection(db, "Productos")
    getDocs(pCollection).then((snapshot) => {          
        setProds(snapshot.docs.map((doc) =>({ id: doc.id, ...doc.data() })))                        
    })},[])

    useEffect(() => {
        localStorage.setItem("carrito",JSON.stringify(carritoItems))
    },[carritoItems])

    const agregarAlCarrito = (prod,cantidad) => {
        (!estaEnCarrito(prod.id))               
        ?setCarritoItems([...carritoItems, {...prod,cantidad}])            
        :setCarritoItems(carritoItems.map((p) => {
        return(p.id === prod.id)?{...p, cantidad: p.cantidad + cantidad}:p
        }))
    };

    const borrarTodo = () => {        
        setCarritoItems([])
    }

    const reintegrarStock = () => {
        carritoItems.forEach((c) => editarStock(c.id,c.cantidad,carritoItems.find((i) => i.id === c.id)))
        borrarTodo()
    }

    

    const estaEnCarrito = (id) =>{
        return carritoItems.some((item) => item.id === id)
    }

    const borrarItem = (id) => {
                        
        setCarritoItems(carritoItems.filter((item) => item.id !== id))
        
    }

    const editarStock = async(productoId,cant,prod) =>{    
           
        const producto = doc(db,"Productos",productoId)
            
       if(prods.some((p) => p.id === producto.id))
        await updateDoc(producto,{
          stock: prod.stock - cant
        })
        
    }

    
    const carritoCantidadProd = (id) => {
        
        const p = carritoItems.find((c) => c.id === id)
        return (p!==undefined)? p.cantidad : 0;
    } 

    const carritoCantidad = () => {
        
        return carritoItems.reduce((acc, item) => acc + item.cantidad, 0)
    }
    
    const carritoTotal = () => {
        return carritoItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }

const contextValues = {carritoItems, prods, carritoCantidadProd, reintegrarStock, agregarAlCarrito,  borrarTodo, borrarItem, carritoCantidad, carritoTotal}


  return <CarritoContext.Provider value={contextValues}>{props.children}</CarritoContext.Provider>
}

