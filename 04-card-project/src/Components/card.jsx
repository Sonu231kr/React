import React from 'react';

const Card = () => {
    return (
        <div className='bg-blue-700 p-10 h-screen w-full '>

            <div><svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg></div>

            <div className="sectionPage flex  text-white gap-10 pt-5">
                <div className="Textpage py-50">
                   
                        <div className='  text-3xl font-bold  '>Letest News </div>
                    
        
                    <p className=' text-white text-sm'>Covering March</p>
                    <p className=' text-white text-sm'>& April 2025</p>
                </div>

                <div className='Cardpage  bg-white  w-70 flex flex-col justify-space-between '>
                    <div className="navbar text-white h-40 w-full bg-amber-600 bg-[url('https://images.unsplash.com/photo-1780833527914-874f3e6bcc39?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat ">
                        <h2 className='p-5 uppercase font-bold z-3 text-red-500'>News</h2>
                    </div>

                    <div className="content text-black p-5 flex flex-col gap-2 ">
                        <p className='text-sm/7 tracking-tight font-sans p-0.5 font-light'>March 20 2026</p>
                        <div>
                            <h1 className='text-2xl font-bold'>What Happened </h1>
                            <h1 className='text-2xl font-bold'>in Thailand? </h1>
                        </div>

                        <div className="info pb-18">
                            <p>beatiful river and mountains are available for exploration and give a peace dark black and white view.</p>
                        </div>

                        <div className="fotter  flex gap-1  ">
                            <svg className='text-blue-900' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10" /><path d="m12 16 4-4-4-4" /><path d="M8 12h8" /></svg>

                            <h1 className='text-blue-900 font-medium text-medium' >Find more out</h1>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Card;