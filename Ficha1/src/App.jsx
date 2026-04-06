import { useState } from 'react'
import profilePic from './assets/profilePic.jpg'
import './App.css'
import Tarjeta from './components/tarjeta';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h1 className="text-white">Tarjeta de Estudiante</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <Tarjeta
                nombre="Juan Saldaña"
                descripcion="Soy un estudiante con muchas ganas de aprender. Me gustan los juegos de rol y los videojuegos."
                enlace="https://github.com/JISaldana"
                imagen={profilePic}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
