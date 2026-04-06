import { useState } from 'react'
import profilePic from './assets/profilePic.jpg'
import Tarjeta from './components/tarjeta';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center">
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="text-white fw-bold mb-4">Tarjeta de Estudiante</h1>
          <Tarjeta
            nombre="Juan Saldaña"
            descripcion="Soy un estudiante con muchas ganas de aprender. Me gustan los juegos de rol y los videojuegos."
            enlace="https://github.com/JISaldana"
            imagen={profilePic}
          />
        </div>
      </div>
    </div>
  )
}
export default App
