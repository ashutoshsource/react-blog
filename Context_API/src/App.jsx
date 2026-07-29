import { useState } from 'react'
import { SubjectContext } from './ContextData'
import College from './College'
function App() {
  const[subject,setSubject] = useState("")
  return (
    <div className='bg-yellow-400 p-10'>
    <SubjectContext.Provider value={subject}>
      <select value={subject} onChange={(e)=>setSubject(e.target.value)}>
        <option value="">Select Subject</option>
        <option values="Maths">Maths</option>
        <option value="Physics">Physics</option>
        <option values="Chemistry">Chemistry</option>
      </select>
      <h1>Context API</h1>
      <button onClick={()=>setSubject('')}>Clear Subject</button>
      <College />
    </SubjectContext.Provider>
    </div>
  )
}

export default App
