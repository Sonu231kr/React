
import React  from "react";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

const Section1 = (props) =>{
    return (
        <div className=' bg-blue-700 flex justify-between h-[90vh]'>
               
               <Leftcontent />
               <Rightcontent users = {props.users} />

        </div>
    )
}
export default Section1;