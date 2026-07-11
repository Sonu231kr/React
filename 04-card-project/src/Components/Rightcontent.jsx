import React  from "react";
import Card from "./Card";
const Rightcontent = (props) =>{
      console.log(props.users)
    return (
        <div id="Rightcontent" className="h-full w-2/2 overflow-x-auto gap-10 p-10 pl-0 flex  flex-nowrap ">
           
            {props.users.map(function (elem, idex) {
                return <Card key={idex}  date={elem.date} info ={elem.info} />
            })}

            
        </div>
    )
}
export default Rightcontent ;