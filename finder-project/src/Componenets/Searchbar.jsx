import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchbar'
const Searchbar = () => {

  const [text , setText] = useState('')
 
  const dispatch = useDispatch()

  const SubmitHandler = (e)=>{
    e.preventDefault()
       console.log("form submited")
       dispatch(setQuery(text))
       setText('')
  }

  return (
    <div className=' py-10 flex justify-center items-center '>
           <form  className='w-full flex  justify-center gap-10 '
           onSubmit={(e)=>{
            SubmitHandler(e)
           }}
            action="">

            <input  className='w-2/3 border-2 border-black p-3 text-black font-semibold '
            onChange={(e)=>{
              setText(e.target.value)
            }}

            value={text}
            required
            type="text" placeholder='Search here !'/>

        <button className=' border-2 border-black py-2 px-7  font-semibold '>Search</button>
           </form>
    </div>
  )
}

export default Searchbar
