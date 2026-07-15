import React, { useState } from 'react'

function Counter() {
  const [count, setcount] = useState(0);
  const [rcount, setrcount] = useState(10);

  return (
    <div>
      <h1>Counter: {count}</h1>  
      <h1>rCounter: {rcount}</h1>
      <button onClick={() => setcount(count+1)}>Update counter</button>  
      <button onClick={() => setrcount(rcount-1)}>Update r counter</button>
    </div>
  )
}

export default Counter