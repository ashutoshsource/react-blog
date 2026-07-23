import { useState } from 'react'
import './App.css'
import Clock from './Clock'

function App() {
  const [color, setColor] = useState('green')

  return (
    <>
    <h1>Digital clock in react js</h1>
    <select onChange={(e)=>setColor(e.target.value)}>
      <option value={'red'}>Red</option>
      <option value={'green'}>Green</option>
      <option value={"blue"}>Blue</option>
      <option value={"orange"}>Orange</option>
    </select>
     <Clock color={color}/>
    </>
  )
}

export default App
