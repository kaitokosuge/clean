import { useState } from "react";



function Footer({ folders ,handleFormSubmit , setFormValue }) {
    const [ isHover , setIsHover ] = useState(false);
    const handleHover = () => {
        setIsHover(!isHover);
    }
    return (
        <div className="w-[82%] min-w-[50%] h-[150px] fixed bottom-0 z-10 right-0 bg-shadow">
            <form className="block w-full flex items-center mt-5">
                <input  type='text' placeholder="add article" className="outline-none mt-[40px] ml-[150px] w-[60%] min-w-[200px] h-[60px] py-[5px] px-[10px] rounded-md bg-[#202020] duration-500 focus:border-sky-900 focus:ring-sky-900 focus:duration-500"/>
                <div onMouseEnter={ handleHover } className="mt-[40px] ml-5 border border-zinc-500 bg-zinc-800 rounded-[5px] w-[50px] h-[50px] text-xs font-bold flex items-center justify-around text-center text-zinc-300 cursor-pointer"><p className="">Folder</p></div>
                <div onMouseLeave={ handleHover } className={ isHover == true ? "absolute bottom-[50px] right-[11%] block opacity-100 visible border border-zinc-600 bg-zinc-900 rounded-[5px] px-5 py-[10px] max-h-[400px] overflow-scroll duration-300" : "bottom-[50px] absolute bottom-0 right-[11%] opacity-0 duration-300 invisible max-h-[400px]"}>
                    <p className="text-zinc-500">select folder</p>
                    <form onSubmit={handleFormSubmit}>
                        <input onChange={(e) => setFormValue({title: e.target.value , key:crypto.randomUUID()})} name="title" type="text" placeholder="add folder" className="relative outline-none rounded-[5px] w-full bg-[#202020] pr-[50px] duration-500 focus:border-sky-900 focus:ring-sky-900 focus:duration-500" />
                        <button type="submit" className="pointer z-30 text-white border  border-gray-600 rounded-md px-[15px] py-[2px] absolute right-[9%] top-[40px] duration-200 hover:bg-sky-900">▷</button>
                    </form>
                    {folders.map(( folder ) => (
                        <>
                        <div className="block mt-[10px] p-1 rounded-md flex items-center duration-300 hover:bg-zinc-700 hover:duration-200">
                            <input className="rounded-md bg-zinc-400 focus:bg-sky-900 text-sky-900 focus:ring-0" type="checkbox" key={folder.id} value={folder.title} id={folder.id}/>
                            <label className="ml-[8px] block w-full"for={folder.id}>{folder.title}</label>
                        </div>
                        </>
                    )
                    )}
                </div>
            </form>    
        </div>
    );
}

export default Footer;