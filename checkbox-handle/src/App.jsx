import { useState } from 'react'
import Skills from './Skills'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hii</h1>
      <Skills />
    </>
  )
}

export default App
