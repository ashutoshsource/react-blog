import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [gender, setGender] = useState('female')
  const [city, setCity] = useState('delhi');

  return (
    <>
     <h1>handle radio and dropdown</h1>
     <h4>Select gender</h4>
     <input type='radio' onChange={(e)=>setGender(e.target.value)} value={'male'} name='gender' checked={gender=='male'} id='male' />
     <label htmlFor='male'>Male</label>
     <input type='radio' onChange={(e)=>setGender(e.target.value)} value={'female'} checked={gender=='female'} name='gender' id='female' />
     <label htmlFor='female'>Female</label>

     <h2>Selected gender: {gender}</h2>
     <br/>
 
     <h4>Select city</h4>
     <select onChange={(e)=>setCity(e.target.value)} defaultValue='delhi'>
      <option value="noida">Noida</option>
      <option value="gurugram">Gurugram</option>
      <option value="delhi">Delhi</option>
     </select>

     <h2>Selected city: {city}</h2>

    </>
  )
}

export default App
