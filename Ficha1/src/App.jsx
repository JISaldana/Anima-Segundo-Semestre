import { useState } from 'react'
import Counter from './Components/Contador.jsx';
import ShowHide from './Components/Mostrar-Ocultar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div>
      <Counter />
      <ShowHide />
    </div>
  )
}

export default App
