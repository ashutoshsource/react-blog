import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [fruit, setfruit] = useState("apple")
  const handlefruit = () => {
    setfruit("banana")
  }
  return (
    <>
     <div>
      <h1>State in Reactjs</h1>
     </div>
     <h1>{fruit}</h1>
     <button onClick={handlefruit}>change fruit name</button>
     <Counter />
    </>
  )
}

export default App
