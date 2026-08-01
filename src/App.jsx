import { useState, useRef, useEffect } from 'react'
import InputTest from './components/inputTest/index.jsx'
import './App.css'

function App() {

  const [state, setState] = useState(
    {
      'Usuário': '',
      'Senha': ''
    }
  )
  const [login, setLogin] = useState(false)
  const [name, setName] = useState('Tela de login...')
  const title = useRef('')

  useEffect(() => {
    localStorage.setItem('Credentials', JSON.stringify(['sctech', '123']))
  }, [])

  useEffect(() => {
    if (login) {
      title.current = JSON.parse(localStorage.getItem('Credentials'))[0]
      console.log(title.current)

      // Função de callback do tipo Promisse, para aguardar setar o valor do estado name, após o setName, que é assíncrono, 
      // e assim evitar que o valor de name seja setado antes do valor de title.current ser atualizado.
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(title.current.toUpperCase())
        }, 1000)
      }).then((response) => {
        setName(response)
      })

    }
  }, [login])

  const handleSubmit = (loginData) => {
    loginData.preventDefault()
    const credentials = JSON.parse(localStorage.getItem('Credentials'))
    if (state.Usuário === credentials[0] && state.Senha === credentials[1]) {
      setLogin(true)
      alert('Login realizado com sucesso!')
    } else {
      alert('Usuário ou senha incorretos!')
    }
  }

  const setFormData = (state, name, value) => {
    setState((state) => ({
      ...state,
      [name]: value
    }))
  }

  return (
    <>
      <h1>
        {name}
      </h1>
      <h2>Tela de login...</h2>
      <p>Digite abaixo seus dados.</p>

      <form onSubmit={handleSubmit}>
        <div className='g-4' style={{ display: 'flex', flexDirection: 'column' }}>
          <InputTest
            key={Object.keys(state)[0]}
            name={Object.keys(state)[0]}
            state={state}
            setState={setFormData}
          />
          <InputTest
            key={Object.keys(state)[1]}
            name={Object.keys(state)[1]}
            state={state}
            setState={setFormData}
          />
        </div>
        <button type='submit' >Entrar</button>
      </form>

      {/* {console.log(user + ' - ' + password)} */}
    </>
  )
}

export default App
