import React from 'react';

function MenuComponent({ goTo }) {
  return (
    <ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="navbarDropdown">
      <li>
        <a className="dropdown-item text-white" href="#home" onClick={(e) => goTo(e, 'home')}>
          Inicio
        </a>
      </li>
      <li>
        <a className="dropdown-item text-white" href="#about" onClick={(e) => goTo(e, 'about')}>
          Acerca de
        </a>
      </li>
      <li>
        <a className="dropdown-item text-white" href="#interest" onClick={(e) => goTo(e, 'interest')}>
          Intereses
        </a>
      </li>
      <li>
        <a className="dropdown-item text-white" href="#portfolio" onClick={(e) => goTo(e, 'portfolio')}>
          Portafolio
        </a>
      </li>
      <li>
        <a className="dropdown-item text-white" href="#shared" onClick={(e) => goTo(e, 'shared')}>
          Compartido
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item text-info" href="#profile" onClick={(e) => goTo(e, 'profile')}>
          Perfil -Test-
        </a>
      </li>
      <li>
        <a className="dropdown-item text-info" href="#login" onClick={(e) => goTo(e, 'login')}>
          Iniciar Sesión
        </a>
      </li>
      <li>
        <a className="dropdown-item text-info" href="#register" onClick={(e) => goTo(e, 'register')}>
          Registrarse
        </a>
      </li>
    </ul>
  );
}

export default MenuComponent;
