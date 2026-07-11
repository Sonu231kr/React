import React from 'react';

const Card = (props) => {

   
    return (

        <div className=' pagecontainer   '>


            <div className='  bg-white h-full w-70 flex flex-col justify-space-between '>


                <div className="navbar text-white h-40 w-full bg-[url('https://images.unsplash.com/photo-1780833527914-874f3e6bcc39?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat ">
                    <h2 className='p-5 uppercase font-bold z-3 text-red-500'>News</h2>
                </div>

                <div className="content text-black p-5 flex flex-col gap-2 ">
                    <p className='text-sm/7 tracking-tight font-sans p-0.5 font-light'>{props.date}</p>
                    <div>
                        <h1 className='text-2xl font-bold'>What Happened </h1>
                        <h1 className='text-2xl font-bold'>in Thailand? </h1>
                    </div>

                    <div className=" pb-30">
                        <p className='text-black'>{props.info}</p>
                    </div>



                    <div className="fotter  flex gap-1  ">
                        <svg className='text-blue-900' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10" /><path d="m12 16 4-4-4-4" /><path d="M8 12h8" /></svg>
                        <h1 className='text-blue-900 font-medium text-medium' >Find more out</h1>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Card;