import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MenuComponent from '../ui/menuComponent';

function NavbarComponent({ onNavigate }) {
  const goTo = (event, section) => {
    event.preventDefault();
    if (typeof onNavigate === 'function') {
      onNavigate(section);
    } else {
      window.location.hash = section;
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark" style={{ position: 'sticky', top: 0, zIndex: 1030 }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white ms-2" href="#" onClick={(e) => goTo(e, 'home')}>
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
            Menú
          </button>
          <MenuComponent goTo={goTo} />
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
