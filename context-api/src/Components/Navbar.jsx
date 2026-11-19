import React, { useContext } from 'react'
import { UserConstapi } from '../Context/Usercontext'
import { useEffect } from 'react';
import { Sun , Moon } from 'lucide-react';
const Navbar = () => {

   const {myname , age , setAge, name , setName , theme , setTheme} =  useContext(UserConstapi);
   
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className=' flex justify-center items-center flex-col gap-20'>
          <h1>my name is  {myname} </h1>
          <h1>my age is  {age} </h1>
      <h2>the theme is {theme == "dark" ? <Moon /> : <Sun />}</h2>

          <button
           onClick={()=>{
            setTheme(theme == 'light'?'dark':'light')

           }}
      >{theme === "dark" ? <Moon /> : <Sun />}</button>
    </div>
  )
}

export default Navbar
    