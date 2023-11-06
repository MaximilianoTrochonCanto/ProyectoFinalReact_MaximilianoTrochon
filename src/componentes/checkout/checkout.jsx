import { collection, getFirestore, serverTimestamp , addDoc} from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CarritoContext } from '../../context/context';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Checkout = () => {

    const db = getFirestore();

    const [usuario,setUsuario] = useState({})
    const [validarMail,setValidarMail] = useState('')
    const [orderId,setOrderId] = useState('')
    const {carritoItems,carritoTotal, reintegrarStock, borrarTodo } = useContext(CarritoContext)

    const datosComprador = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) => {

        


        e.preventDefault()
        let orden = {
            usuario,
            item:carritoItems,
            total: carritoTotal(),
            fecha:serverTimestamp()
        }        
        const ventas = collection(db, "Ordenes")
        addDoc(ventas,orden).then((res) => { 
            setOrderId(res.id)
            borrarTodo();
            reintegrarStock();
        })
        .catch((error) => console.log(error))
    }

  return (
    <div>
        {orderId !== ''
        ?<div className='container-fluid text-center'>
            <h2>Felicitaciones! Tu orden fue generada con exito.
            Su id de compra es: {orderId}</h2>
            <Button className="btn btn-primary" as={Link} to="/">Volver</Button>
        </div>
        :<div className='formulario'>
        <h3>Llená tus datos por favor.</h3>
        <form onSubmit={finalizarCompra}>
            <div className='mb-3'>
                <label className='form-label'>Nombre completo:</label>
                <input type='text' onChange={datosComprador} className='form-control' placeholder='Nombre y apellido' name='name'></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Teléfono:</label>
                <input type='numbre' onChange={datosComprador} className='form-control' placeholder='Celular o fijo' name='telefono'></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>E-mail:</label>
                <input type='text' onChange={datosComprador} className='form-control' placeholder='Correo electrónico' name='email'></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Repita su E-mail:</label>
                <input type='text' onChange={((e) => setValidarMail(e.target.value))} className='form-control' placeholder='Correo electrónico' name='email'></input>
            </div>
            <button className='btn btn-dark' disabled={validarMail != usuario.email || usuario.name === null || usuario.telefono === 0} type='submit'>Generar orden</button>
        </form>
    </div>}

    
    </div>
  )
}

export default Checkout