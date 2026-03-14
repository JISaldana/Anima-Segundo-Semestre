import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Modal from './Modal';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

  const buscarPersonajes = async () => {
    if (!busqueda.trim()) return;
    setCargando(true);
    setError('');

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`);
      if (!response.ok) {
        throw new Error('No se encontraron personajes con ese nombre');
      }
      const data = await response.json();
      setPersonajes(data.results);
    } catch (err) {
      setPersonajes([]);
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-vh-100 bg-dark text-light" data-bs-theme="dark">
      <div className="container">
        <header className="text-center mb-9">
          <h1 className="display-4 fw-bold text-info">Rick and Morty Finder</h1>
          <p className="lead text-secondary">Busca tus personajes favoritos de la serie</p>
        </header>

        <div className="row justify-content-center mb-5">
          <div className="col-md-6">
            <div className="input-group input-group-lg shadow">
              <input
                type="text"
                className="form-control"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && buscarPersonajes()}
                placeholder="Ej: Rick, Morty, Summer..."
              />
              <button 
                className="btn btn-info px-4" 
                onClick={buscarPersonajes}
                disabled={cargando}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          {cargando && (
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          )}
          
          {error && (
            <div className="alert alert-danger d-inline-block shadow-sm" role="alert">
              {error}
            </div>
          )}
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {personajes.map((personaje) => (
            <div key={personaje.id} className="col">
              <div className="card h-100 border-secondary shadow-sm bg-secondary bg-opacity-10" style={{cursor: 'pointer'}} onClick={() => setPersonajeSeleccionado(personaje)}>
                <img 
                  src={personaje.image} 
                  className="card-img-top" 
                  alt={personaje.name} 
                />
                <div className="card-body">
                  <h5 className="card-title text-info">{personaje.name}</h5>
                  <hr className="text-secondary" />
                  <p className="card-text mb-1">
                    <span className="text-secondary small uppercase">Especie:</span><br />
                    {personaje.species}
                  </p>
                  <p className="card-text">
                    <span className="text-secondary small uppercase">Estado:</span><br />
                    <span className={personaje.status === 'Alive' ? 'text-success' : 'text-danger'}>
                      ● {personaje.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {personajeSeleccionado && <Modal personaje={personajeSeleccionado} onClose={() => setPersonajeSeleccionado(null)} />}
    </div>
  );
}

export default App;

