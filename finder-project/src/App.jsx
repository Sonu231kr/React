import React from 'react'
import { fetchPhoto, fetchVideo } from './api/mediaApi'

const App = () => {
  return (
    <div className='m-30 gap-10 flex'>
        <button className='py-3 px-6 border-2 '
         onClick={ async ()=> {

           const data = await fetchPhoto('Cat')
           console.log(data.results);
         }
         }>Get photo</button>

        <button className='py-3 px-6 border-2 '
         onClick={ async ()=> {

           const data = await fetchVideo('Cat')
           console.log(data.videos);
         }
         }>Get video</button>
    </div>
  )
}

export default App
