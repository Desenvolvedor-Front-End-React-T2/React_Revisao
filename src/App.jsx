import { useState } from 'react'
import InputTest from './components/inputTest/index.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [estado, setEstado] = useState('')

  return (
    <>
      <h1>

      </h1>
      <InputTest estado={estado} setEstado={setEstado} />
    </>
  )
}

export default App
