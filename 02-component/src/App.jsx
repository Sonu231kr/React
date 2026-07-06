import React from 'react'
import card from './component/card'
import navbar  from './component/navbar'
const App = () =>{

  return (
    <div>
      <h1>hello am sonu</h1>
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad voluptatem laborum quidem dolorum, corporis quisquam fuga vero, inventore illo, neque aut labore omnis delectus cumque soluta sit. Nobis, optio. 12

      </p>
           {card()} 
      {card()} 
      {card()} 
      {card()} 

{navbar()}
    

    </div>

  )
}

export default App ;