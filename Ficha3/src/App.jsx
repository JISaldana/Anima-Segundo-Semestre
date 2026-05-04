import { useState } from 'react'
import Formulario1 from './components/Formulario1'
import Formulario2 from './components/Formulario2'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mostrarFormulario1, setMostrarFormulario1] = useState(true);

  const toggleFormulario = () => {
    setMostrarFormulario1(!mostrarFormulario1);
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                {mostrarFormulario1 ? 'Formulario 1' : 'Formulario 2'}
              </h2>
              {mostrarFormulario1 ? <Formulario1 /> : <Formulario2 />}
              <button className="btn btn-secondary w-100 mt-4" onClick={toggleFormulario}>
                {mostrarFormulario1 ? 'Ir a Formulario 2' : 'Ir a Formulario 1'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
