import { useState } from "react"

function ArticlesContent() {
    const [ isHover , setIsHover ] = useState(false);
    const handleHover = () =>{
        setIsHover(!isHover);
    }
    return (
        <>
            <li className="">
                <a href="" className="flex w-full p-5 rounded-md duration-200 mt-1 hover:bg-zinc-700 hover:duration-200">
                    <img src="https://kaiton-blog.space/img/pen.png" className="w-[180px] h-[100px] object-cover rounded-md"/>
                    <div className="ml-5">
                        <p className="font-bold text-xl">Kaitokosugeno portfolio</p>
                        <p className="text-xs mt-1">https://kaiton-blog.space</p>
                        <p className="mt-1 text-xs">サイトの説明が入ります。サイトの説明が入ります。サイトの説明が入ります。サイトの説明が入ります。サイトの説明が入ります。</p>
                        <div className="flex mt-1">
                            <div onMouseEnter={handleHover}className="w-[30px] h-[30px] rounded-full mr-1 bg-white text-black font-bold text-center leading-7 text-xs duration-300 hover:bg-yellow-400 hover:duration-300"><p>Log</p></div>
                            <img className="w-[30px] h-[30px] rounded-full mr-1" src="https://kaiton-blog.space/img/pen.png"/>
                        </div>
                    </div>
                </a>
                <div onMouseLeave={handleHover} className={ isHover == true ? "opacity-100 visible w-full h-[400px] bg-white rounded-xl p-10 z-70 duration-500" : "opacity-0 duration-500 invisible w-0 h-0" }>
                    <p className={ isHover == true ? 'text-black font-bold opacity-100 visible': 'text-black font-bold opacity-0 duration-300 invisible'}>Log</p>
                </div>
            </li>
        </>
    );
}

export default ArticlesContent;