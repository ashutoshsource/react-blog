// import React from 'react'
// import { forwardRef } from 'react';
// function UserInput(props,ref) {
//   return (
//     <div> <input type='text' ref={ref} /> </div>
//   )
// }

// export default forwardRef(UserInput);


function UserInput(props) {
  return (
    <div><input type="text" ref={props.ref}/></div>
  )
}

export default UserInput