import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Tarjeta = ({ nombre, descripcion, enlace, imagen }) => {
    return (
        <div className="card border border-white" style={{ width: '18rem' }}>
            <img src={imagen} className="card-img-top rounded-circle border border-black" alt={nombre} />
            <div className="card-body bg-white">
                <h5 className="card-title text-dark fw-bold">{nombre}</h5>
                <p className="card-text text-muted">{descripcion}</p>
                <a href={enlace} className="btn btn-primary">Ir al enlace</a>
            </div>
        </div>
    );
}   
export default Tarjeta;