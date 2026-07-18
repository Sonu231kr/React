import React from 'react'

function Footer() {

 function valueFuntion(e){
    
    console.log(e.target.value)
 }

 function submitFuntion(e){
     e.preventDefault();
     console.log("form submitted")
 }
 

  return (
    <div className='h-screen w-full p-20 bg-black text-red-500'>




 <div className="form  flex items-start border-2 border-red-700  ">

              <form  className='flex flex-col justify-between  p-10 gap-8 '>
                  <input className='text-lg border-2 border-red-700 text-red-600  p-3 w-80' type="text" placeholder=' Enter' />
                  <input className='text-lg border-2 border-red-700 text-red-600  p-3 w-80 ' type="email" placeholder='Enter the email' />
                  <textarea className='text-lg border-2 border-red-700 w-100 h-60 flex items-start pb-50 p-2 text-indigo-100 ' type="textarea" placeholder='Describe Your Massage' />
                  <button  className='text-lg border-2 border-red-700 text-red-600 w-40 p-3'>Submit</button>
              </form >

 </div>





    </div>
  )
}

export default Footer