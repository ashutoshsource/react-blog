import { useState } from 'react'
import { useRef } from 'react';
import UserInput from './UserInput';
import './App.css'

function App() {
  const inputRef = useRef();
  const updateInput=()=>{
    inputRef.current.value=1000;
    inputRef.current.focus()
    inputRef.current.style.color='red'
  }

  return (
    <>
      <h1>Forward Ref</h1>
      <UserInput ref={inputRef} />
      <button onClick={updateInput} >Update input field</button>
    </>
  )
}

export default App
