import React, { useEffect, useState } from 'react'
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'

import Item from '../item/item'
import './itemListContainer.css'



const ItemListContainer = ({categoria,greetings}) => {
      
    const [prods,setProds] = useState([])
    const db = getFirestore();
    //const productosfiltrados = ProductosFirebase().filter(p => p.categoria == categoria)
    
    useEffect(() =>{
        const pCollection = collection(db, "Productos")
        getDocs(pCollection).then((snapshot) => {          
            setProds(snapshot.docs.map((doc) =>({ id: doc.id, ...doc.data() })))                        
        })
        


    },[])

    const prodsFilter = prods.filter(p => p.categoria == categoria)


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