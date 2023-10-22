import React, { useEffect } from 'react'
import { productos } from '../../productos/productos'
import { useState } from 'react'
import Item from '../item/item'
import './itemListContainer.css'
import Button from 'react-bootstrap/Button';
import {Router,Link,Route,Routes} from "react-router-dom"



const ItemListContainer = ({categoria,greetings}) => {
      
    const productosfiltrados = productos.filter(p => p.categoria == categoria)
    return (
        
        <div className='container itemlist'>

        <div className='productos col-10'>
            {productosfiltrados.map((product) => (
                
                <Item key={product.id} data={product}/>
                
                
                ))}
        </div>
        </div>
        
    )        
    

}

export default ItemListContainer