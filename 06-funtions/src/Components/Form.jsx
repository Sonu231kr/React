import React, { useState } from 'react'

function Footer() {

const [name , setName ] = useState('')
const [email , setEmail ] = useState('')
const [message , setMessage ] = useState('')


  function valueFuntion(e) {

    console.log(e.target.value)
  }

  function submitFuntion(e) {
    e.preventDefault();
    console.log("form submitted : ")
    console.log("Name : ",name)  
    console.log("Email : ",email)  
    console.log("Message: ",message)  

     setName('')
     setEmail('')
     setMessage('')
  }


  return (
    <div className='h-screen w-full p-20 bg-black text-red-500'>




      <div className="form  flex items-start border-2 border-red-700  ">

        <form onSubmit={(e)=>{
          submitFuntion(e);
        }} className='flex flex-col justify-between  p-10 gap-8 '>

          <input onChange={(e)=>{
            setName(e.target.value)
          }} value={name} type="text" placeholder=' Enter' className='text-lg border-2 border-red-700 text-red-600  p-3 w-80' />
         
          <input onChange={(e)=>{
            setEmail(e.target.value)
          }} value={email} type="email" placeholder='enter your email' className='text-lg border-2 border-red-700 text-red-600  p-3 w-80' />
         
          <textarea onChange={(e)=>{
            setMessage(e.target.value)
          }} value={message} type="text" placeholder=' Enter message' className='text-lg border-2 border-red-700 text-red-600  p-3 w-80' />

          <button className='text-lg border-2 border-red-700 text-red-600 w-40 p-3'>Submit</button>
        </form >

      </div>





    </div>
  )
}

export default Footer