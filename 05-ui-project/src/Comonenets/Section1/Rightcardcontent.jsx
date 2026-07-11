import { ArrowRight } from "lucide-react";

const Rightcardcontent =(props) =>{
    return (
        <div className="h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between rounded-4xl">
            <h1 className=" h-8 w-8 rounded-full flex justify-center items-center bg-white text-black text-lg font-medium">{props.id+1}</h1>

            <div >
                <p className="text-lg leading-relaxed mb-10 text-white">{props.intro}</p>
                <div className="flex justify-between">
                    <button className="bg-blue-600 px-6  py-1 rounded-full">{props.tag}</button>
                    <button className="bg-blue-600 p-5 rounded-full">
                        <ArrowRight  size={17}/>
                    </button>
                </div>
            </div>

        </div>
    )
}
export default Rightcardcontent;