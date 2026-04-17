import { useEffect, useState } from "react";
/*Layout*/
import NavbarComponent from "./components/layout/NavbarComponent";
import SidebarComponent from "./components/layout/SidebarComponent";
import PrincipalContent from "./components/layout/PrincipalContent";
import FooterComponent from "./components/layout/FooterComponent";
/*Sections*/
import AboutComponent from "./components/sections/AboutComponent";
import InterestComponent from "./components/sections/InterestComponent";
import SharedComponent from "./components/sections/SharedComponent";
import ProfileComponent from "./components/sections/ProfileComponent";
import PortfolioComponent from "./components/sections/PortfolioComponent";


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

  const renderMainContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileComponent />;
      case "portfolio":
        return <PortfolioComponent />;
      case "about":
        return <AboutComponent />
      case "interest":
        return <InterestComponent />
      case "shared":
        return <SharedComponent />
    case "home":
      return <PrincipalContent />;
      default:
        return <PrincipalContent />;
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <NavbarComponent onNavigate={navigateTo} />
      </div>

      <div className="row">
        <div className="col-md-2 d-none d-md-block bg-dark">
          <SidebarComponent />
        </div>
        <div className="col-12 col-md-10 bg-dark text-white">
          {renderMainContent()}
        </div>
      </div>

      <div className="row">
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;