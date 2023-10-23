import React , {useContext} from 'react'
import { Button } from 'react-bootstrap'
import { CarritoContext } from '../../context/context'



const CartItem = ({item}) => {

    const {borrarItem} = useContext(CarritoContext)

    return (
    <div className='d-flex justify-content-around align-items-center'>
        <img src={item.urlImagen} alt={item.nombre} width={'150rem'}></img>
        <p>{item.categoria}: {item.nombre}</p>
        <p>${item.precio }</p>
        <p>Cantidad: {item.cantidad }</p>
        <p>Subtotal ${item.cantidad * item.precio}</p>
        <Button className="btn btn-danger" onClick={() => borrarItem(item.id)}> Eliminar </Button>
    </div> 
  )
}

export default CartItem