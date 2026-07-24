import { useState } from 'react'
import { useRef } from 'react';
import './App.css'

function App() {
  const userRef = useRef();
  const passwordRef = useRef();

const handleForm = (e)=>{
  e.preventDefault();
  const user = document.querySelector("#user").value;
  console.log(user)
}

const handleFormRef = (e)=>{
  e.preventDefault();
  const user = userRef.current.value;
  const password = passwordRef.current.value;
  console.log('handleFormRef', user,password)
}
  return (
    <>
    <form action='' method='post' onSubmit={handleForm}>
      <input type='text' id='user' placeholder='enter your username'/>
      <br/>
      <input type='password' id='password' placeholder="enter user's password"/>
      <br/>
      <button>Submit</button>
    </form>

    <form action=''  method='post' onSubmit={handleFormRef}>
      <input type='text' ref={userRef} id='userRef' placeholder='usernameRef'/>
      <br/>
      <input type='password' ref={passwordRef} id='passwordRef' placeholder="passwordRef"/>
      <br/>
      <button>Submit</button>
    </form>
    </>
  )
}

export default App
