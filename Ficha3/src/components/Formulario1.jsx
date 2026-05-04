import React, { useState } from 'react';

function Formulario1() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nombre: ${nombre}\nEdad: ${edad}`);
    }   

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="form-label" htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label className="form-label" htmlFor="edad">Edad:</label>
                <input
                    type="number"
                    id="edad"
                    className="form-control"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}

export default Formulario1;