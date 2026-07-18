import React from 'react'

function User({user}) {
  return (
    <div>
        <hr></hr>
       <h1>{user.name}</h1>
       <h3>{user.age}</h3>
       <h2>{user.email}</h2>

    </div>
  )
}

export default User