import { useState } from 'react'
import InputTest from './components/inputTest/index.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [estado, setEstado] = useState('')

  return (
    <>
      <h1>
        Oi!
      </h1>
      <div className='g-4' style={{ display: 'flex', flexDirection: 'column' }}>
        <InputTest estado={estado} setEstado={setEstado} />
        <InputTest estado={estado} setEstado={setEstado} />
      </div>
    </>
  )
}

export default App
