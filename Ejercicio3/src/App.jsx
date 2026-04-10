import { useEffect, useState } from "react";
import SidebarComponent from "./components/layout/SidebarComponent";
import PrincipalContent from "./components/layout/PrincipalContent";
import ProfileComponent from "./components/sections/ProfileComponent";

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

  if (activeSection === "profile") {
    return (
      <div className="row">
        <div className="col-12 bg-dark text-white">
          <ProfileComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-md-2 d-none d-md-block bg-dark">
        <SidebarComponent />
      </div>
      <div className="col-12 col-md-10 bg-dark text-white">
        <PrincipalContent />
      </div>
    </div>
  );
}

export default App;