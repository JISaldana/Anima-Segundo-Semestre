import { useEffect, useState } from "react";
import NavbarComponent from "./components/layout/NavbarComponent";
import SidebarComponent from "./components/layout/SidebarComponent";
import PrincipalContent from "./components/layout/PrincipalContent";
import ProfileComponent from "./components/sections/ProfileComponent";
import FooterComponent from "./components/layout/FooterComponent";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateSection = () => {
      const hash = window.location.hash || "#home";
      setActiveSection(hash.replace("#", "") || "home");
    };

    updateSection();
    window.addEventListener("hashchange", updateSection);
    return () => window.removeEventListener("hashchange", updateSection);
  }, []);

  const navigateTo = (section) => {
    window.location.hash = section;
  };

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <NavbarComponent onNavigate={navigateTo} />
      </div>

      {activeSection === "profile" ? (
        <div className="row">
          <div className="col-12 bg-dark text-white">
            <ProfileComponent />
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-2 d-none d-md-block bg-dark">
            <SidebarComponent />
          </div>
          <div className="col-12 col-md-10 bg-dark text-white">
            <PrincipalContent />
          </div>
        </div>
      )}

      <div className="row">
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;