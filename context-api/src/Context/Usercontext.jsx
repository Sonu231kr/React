import React, { createContext, useState } from 'react'

export const UserConstapi = createContext();

export const Usercontext = ({children}) => {

    const myname = 'sonu';
    

  return (
         <UserConstapi.Provider value='sonu' >
            {children}
         </UserConstapi.Provider>   

  )
}

export default Usercontext
