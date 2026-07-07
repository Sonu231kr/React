import React from 'react'

import Card from './component/Componenets'
const App = () =>{

  return(


    <div>


  <Card user="sonu" age={28} />
      <Card user="Avantika" age={28} img='https://plus.unsplash.com/premium_photo-1783095264167-9466440f4a51?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user="srshsj" age={28} img= 'https://plus.unsplash.com/premium_photo-1783095264167-9466440f4a51?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
  <Card user="rani" age={28} />
   


    </div>


  )
} 
export default App