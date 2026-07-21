import React from 'react'

function Wrapper({children}) {
  return (
    <div style={{color:"orange", border:"5px solid cyan",margin:"10px"}}>
      {children}
    </div>
  )
}

export default Wrapper