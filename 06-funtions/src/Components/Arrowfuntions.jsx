import React from 'react'

function Arrowfuntions() {

    const Readvalue = (elem) =>{
        console.log(elem.target.value)
    }

  return (
    <div >
        <h1>Arraw funtion</h1>

    <input className='m-15 bg-green-500 text-white p-4' onChange={(elem)=>{
        Readvalue(elem);
    }} type="text" />




    </div>
  )
}

export default Arrowfuntions