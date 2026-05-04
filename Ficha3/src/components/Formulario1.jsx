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
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="edad">Edad:</label>
                <input
                    type="number"
                    id="edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario1;