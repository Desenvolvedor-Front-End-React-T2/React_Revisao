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

  // const [login, setLogin] = useState(false)
  // const [title, setTitle] = useState('Tela de login...')

  // useEffect(() => {
  //   if (login) {
  //     // JSON.parse(localStorage.getItem('Credentials'))[0]
  //   }
  // }, [login])

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (loginData) => {
    loginData.preventDefault()
    const credentials = JSON.parse(localStorage.getItem('Credentials'))
    if (loginData.target[0].value === credentials[0] && loginData.target[1].value === credentials[1]) {
      setLogin(true)
      alert('Login realizado com sucesso!')
    } else {
      alert('Usuário ou senha incorretos!')
    }
  }

  return (
    <>
      {localStorage.setItem('Credentials', JSON.stringify(['sctech', '123']))}
      { }
      <h1>
        {/* {title} */}
      </h1>
      <h2>Tela de login...</h2>
      <p>Digite abaixo seus dados.</p>

      <form onSubmit={handleSubmit}>
        <div className='g-4' style={{ display: 'flex', flexDirection: 'column' }}>
          <InputTest name={'Usuário'} state={user} setState={setUser} />
          <InputTest name={'Senha'} state={password} setState={setPassword} />
        </div>
        <button type='submit' >Entrar</button>
      </form>

      {/* {console.log(user + ' - ' + password)} */}
    </>
  )
}

export default App
