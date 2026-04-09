import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SidebarComponent from './components/layout/SidebarComponent.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FooterComponent from './components/layout/FooterComponent.jsx';
import NavbarComponent from './components/layout/NavbarComponent.jsx';
import PrincipalContent from './components/layout/PrincipalContent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container-fluid p-0">

      <div className="row">
        <NavbarComponent />
      </div>
      <div className="row">
      <div className="col-md-2 d-none d-md-block bg-dark">
       <SidebarComponent />
      </div>
      <div className="col-12 col-md-10 bg-dark text-white">
        <PrincipalContent />
      </div>
      </div>
      <div className="row">
        <FooterComponent />
      </div>

  </div>

    
  </StrictMode>,
)
