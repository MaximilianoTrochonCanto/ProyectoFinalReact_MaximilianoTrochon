import React, { useContext } from 'react'

import Item from '../item/item'
import './itemListContainer.css'
import { CarritoContext } from '../../context/context'



const ItemListContainer = ({categoria,greetings}) => {
      
    const {prods} = useContext(CarritoContext)
    
    
    
    

    const prodsFilter = prods.filter(p => p.categoria === categoria)


    return (
        
        
        <div className='container itemlist'>

        <div className='productos col-10'>
            
            {prodsFilter.map((product) => (
                
                <Item key={product.id} data={product}/>
                
                
                ))}
        </div>
        </div>
            
    )        
    

}

export default ItemListContainer