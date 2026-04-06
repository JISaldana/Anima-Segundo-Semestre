import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

function ShowHide() {
    const [mostrar, setMostrar] = useState(false);
    const toggleMostrar = () => {
        setMostrar(!mostrar);
    }
    return (
        <div className="container mt-5">
            <button className="btn btn-primary mb-3" onClick={toggleMostrar}>
                {mostrar ? 'Ocultar' : 'Mostrar'}
            </button>
            {mostrar && <p className="text-muted">Texto de prueba</p>}
        </div>
    );
}

export default ShowHide;