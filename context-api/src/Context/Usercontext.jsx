import React, { createContext, useState } from 'react'

export const UserConstapi = createContext();

export const Usercontext = ({children}) => {

  const [age , setAge] = useState('20');
  const [name , setName] = useState('');
  const [theme , setTheme] = useState('light')
  const [myname , setMyname] = useState('Sonu')
  
    
    

  return (
         <UserConstapi.Provider value={{age, setAge, setName, name , theme, setTheme , myname}} >
            {children}
         </UserConstapi.Provider>   

  )
}

export default Usercontext
