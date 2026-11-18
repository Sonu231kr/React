import React, { useContext } from 'react'
import { UserConstapi } from '../Context/Usercontext'

const Navbar = () => {

   const myname =  useContext(UserConstapi);

  return (
    <div>
          <h1>this is nav bar {myname} </h1>
    </div>
  )
}

export default Navbar
    