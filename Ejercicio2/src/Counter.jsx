import React, { useState } from 'react';

const Counter = ({ name, value, setValue, globalStep, isGlobalStepActive }) => {
  const [step, setStep] = useState(1);

  const currentStep = isGlobalStepActive ? globalStep : step;

  const handleIncrement = () => {
    setValue(prev => Math.min(prev + currentStep, 50));
  };

  const handleDecrement = () => {
    setValue(prev => Math.max(prev - currentStep, -50));
  };

  const handleStepChange = (e) => {
    const newStep = Math.max(1, Math.min(10, parseInt(e.target.value) || 1));
    setStep(newStep);
  };

  const handleReset = () => {
    setValue(0);
    setStep(1);
  };

  const isEven = value % 2 === 0;

  const canIncrement = value < 50;
  const canDecrement = value > -50;

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <button className="btn btn-secondary me-2" onClick={handleDecrement} disabled={!canDecrement}>-</button>
          <span className="h4 mb-0 mx-3">{value}</span>
          <button className="btn btn-secondary ms-2" onClick={handleIncrement} disabled={!canIncrement}>+</button>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Paso: 
            <input 
              type="number" 
              className="form-control d-inline-block w-auto ms-2"
              min="1" 
              max="10" 
              value={isGlobalStepActive ? globalStep : step} 
              onChange={handleStepChange} 
              disabled={isGlobalStepActive}
            />
          </label>
        </div>
        <div className="mb-3">
          <p className="mb-0">El valor es: <strong>{isEven ? 'Par' : 'Impar'}</strong></p>
        </div>
        <button className="btn btn-warning" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;