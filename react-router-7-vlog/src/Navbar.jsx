import React from 'react'
import {Link} from 'react-router'

function Navbar() {
  return (
    <div>
    <Link to="/"><h1>Home</h1></Link>
    <br/>
    <Link to="/about"><h1>About</h1></Link>
    <br/>
    <Link to="/Login"><h1>Login</h1></Link>
    </div>
  )
}

export default Navbar