import Reactv from "react";
import LeftcontentInfo from "./LeftconentInfo";
import LeftcontentIcons from "./LeftcontentIcons";

const Leftcontent = () => {
    return (
        <div className=" h-full w-1/3 flex justify-between flex-col">
           
           <LeftcontentInfo />
           <LeftcontentIcons />


        </div>
    )
}
export default Leftcontent;