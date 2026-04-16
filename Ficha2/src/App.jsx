import { useState } from 'react'
import Listas from './components/Listas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Listas />
    </div>
  )
}

export default App
