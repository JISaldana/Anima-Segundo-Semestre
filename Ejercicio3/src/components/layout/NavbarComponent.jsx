import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function NavbarComponent() {
  return (
    <nav className="navbar navbar-dark bg-dark" style={{ position: 'sticky', top: 0, zIndex: 1030 }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white ms-2" href="#">
          <strong>🔵 Navbar Test</strong>
        </a>
        
        <div className="dropdown me-3">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            id="navbarDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-white" href="#home">Inicio</a></li>
            <li><a className="dropdown-item text-white" href="#about">Acerca de</a></li>
            <li><a className="dropdown-item text-white" href="#interest">Intereses</a></li>
            <li><a className="dropdown-item text-white" href="#SharedComponent">Compartido</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item text-info" href="#profile">Perfil -Test-</a></li>
            <li><a className="dropdown-item text-info" href="#login">Iniciar Sesión</a></li>
            <li><a className="dropdown-item text-info" href="#register">Registrarse</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
