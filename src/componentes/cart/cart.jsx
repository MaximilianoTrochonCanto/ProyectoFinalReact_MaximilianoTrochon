import React, {useContext} from 'react'
import { CarritoContext } from '../../context/context'
import { Link} from 'react-router-dom'
import CartItem from '../cartItem/cartItem'


const Cart = () => {
    const {carritoItems, reintegrarStock, carritoTotal} = useContext(CarritoContext)

    console.log(carritoItems)
    return (
        <div>
            {carritoItems.length
            ? <div className={"producto"}>
                {carritoItems.map((i) => <CartItem  key={i.id} item = {i} />)}
                <p>Total a pagar: ${carritoTotal()}</p>
                <div>
                    <button className='btn btn-danger' onClick={() => reintegrarStock()}>Vaciar Carrito</button>
                    <Link className='btn btn-dark' to="/ProyectoFinalReact_MaximilianoTrochon/checkout" >Terminar compra</Link>
                </div>
            </div>
            :<div className={"producto"}>
                <h3>
                    Tu carrito esta vacio.
                </h3>
                <Link className='btn btn-dark' to="/ProyectoFinalReact_MaximilianoTrochon/">Volver</Link>
            </div>
        }
        </div>
    )
  
}

export default Cart