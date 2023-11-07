import React, { useEffect, useState } from 'react';
import './randomusers.css';

const Randomusers = () => {     
    const [users, setUsers] = useState([]);
    const urlApi = 'https://randomuser.me/api/?results=3';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlApi);
                if (!response.ok) {
                    throw new Error('Error en la red');
                }
                const data = await response.json();
                setUsers(data.results);
            } catch (error) {
                console.error('Se produjo un error:', error);
                
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Comentarios</h2>
            {(users.length === 0) ? (
                <p>Cargando...</p>
            ) : (
                <div className='container'>
                    {users.map((u, index) => (
                        <div key={index} className='randomusers col-6'>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>{u.name.first} {u.name.last}</p>
                                <img src={u.picture.medium} alt="User" />
                            </div>
                            <div className='col-6'>
                                {(index === 0) ? <p>Me interesa</p> : (index === 1) ? <p>Hola que tal buenas noches. Sigue disponible?</p> : <p>Ofrecen envios?</p>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Randomusers;