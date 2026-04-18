import React, { useState } from 'react';
import listdata from '../data/listCosasQueNoMeGustan.js';

const ListaConBoton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const cosasQueNoMeGustan = listdata;

  return (
    <div className="container py-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-dark text-white">
          <h2 className="h5 mb-0">Cosas que no me gustan</h2>
        </div>
        <div className="card-body">
          <p className="card-text text-muted mb-3">
            Algunos de mis disgustos en anime, videojuegos, comidas, musica, etc.
          </p>
          <button
            type="button"
            className={`btn mb-3 ${isVisible ? 'btn-danger' : 'btn-success'}`}
            onClick={() => setIsVisible((prev) => !prev)}
          >
            {isVisible ? 'Ocultar lista' : 'Mostrar lista'}
          </button>
          {isVisible && (
            <ul className="list-group list-group-flush">
              {cosasQueNoMeGustan.map((thing) => (
                <li className="list-group-item" key={thing.id}>
                  <strong>{thing.cosa}:</strong> {thing.nombre}
                </li>

              ))}
            </ul>
          )}
        </div>
        <div className="card-footer text-muted small">
          Juan Saldaña
        </div>
      </div>
    </div>
  );
};

export default ListaConBoton;