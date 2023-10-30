import { useState } from "react"

function ArticlesContent({ article,folders ,handleFormSubmit , setFormValue }) {
    const [ isHover , setIsHover ] = useState(false);
    const handleHover = (e) =>{
        e.preventDefault();
        setIsHover(!isHover);
    }

    const [ isToFolderHover , setIsToFolderHover ] = useState(false);
    const handleToFolderHover = (e) => {
        e.preventDefault();
        setIsToFolderHover(!isToFolderHover);
    }
    return (
        <>
            <li className="relative">
                <a href={article.url} className="flex w-full p-5 rounded-md duration-200 mt-1 hover:bg-zinc-700 hover:duration-200">
                    <img src={`${article.image}`}className="w-[200px] h-[110px] object-cover rounded-md"/>
                    <div className="ml-5">
                        <p className="font-bold text-2xl">{article.title}</p>
                        <p className="text-xs mt-1">link:{article.url}</p>
                        <p className="mt-1 text-xs">desc:{article.description}</p>
                        <p className="mt-1 text-xs">site:{article.site_name}</p>
                        {/* <div className="flex mt-1">
                            <div onClick={handleHover} className="relative z-90 w-[30px] h-[30px] rounded-full mr-1 bg-white text-black font-bold text-center leading-7 text-xs duration-300 hover:bg-yellow-400 hover:duration-300"><p>Log</p></div>
                            <div onClick={handleToFolderHover} className="w-[30px] h-[30px] rounded-full mr-1 bg-white text-black font-bold text-center leading-7 text-xs duration-300 hover:bg-yellow-400 hover:duration-300"><p>folder</p></div>
                            <img className="w-[30px] h-[30px] rounded-full mr-1" src="https://kaiton-blog.space/img/pen.png"/>
                        </div> */}
                    </div>
                </a>
                <div onMouseLeave={handleHover} className={ isHover == true ? "opacity-100 visible w-full h-[400px] relative top-[-50px] bg-white rounded-xl p-10 z-70 duration-300" : "relative top-[-50px] opacity-0 duration-500 invisible w-0 h-0" }>
                    <p className={ isHover == true ? 'text-black font-bold opacity-100 visible': 'text-black font-bold opacity-0 duration-300 invisible'}>Log</p>
                </div>
                <div onMouseLeave={handleToFolderHover} className={ isToFolderHover == true ? "opacity-100 visible w-[50%] relative top-[-50px] h-[400px] bg-zinc-900 rounded-xl p-5 z-100 duration-300 overflow-scroll" : "relative top-[-50px] opacity-0 duration-500 invisible w-0 h-0" }>
                    <p className={ isToFolderHover == true ? 'text-gray-500 font-bold opacity-100 visible': 'text-black font-bold opacity-0 duration-300 invisible'}>{article.title}</p>
                    <form onSubmit={handleFormSubmit} className="mt-[5px]">
                        <input onChange={(e) => setFormValue({title: e.target.value , key:crypto.randomUUID()})} name="title" type="text" placeholder="add folder" className="relative outline-none rounded-[5px] w-full bg-[#202020] pr-[50px] duration-500 focus:border-sky-900 focus:ring-sky-900 focus:duration-500" />
                        <button type="submit" className="pointer z-30 text-white border  border-gray-600 rounded-md px-[15px] py-[2px] absolute right-[5%] top-[55px] duration-200 hover:bg-sky-900">▷</button>
                    </form>
                    {folders.map(( folder ) => (
                        <div key={folder.key}>
                            <div className="block mt-[10px] p-1 rounded-md flex items-center duration-300 hover:bg-zinc-700 hover:duration-200">
                                <input className="rounded-md bg-zinc-400 focus:bg-sky-900 text-sky-900 focus:ring-0" type="checkbox" key={folder.id} value={folder.title} id={folder.id}/>
                                <label className="ml-[8px] block w-full"for={folder.id}>{folder.title}</label>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </li>
        </>
    );
}

export default ArticlesContent;