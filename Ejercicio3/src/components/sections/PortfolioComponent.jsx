import React from "react";

const materias = [1, 2, 3, 4, 5, 6];

function PortfolioComponent() {
  return (
    <div className="portfolio-cards 100vh d-flex flex-wrap align-items-center justify-content-center gap-4">
      {materias.map((numero) => (
        <div
          key={numero}
          className="card text-center p-3"
          style={{ minWidth: 140, cursor: "pointer" }}
        >
          <div className="fs-1">📚</div>
          <div className="mt-2">materia {numero}</div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioComponent;
