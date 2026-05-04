import React from 'react';

function Tarjeta({ titulo, descripcion }) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    );
}

export default Tarjeta;