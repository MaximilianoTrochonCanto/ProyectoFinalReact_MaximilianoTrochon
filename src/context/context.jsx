import React, { createContext, useState } from 'react'
import { productos } from '../productos/productos';

export const CarritoContext = createContext(null)


const getDefaultCarrito = () => {
    let carrito = {}
    for (let i = 1; i < productos.length; i++){
        carrito[i] = 0;
    }
    return carrito
};



export const ContextProvider = (props) => {

  const [carritoItems, setCarritoItems] = useState(getDefaultCarrito())

    const agregarAlCarrito = (itemId) => {
        setCarritoItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
        productos.find(p => p.id == itemId).stock--;
    };
    const quitarDeCarrito = (itemId) => {
        setCarritoItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
        productos.find(p => p.id == itemId).stock++;
    };

const contextValues = {carritoItems, agregarAlCarrito, quitarDeCarrito}

    console.log(carritoItems)

  return <CarritoContext.Provider value={contextValues}>{props.children}</CarritoContext.Provider>
}

