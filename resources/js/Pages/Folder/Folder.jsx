import React,{ useEffect, useState } from "react";
import { Link , useForm } from '@inertiajs/react';

function Folder({folder}) {
    const [isHover02 , setIsHover02] = useState(false);
    const handleMouseOver02 = () => {
    setIsHover02(!isHover02);
    }
    return (
        <div >

           <li className='flex p-5 w-full  duration-500 mt-10' >
                        
                        <Link href={`/folder/${folder.key}`} className="pointer flex">
                            <div className="rounded-full shadow w-[100px] h-[100px]" style={{ backgroundColor: `rgb(${folder.rgb})`, }}></div>
                            <div>
                                <div className="flex items-center mt-5 relative z-10">
                                    <img className="w-[20px] rounded-md mr-1 relative z-10"src={folder.image}/>
                                    <p className="font-bold text-md text-gray-100 relative z-10">{folder.title}</p>
                                </div>
                                <time className="font-bold text-xs text-gray-500 block mt-1">{folder.updated_at}</time>
                            </div>
                        </Link>
                       
            
                        <div onMouseEnter={handleMouseOver02} onMouseLeave={handleMouseOver02} className="w-[50px] h-[50px] rounded-full absolute  bg-white text-white">
                                    <p className="text-black">log</p>
                                    <div className={isHover02 == true ? "absolute  text-white  opacity-100 visible z-50 duration-200" : "absolute  text-white z-50 opacity-0  invisible duration-200"} >
                                        <ul className="fixed z-90 top-[50px] w-[60vw] h-[80vh] bg-white text-black p-10" >
                                            <p className="text-4xl font-bold">Log</p>
                                            <li>{folder.title}</li>
                                            <li>{folder.id}</li>
                                        </ul>
                                    </div>
                                </div>
                    </li>   
        </div>
    );
}

export default Folder;