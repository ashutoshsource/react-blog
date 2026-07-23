import React from 'react'
import { useEffect,useState } from 'react';

function Clock({color}) {
    const [time, setTime] =useState('');
    
    useEffect(()=>{
      setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    },[])
  return (
    <div>
        <h1 style={{color:color, backgroundColor:'black', width:'300px', padding:'10px', borderRadius:'5px' }}>{time}</h1>
    </div>
  )
}

export default Clock