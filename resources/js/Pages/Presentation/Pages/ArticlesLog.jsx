import { useState } from "react"

function ArticlesLog() {
    const [ isHover , setIsHover ] = useState(false);
    const handleHover = () =>{
        setIsHover(!isHover);
    }
    return (
        <div onMouseLeave={handleHover} className={ isHover == true ? "opacity-100 visible w-full h-[400px] bg-white rounded-xl p-10 z-70 duration-300" : "opacity-0 duration-200 invisible w-0 h-0" }>
            <p className={ isHover == true ? 'text-black font-bold opacity-100 visible': 'text-black font-bold opacity-0 duration-300 invisible'}>Log</p>
        </div>
    );
}

export default ArticlesLog;