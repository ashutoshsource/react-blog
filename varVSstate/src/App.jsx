import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("red")
  // let color='red';

  return (
    <>
      <h1>{color}</h1>
      {/* <button onClick={()=>color="blue"} >change color</button> */}
      <button onClick={()=>setColor("blue")} >change color using state</button>
    </>
  )
}

export default App
