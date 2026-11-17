import React from 'react'
import { fetchPhoto, fetchVideo } from './api/mediaApi'
import Searchbar from './Componenets/Searchbar'

const App = () => {
  return (
    <div >

      <Searchbar />






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
