import { useState } from "react";



function Footer({ handleArticleFormSubmit, handleArticleObj ,folders ,formArticleValue,handleFormSubmit , setFormValue }) {
    const [ isHover , setIsHover ] = useState(false);
    const handleHover = () => {
        setIsHover(!isHover);
    }
    return (
        <div className="w-[82%] min-w-[50%] h-[150px] fixed bottom-0 z-10 right-0 bg-shadow">
            <div className="flex items-center">
                <form onSubmit={handleArticleFormSubmit} className="w-full flex items-center mt-5 relative">
                    <input onChange={ handleArticleObj } name="url" type='text' placeholder="add article" value={formArticleValue.url} autocomplete='off'className="block outline-none mt-[40px] ml-[150px] w-[60%] min-w-[200px] h-[60px] py-[5px] px-[10px] rounded-md bg-[#202020] duration-300 focus:border-gray-300 focus:ring-sky-900 focus:duration-300"/>
                    <div onMouseEnter={ handleHover } className="ml-[30px] mt-[40px] border border-zinc-500 bg-zinc-800 rounded-[5px] w-[50px] h-[50px] text-xs font-bold flex items-center justify-around text-center text-zinc-300 cursor-pointer"><p className="">Folder</p></div>
                    <div onMouseLeave={ handleHover } className={ isHover == true ? "absolute bottom-[0px] right-[1%] block opacity-100 visible border border-zinc-600 bg-zinc-900 rounded-[5px] p-[25px] max-h-[400px] w-[310px] overflow-scroll duration-300 z-30" : "w-[310px] absolute bottom-0 right-[1%] p-[25px] opacity-0 duration-500 invisible max-h-[400px]"}>
                        <p className="text-zinc-500">select folder</p>
                        {folders.map(( folder ) => (
                            <div key={folder.id}>
                                <div className={ isHover == true ? "mt-[10px] p-1 rounded-md flex items-center duration-300 hover:bg-zinc-700 hover:duration-500" : "mt-[10px] p-1 rounded-md flex items-center opacity-0"}>
                                    <input onChange = { handleArticleObj } name="folder" className="rounded-md bg-zinc-400 focus:bg-sky-900 text-sky-900 focus:ring-0" type="checkbox" key={folder.id} value={folder.id} id={folder.id} />
                                    <label className="ml-[8px] block w-full" for={folder.id}>{folder.title}</label>
                                </div>
                            </div>
                        )
                        )}
                        
                    </div>
                    <button type="submit" className="absolute pointer z-20 text-white border border-gray-600 rounded-md px-[18px] py-[5px] right-[345px] top-[51px] duration-200 hover:text-black hover:bg-gray-300">▷</button>
                </form> 
            </div> 
        </div>
    );
}

export default Footer;