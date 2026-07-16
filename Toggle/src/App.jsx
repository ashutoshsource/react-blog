import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './User'

function App() {
  const [Display, setDisplay] = useState(true)

  return (
    <>
      <h2>Toggle in React js</h2>
      <button onClick={() => setDisplay(!Display)}>Toggle</button>
      {
        Display?<User />:<h1>nothing</h1>
      }
    </>
  )
}

export default App
