import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Tarjeta = ({ nombre, descripcion, enlace, imagen }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={imagen} className="card-img-top rounded-circle border border-black" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <a href={enlace} className="btn btn-primary">Ir al enlace</a>
            </div>
        </div>
    );
}   
export default Tarjeta;