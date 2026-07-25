import { useState, useTransition } from 'react'

function App() {
  const [pending, startTransition] = useTransition();


  const handleButton=()=> {
    startTransition(async()=>{
      await new Promise(res=>setTimeout(res,5000))
    })
  }
  return (
    <>
     <h1>useTransition effect in react js 19</h1>
      {
  pending ?
  <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExajF3M3FyajlwdXB5a2p1aHY0OWNxZ2JrdmJvMTkzNzgxdXBzeWwwMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3T4oJvjGDuaX6exxMA/giphy.gif' /> :
  null
}
     <button onClick={handleButton} disabled={pending}>{pending ? 'Loading...' : 'Click'}</button>
    </>
  )
}

export default App
