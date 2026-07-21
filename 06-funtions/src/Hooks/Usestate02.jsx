import React, { useState } from 'react'

function Usestate02() {

const [username, setUsername] = useState("sonu")
const [value, setValue] = useState(10)
const [arr, setArr] = useState({name :"sonu", age :"20"})



function arrayfuntion(){

    setUsername("Yuvraj")
    setValue(20)
    const newArray = {...arr};
    newArray.age = "90"
    console.log(newArray)
   setArr(newArray)

}

  return (
    <div>


<h1 >name : {username}</h1>
<h1>Value : {value}</h1>
<h1>arr : {arr.age}</h1>

<button onClick={arrayfuntion}>use me for change</button>

    </div>
  )
}

export default Usestate02