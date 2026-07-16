import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count+1)}>t</button>
      <h2>{count}</h2>
      {
        count==0?<h1>Condition 0</h1>
        :count==1?<h1>Condition 1</h1>
        :count==2?<h1>Condition 2</h1>
        :count==3?<h1>Condition 3</h1>
        :<h1>other Condition</h1>
      }  
    </>
  )
}

export default App
