import React from 'react';

const Listas = () => {
  const cosasQueMeGustan = [
    "Gurren Lagann",
    "Monster Hunter",
    "Hamburguesas",
    "Tetsuya Nomura",
    "Hiroyuki Sawano"
  ];

  return (
    <div>
      <h2>Las cosas que me gustan:</h2>
      <ul>
        {cosasQueMeGustan.map((cosa, index) => (
          <li key={index}>{cosa}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listas;