import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Info from './Pages/Info'
import Collection from './Pages/Collection'
import { Routes , Route } from 'react-router'

const App = () => {
  return (
    <div>
      <Navbar />
  <div className='w-screen bg-gray-500 p-20 flex justify-center items-center text-2xl h-screen '>

        <Routes >
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/info' element={<Info />} ></Route>
          <Route path='/collection' element={<Collection />} ></Route>
         </Routes>
  </div>

    </div>
  )
}

export default App
