import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increasebyamount , decreasebyamout , increment } from './Redux/features/counterSlice'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  const [num , setNum] = useState(5);

  return (
    <div className='bg-gray-800 text-white h-screen w-screen p-20 items-center justify-center flex gap-10 flex-col'>
      <h1>{count}</h1>

      <button className=' py-3 px-8 border-2 rounded-2xl'
       onClick={() => {
        dispatch(increment())
      }} >increment </button>


      <button className=' py-3 px-8 border-2 rounded-2xl'
       onClick={() => {
        dispatch(decrement())
      }} >decrement </button>

      <input className=' py-3 px-8 border-2 rounded-2xl'
       value={num}

      onChange={(e)=>{
        setNum(e.target.value)
      }}
      
      type="number" name="" id="" />


      <button className=' py-3 px-8 border-2 rounded-2xl'
       onClick={() => {
        dispatch(increasebyamount(Number(num)))
      }} >increasebyinputamount </button>

      <button className=' py-3 px-8 border-2 rounded-2xl'
       onClick={() => {
        dispatch(decreasebyamout(Number(num)))
      }} >decreasebyinputamount </button>


    </div>
  )
}

export default App
