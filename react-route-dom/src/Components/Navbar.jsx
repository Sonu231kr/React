import React from 'react'
import {Link} from 'react-router'
const Navbar = () => {
  return (
    <div>
         <div className='flex gap-10 justify-center items-center  bg-black text-white px-10 py-10 '>
         <Link to ="/home" > Home</Link> 
         <Link to ="/about" > About</Link> 
         <Link to ="/info" > Info</Link> 
         <Link to ="/collection" > Collection</Link> 
         </div>
    </div>
  )
}

export default Navbar
