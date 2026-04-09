import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CalculadoraDeFunciones = () => {
  const [x, setX] = useState('');

  const maquina = (valor) => {
    if (valor === '') return '';
    return 2 * valor + 3;
  };

return (
    <div className="container mt-5">
      <div className="card border-primary" style={{ maxWidth: '400px' }}>
        <div className="card-header bg-primary text-white">
          Calculadora f(x) = 2x + 3
        </div>
        <div className="card-body">
          <label className="form-label">Introduce un número (positivo o negativo):</label>
          <input
            type="number"
            className="form-control"
            value={x}
            onChange={(e) => setX(e.target.value)}
            placeholder="Numero"
          />
          
          <div className="mt-4 p-3 bg-light border rounded text-center">
            <h4 className="mb-0">
              Resultado: <span className="text-success">{maquina(x)}</span>
            </h4>
          </div>
          
          <div className="form-text mt-2">
            Puedes escribir numeros negativos y decimales.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraDeFunciones;