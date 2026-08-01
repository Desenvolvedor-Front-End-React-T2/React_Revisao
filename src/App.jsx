import { useState, useRef, useEffect } from 'react'
import InputTest from './components/inputTest/index.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [state, setState] = useState(
  //   {
  //     'Usuário': '',
  //     'Senha': ''
  //   }
  // )

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

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
    }
  }, [login])

  const handleSubmit = (loginData) => {
    loginData.preventDefault()
    const credentials = JSON.parse(localStorage.getItem('Credentials'))
    if (loginData.target[0].value === credentials[0] && loginData.target[1].value === credentials[1]) {
      setLogin(true)
      setName(credentials[0].toUpperCase())
      alert('Login realizado com sucesso!')
    } else {
      alert('Usuário ou senha incorretos!')
    }
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
          <InputTest key={'user'} name={'Usuário'} state={user} setState={setUser} />
          <InputTest key={'password'} name={'Senha'} state={password} setState={setPassword} />
        </div>
        <button type='submit' >Entrar</button>
      </form>

      {/* {console.log(user + ' - ' + password)} */}
    </>
  )
}

export default App
