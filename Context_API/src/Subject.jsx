import React from 'react'
import { useContext } from 'react'
import { SubjectContext } from './ContextData'; 

function Subject() {
  const subject = useContext(SubjectContext);
  return (
    <div className='bg-red-400 p-10'>
        <h1>Subject: {subject} </h1>
    </div>
  )
}

export default Subject