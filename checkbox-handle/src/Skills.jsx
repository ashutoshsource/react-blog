import React from 'react'
import { useState } from 'react';

function Skills() {
    const [skills, setSkills] = useState(["java","php",]);
    const handleSkills=(e)=>{
      console.log(e.target.value,e.target.checked );
      if (e.target.checked){
        setSkills([...skills,e.target.value])
      } else {
        setSkills([...skills.filter((item)=>item!=e.target.value)])
      }
    }
  return (
    <div>
        <h3>Select your skills</h3>
        <input onChange={handleSkills} type='checkbox' id='php' value="php" />
        <label htmlFor='php'>PHP</label>
        <br/>
        <input onChange={handleSkills} type='checkbox' id='js' value='js' />
        <label htmlFor='js'>JS</label>
        <br/>
        <input onChange={handleSkills} type='checkbox' id='node' value='node' />
        <label htmlFor='node'>Node</label>
        <br/>
        <input onChange={handleSkills} type='checkbox' id='java' value="java"/>
        <label htmlFor='java'>Java</label>
        <br/>

        <h1>{skills.tostring}</h1>

    </div>
  )
}

export default Skills 