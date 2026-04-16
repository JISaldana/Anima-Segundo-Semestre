import { useState } from 'react'
import Listas from './components/Listas'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Listas />
    </div>
  )
}

export default App
