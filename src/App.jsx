import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [estado, setEstado] = useState('')

  return (
    <>

      <h1>{estado}</h1>
      <input value={estado} onChange={(e) => setEstado(e.target.value)} />

    </>
  )
}

export default App
