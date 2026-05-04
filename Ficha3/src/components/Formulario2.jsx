import React, { useState } from 'react';
import Tarjeta from './Tarjeta';

function Formulario2() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMostrarTarjeta(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        className="form-control"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>  
                <div>
                    <label className="form-label" htmlFor="descripcion">Descripción:</label>
                    <input
                        type="text"
                        id="descripcion"
                        className="form-control"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>  
                <br />
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            {mostrarTarjeta && <Tarjeta titulo={titulo} descripcion={descripcion} />}
        </div>
    );
}

export default Formulario2;