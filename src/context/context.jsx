import React, { createContext, useEffect, useState } from 'react'
import {collection, doc,  getDocs, getFirestore, updateDoc, query} from 'firebase/firestore'

export const CarritoContext = createContext()





export const ContextProvider = (props) => {

    const db = getFirestore();
  const [carritoItems, setCarritoItems] = useState([])

    const agregarAlCarrito = (prod,cantidad) => {
        if(!estaEnCarrito(prod.id)){
        //prod.stock = prod.stock - cantidad        
        setCarritoItems([...carritoItems, {...prod,cantidad}])    
        }else
        setCarritoItems(carritoItems.map((p) => {
        if(p.id === prod.id)            
            return {...p, cantidad: p.cantidad + cantidad}
           else return p
        }))
    };

    const borrarTodo = () => {        
        setCarritoItems([])
    }

    const reintegrarStock = () => {
        carritoItems.forEach((c) => borrarItem(c.id))
        borrarTodo()
    }

    const estaEnCarrito = (id) =>{
        return carritoItems.some((item) => item.id == id)
    }

    const borrarItem = (id) => {
        let prod = carritoItems.find((item) => item.id === id)  
        let cant = prod.cantidad
        
        setCarritoItems(carritoItems.filter((item) => item.id !== id))
        editarStock(cant,id,prod)
    }

    const editarStock = async(cant,productoId,prod) =>{    
           
        const producto = doc(db,"Productos",productoId)
            
       
        await updateDoc(producto,{
          stock: prod.stock
        })
        
      }

    console.log(carritoItems)


    const carritoCantidad = () => {
        return carritoItems.reduce((acc, item) => acc + item.cantidad, 0)
    }
    
    const carritoTotal = () => {
        return carritoItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }

const contextValues = {carritoItems, reintegrarStock, agregarAlCarrito,  borrarTodo, borrarItem, carritoCantidad, carritoTotal}


  return <CarritoContext.Provider value={contextValues}>{props.children}</CarritoContext.Provider>
}

