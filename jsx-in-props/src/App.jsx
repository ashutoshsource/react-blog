import { useState } from 'react'
import Wrapper from './Wrapper'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><h1 className='text-indigo-400'>hii</h1>
      <Wrapper >
        <h1>Hello everyone</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hello Ashu</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hello User</h1>
      </Wrapper>
    </>
  )
}

export default App
