import React from 'react'
import { useEffect } from 'react';

function Clock() {
    const [time, setTime] =setState(0);
    
    useEffect(()=>{
        setTime(newdate().toLocaleTimeString());
    },[1000])
  return (
    <div>
        
    </div>
  )
}

export default Clock