import React, { useEffect, useState } from 'react'
import './randomusers.css'



const Randomusers = () => {     
    
    const [users,setUsers] =useState([])
    const urlApi = 'https://randomuser.me/api/?results=3'

   
    
   useEffect(() =>{
    fetch(`${urlApi}`).then(
        res => res.json()
    ).then(
        data => {
            setUsers(data.results)            
        }
    )
   },[])
    
    return(
        <div >
            <h2>Comentarios</h2>
            {(typeof users === "undefined")?(
                <p>Cargando...</p>
            ):
             
            <div className='container'>
                {
                    users.map((u,index )=> {
                        return(
                            <div key={index} className='randomusers col-6'>
                            <div >
                            <p style={{fontWeight:"bold"}}>{u.name.first} {u.name.last}</p>
                            <img src={u.picture.medium}></img>
                            </div>
                            <div className='col-6'>
                                {
                                (index === 0 )? <p>Me interesa</p>:(index === 1)?<p>Hola que tal buenas noches. Sigue disponible?</p>:<p>Ofrecen envios?</p>
                                }
                            </div>
                            </div>
                        )
                    })
                }
                
            </div>
            }
   
        </div>
    )
}

export default Randomusers