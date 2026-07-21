import React, { useState } from 'react'

function Usestate() {


    const [Num, setNum] = useState(0)

   function increase() {
        setNum(Num+1)
    }

    function decrease (){
       
        setNum(Num-1)

    }

    function Jump5num(){
        setNum(Num+5)
    }

  return (
    <div className='flex flex-col gap-5 justify-center items-center bg-black'>
        <h1 className=' text-2xl text-white p-10 '>{Num}</h1>
         <button className='py-3 px-5 bg-amber-100 text-black '  onClick={increase}>increase</button>
          <button className='py-3 px-5 bg-amber-100 text-black ' onClick={decrease}>decrease</button>
          <button className='py-3 px-5 bg-amber-100 text-black ' onClick={Jump5num}>Increase by 5</button>
    </div>
  )
}

export default Usestate