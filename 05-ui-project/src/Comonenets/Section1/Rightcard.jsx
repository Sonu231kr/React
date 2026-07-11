import Rightcardcontent from "./Rightcardcontent";

const Rightcard = (props) => {

    return (
        <div className="h-full shrink-0  overflow-hidden  relative w-80 bg-yellow-400  rounded-4xl ">

            <img className=" h-full w-full object-cover" src={props.img} alt=" image " />

            <Rightcardcontent id = {props.id} tag = {props.tag} intro = {props.intro} />


        </div>


    )
}
export default Rightcard;