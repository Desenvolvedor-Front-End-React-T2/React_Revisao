import { useState } from 'react'
import InputTest from './components/inputTest/index.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [estado, setEstado] = useState('')

  return (
    <>
      <InputTest estado={estado} setEstado={setEstado} />
    </>
  )
}

export default App
