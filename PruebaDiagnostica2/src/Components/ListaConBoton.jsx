import React, { useState } from 'react';
import listdata from '../Data/listData';

const ListaConBoton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const cosasQueNoMeGustan = listdata;

  return (
    <div className="container rounded">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white bg-opacity-50">
          <h2 className="h5 mb-0 center">Cosas que me gustan</h2>
        </div>
        <div className="card-body bg-white bg-opacity-50">
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
      </div>
    </div>
  );
};

export default ListaConBoton;