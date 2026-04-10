import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FooterComponent from './components/layout/FooterComponent.jsx';
import NavbarComponent from './components/layout/NavbarComponent.jsx';

import App from './app.jsx';

const navigateTo = (section) => {
  window.location.hash = section;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container-fluid p-0">

      <div className="row">
        <NavbarComponent onNavigate={navigateTo} />
      </div>

      <App />
      
      <div className="row">
        <FooterComponent />
      </div>

  </div>

    
  </StrictMode>,
)
