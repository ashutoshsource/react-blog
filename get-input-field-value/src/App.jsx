import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [value, setValue] = useState("Ashutosh pandey")

  return (
    <>
      <h1>get input field value</h1>
      <input type='text' value={value} placeholder='Enter text here' onChange={(e) => {setValue(e.target.value)}} />
      <h1>{value}</h1>
      <button onClick={() => {setValue('')}}>Clear value</button>
    </>
  )
}

export default App
