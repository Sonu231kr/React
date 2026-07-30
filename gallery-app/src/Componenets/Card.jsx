import React from 'react'

const Card = (props) => {
  return (
    <div>
      
          <a href={props.elem.url}>



              <div key={props.elem.idx} >



                  <div className='h-60 w-64 bg-white'>


                      <img className='h-full w-full object-cover rounded-2xl' src={props.elem.download_url} alt="" />
                  </div>
                  <h1 className='font-bold text-lg'>{props.elem.author}</h1>
              </div>
          </a>
    </div>
  )
}

export default Card
