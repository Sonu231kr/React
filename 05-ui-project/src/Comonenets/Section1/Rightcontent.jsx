import Reactv  from "react";
import Rightcard from "./Rightcard";

const Rightcontent =(props) =>{
    console.log(props.users)
    return(
        <div id="right" className=" h-full shrink-0 flex overflow-x-auto flex-nowrap  gap-10 p-5 w-2/3 rounded-4xl ">
            
            {props.users.map(function(elem,idex){
                return <Rightcard key={idex} id={idex} img = {elem.img} tag= {elem.tag} intro = {elem.intro} />
            })}

        </div>
    )
}
export default Rightcontent;