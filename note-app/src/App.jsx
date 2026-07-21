import React, { useState } from 'react'

function App() {

  const [notetitle, setNotetitle] = useState('')
  const [notedetail, setNotedetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandle = (e) => {
    e.preventDefault();
    const Copytask = [...task]
    Copytask.push({ notetitle, notedetail })
    setTask(Copytask)
    setNotedetail('')
    setNotetitle('')
  }

const deleteNote = (idx) =>{
  const Copytask = [...task];
  Copytask.splice(idx , 1)
  setTask(Copytask)
}


  return (
    <div className='flex gap-5 justify-between  p-20'>


      <form onSubmit={(e) => {
        submitHandle(e)
      }}
        className='flex flex-col gap-3 w-1/3  '>


        <h1 className='text-black text-xl font-bold px-5'>Add Notes</h1>

        <input
          onChange={(e) => {
            setNotetitle(e.target.value)
          }}
          value={notetitle}
          className='border-2 p-3 text-xl  text-black'
          type="text"
          placeholder='Enter the Note title'
        />

        <textarea
          onChange={(e) => {
            setNotedetail(e.target.value)
          }}
          value={notedetail}
          className='border-2 h-60 p-3 text-xl text-black'
          type="text"
          placeholder='Describe details'
        ></textarea>

        <button className=' p-3  active:scale-90 border-3   text-black rounded-2xl '>Add</button>
      </form>

      <div className='w-1/2 bg-amber-200 h-screen'>

        <h1>Your Recent Notes</h1>

        <div className='flex flex-wrap gap-4 pl-2 py-3'>
          {task.map(function (elem, idx) {
            return <div key={idx} className=' bg-black text-white rounded-2xl p-3 flex flex-col gap-5'>

              <h1>{elem.notetitle}</h1>
              <p className='p-2 text-xs '>{elem.notedetail}</p>
              <button 
               onClick={(elem)=>{
                deleteNote(idx)
               }}
              className='p-3 bg-red-500 text-white px-2'>delete</button>

            </div>
          })}

        </div>

      </div>


    </div>
  )
}

export default App