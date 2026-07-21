
import React from 'react'
import Footer from './Components/Form';
import Arrowfuntions from './Components/Arrowfuntions';
import Usestate from './Hooks/Usestate';
import Usestate02 from './Hooks/Usestate02';

function App() {

  function clickme(e){
    console.log(e.target.value)

  }
  function SubmitForm(e){
    e.preventDefault();
    console.log("submited")
  }

  return (
    <div >

    < button className ='bg-white border-2 text-black rounded-2xl  m-20 py-2  px-8  '  onClick={clickme} > clickme</button>

      <input className='bg-white border-2 text-black rounded-2xl  m-20 py-2  px-8  ' type="text" placeholder='Enter the Name ' onChange={clickme} onMouseEnter={() =>{
        console.log("mosuse enter")
      }}  onMouseLeave= {() =>{
        console.log("mouseleaved")
      }}/>
     
     <form action=""  onSubmit={SubmitForm}>
        <button className='bg-white border-2 text-black rounded-2xl  m-20 py-2  px-8  '>submit</button>
     </form>

      < input className='bg-white border-2 text-black rounded-2xl  m-20 py-2  px-8  ' onKeyDown={(e) =>{
        console.log(e.key)
      }}></input> 

             
    <Footer />

    <Arrowfuntions />

    <Usestate />

    <Usestate02 />

    </div>
  )
}

export default App