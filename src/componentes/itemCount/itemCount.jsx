import React, {useContext, useState} from 'react'
import { Button} from 'react-bootstrap'
import { CarritoContext } from '../../context/context'

const ItemCount = ({stock, id,onAdd,inicial}) => {

const {carritoCantidadProd} = useContext(CarritoContext)

 const [count,setCount] = useState(inicial)

 const sumar = () => {
    console.log(carritoCantidadProd(id))
    if(carritoCantidadProd(id) === undefined) { 
        if(count < stock){
            setCount(count + 1)
        }
    }else{
        if(count < stock - carritoCantidadProd(id)){
            setCount(count + 1)
        }
    }
 }

 const restar = () => {
    if(count > 0){
        setCount(count -1)
    }
 }

  return (
    <div className='d-flex flex-column align-items-center justify-content-between'>
        <div>
            {(stock === 0)
            ?<p style={{color:"red"}}>No hay mas stock</p>            
            :(stock - carritoCantidadProd(id) === 0)
            ?<p>Perdon, acaban de llevarse todo!</p>
            :<div>
                <Button variant='dark' onClick={restar}>-</Button>
                <span className='btn'>{count}</span>
                <Button variant='dark' onClick={sumar}>+</Button>
                <div>
                    <Button className='mt-2' variant='dark' disabled={count === 0} onClick={() => onAdd(count)}>Comprar</Button>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default ItemCount