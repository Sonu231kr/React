import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Componenets/Card';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  
  useEffect(function () {
    getData()

  }, [index])


  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
    
  }
  
 


 


  let printUserdata = <h1 className='flex fixed top-65 text-2xl font-medium justify-center items-center'>Loading...</h1>

  if (userData.length > 0) {
    printUserdata = userData.map(function (elem, idx) {
      return <Card elem={elem} />
    })
  }

  return (
    <div className='p-4'>
      {/* <button
        onClick={getData}
        className='py-2 px-5 active:scale-95 hover:bg-red-600 cursor-pointer text-black m-10 bg-red-300 rounded-2xl'>get data </button> */}
          
    

      <div className='flex flex-wrap gap-8 item-center justify-center  '>
        {printUserdata}
      </div>

      <div className='flex justify-center fixed left-2/5 bottom-15  gap-6  m-5'>
        <button
        onClick={() => {

            if (index > 1) {
              setUserData([]);

              setIndex(index - 1)
            }
          
        }}
         className='bg-amber-300 px-6 py-2 cursor-pointer active:scale-90  ' >Prev</button>

         <h1 className='flex items-center justify-center'>Page {index}</h1>

        <button onClick={() => {
          
            setIndex(index+1)
            setUserData([]);
        }}
        className='bg-amber-300 px-6 py-2 cursor-pointer active:scale-90 '>Next</button>
      </div>
    </div>
  )
}

export default App
