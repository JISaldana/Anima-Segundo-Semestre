import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Modal({ personaje, onClose }) {
  if (!personaje) return null;

    return (
        <>
            <div className="modal-backdrop show" onClick={onClose}></div>
            <div className="modal show d-block" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title">{personaje.name}</h5>
                            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                        </div>
                        <div className="modal-body text-center">
                            <img src={personaje.image} alt={personaje.name} className="img-fluid rounded mb-3" />
                            <p><strong>Especie:</strong> {personaje.species}</p>
                            <p><strong>Género:</strong> {personaje.gender}</p>
                            <p><strong>Origen:</strong> {personaje.origin.name}</p>
                            <p><strong>Ubicación:</strong> {personaje.location.name}</p>
                            <p><strong>Estado:</strong> <span className={personaje.status === 'Alive' ? 'text-success' : 'text-danger'}>● {personaje.status}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;