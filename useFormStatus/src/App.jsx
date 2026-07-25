import { useState } from 'react'

import { useFormStatus } from 'react-dom'

function App() {
const handleSubmit=async()=>{
  await new Promise(res=>setTimeout(res,2000));
  console.log("submit")
}
  function CustomerForm(){
    const {pending} = useFormStatus();
    console.log(pending);
    
    return(
      <div>
        <input type='text' placeholder='username'/>
      <input type='password' placeholder='password'/>
      <button disabled={pending} >Submit</button>
      </div>
    )
  }

  return (
    <>
    <form action={handleSubmit}>
      <CustomerForm />
    </form>
    </>
  )
}

export default App
