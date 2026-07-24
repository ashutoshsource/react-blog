import { useState } from 'react'
import { useRef } from 'react';
import './App.css'

function App() {
  const inputRef = useRef(null);
  const h1Ref= useRef();
  const inputHandler = ()=>{
    console.log(inputRef)
    inputRef.current.focus();
    inputRef.current.style.color='red';
    inputRef.current.placeholder='enter password'
    inputRef.current.value='123'
  }
  const toggleHandler=()=>{
    if(inputRef.current.style.display!='none'){
      inputRef.current.style.display='none'
    }else{
      inputRef.current.style.display='inline'
    }
  }
  const h1handler=()=>{
    h1Ref.current.style.color='green'
  }
  return (
    <>
    <div  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <h1>useRef</h1>
     <button onClick={toggleHandler}>Toggle</button>
     <input ref={inputRef} type='text' placeholder='enter user name'/>
     <button onClick={inputHandler}>Focus on input field</button>

     <h1 ref={h1Ref}>code step by step</h1>
     <button onClick={h1handler}>change color</button>
    </div>
     
    </>
  )
}

export default App
