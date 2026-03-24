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
    <div className="container w-100">
      <div className="row">
        <NavbarComponent />
      </div>
      <div className="row g-0">
      <div className="col-md-2 d-none d-md-block">
       <SidebarComponent />
      </div>
      <div className="col-12 col-md-10">
        <PrincipalContent />
        <FooterComponent />
      </div>
    </div>
  </div>

    
  </StrictMode>,
)
