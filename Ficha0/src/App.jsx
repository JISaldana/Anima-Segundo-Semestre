import { useState } from 'react'
import profilePic from './assets/profilePic.jpg'
import Tarjeta from './components/tarjeta';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center py-5">
      <div className="container-fluid">
        <h1 className="text-white fw-bold mb-5 text-center">Tarjeta de Estudiante</h1>
        <div className="row g-4 d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <Tarjeta
              nombre="Juan Saldaña"
              descripcion="Soy un estudiante con muchas ganas de aprender. Me gustan los juegos de rol y los videojuegos."
              enlace="https://github.com/JISaldana"
              imagen={profilePic}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <Tarjeta
              nombre="María González"
              descripcion="Soy una estudiante apasionada por la tecnología y el desarrollo web."
              enlace="https://github.com/MGonzalez"
              imagen={"https://static.wixstatic.com/media/cdf63e_2956016c05bd47f29227920c4cbf06ea.jpg/v1/fill/w_1056,h_1026,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cdf63e_2956016c05bd47f29227920c4cbf06ea.jpg"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <Tarjeta
              nombre="Carlos Pérez"
              descripcion="Soy un desarrollador senior interesado en la inteligencia artificial y el aprendizaje automático."
              enlace="https://github.com/CPerez"
              imagen={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OcX3qJctDX1_Tpx-yussUgCDqxDkX7qKgw&s"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
