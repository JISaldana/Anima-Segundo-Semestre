import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [globalStep, setGlobalStep] = useState(1);
  const [isGlobalStepActive, setIsGlobalStepActive] = useState(false);

  const handleResetBoth = () => {
    setValueA(0);
    setValueB(0);
  };

  const handleGlobalStepChange = (e) => {
    const newStep = Math.max(1, Math.min(10, parseInt(e.target.value) || 1));
    setGlobalStep(newStep);
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">Contadores</h1>
      <div className="alert alert-info text-center">
        <strong>Resumen: A: {valueA} • B: {valueB}</strong>
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">
              Paso global: 
              <input 
                type="number" 
                className="form-control d-inline-block w-auto ms-2"
                min="1" 
                max="10" 
                value={globalStep} 
                onChange={handleGlobalStepChange} 
              />
              <div className="form-check form-check-inline ms-2">
                <input 
                  className="form-check-input"
                  type="checkbox" 
                  checked={isGlobalStepActive} 
                  onChange={(e) => setIsGlobalStepActive(e.target.checked)} 
                />
                <label className="form-check-label">
                  Activar paso global
                </label>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="text-center mb-4">
        <button className="btn btn-danger" onClick={handleResetBoth}>Resetear ambos</button>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Counter 
            name="Contador A" 
            value={valueA} 
            setValue={setValueA} 
            globalStep={globalStep} 
            isGlobalStepActive={isGlobalStepActive} 
          />
        </div>
        <div className="col-md-6">
          <Counter 
            name="Contador B" 
            value={valueB} 
            setValue={setValueB} 
            globalStep={globalStep} 
            isGlobalStepActive={isGlobalStepActive} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;