
import React  from "react"

 const  Card = (props)=>{

    

return(

        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user} {props.age}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, pariatur praesentium recusandae odit suscipit vero. Tempore natus corrupti vel itaque quis! Iusto, exercitationem.
            </p>

            <button>view profile</button> 


        </div>
  

)
}
export default Card