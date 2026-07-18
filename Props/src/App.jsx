import { useState } from 'react'
import User from './User'
import './App.css'
import College from './College'
import Students from './Students'

function App() {
  // let name = "ashutosh";
  // let age = 0;
  // let email = "ashu@ashu.com"
  const [student, setstudent] = useState("")
  

  let myObj1 = {
    name :"ashu",
    age:"0",
    email:"ashu@ashu.com"
  }
  let myObj2 = {
    name : "batman",
    age : "30",
    email : "batman@batman.com"
  }
  let batman = {
    name : "bruce wyne",
    age :"31",
    email : "wyne@enterprizes.com"
  }
  let institute = ['iit','nit','mit']


  return (
    <>

      <User user = {myObj1} />
      <User user = {myObj2} />
      <User user = {batman} />
      <button onClick={() => setstudent("bhaskar")}>Update student name</button>

      <College  name={institute[0]}/>
      <College  name={institute[1]}/>
      <College  name={institute[2]}/>
      {student && <Students a={student}/>}

    </>
  )
}

export default App
