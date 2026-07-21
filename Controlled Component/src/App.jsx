import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  return (
    <>
        <input type='text' value={name} placeholder='username' onChange={(value)=>{setName(event.target.value)}} />
        <br /><br />
        <input type='password' value={password} placeholder='password' onChange={(value)=>{setPassword(event.target.value)}} />
        <br /><br />
        <input type='text' value={email} placeholder='e-mail' onChange={(value)=>{setEmail(event.target.value)}} />
        <br /><br />
        <button>Submit</button>
        <br />
        <button onClick={()=>{setEmail('');setName('');setPassword('')}}>Clear</button>

        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{password}</h1>
    </>
  )
}

export default App
