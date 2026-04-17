import React from 'react';
import listdata from '../data/listData.js';

const Listas = () => {
  const cosasQueMeGustan = listdata;

  return (
    <div className="container py-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-dark text-white">
          <h2 className="h5 mb-0">Cosas que me gustan</h2>
        </div>
        <div className="card-body">
          <p className="card-text text-muted mb-3">
            Algunos de mis gustos en anime, videojuegos, comidas, musica, etc.
          </p>
          <ul className="list-group list-group-flush">
            {cosasQueMeGustan.map((cosa, index) => (
              <li key={index} className="list-group-item">
                {cosa}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer text-muted small">
          Juan Saldaña
        </div>
      </div>
    </div>
  );
};

export default Listas;