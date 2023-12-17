import { useState } from "react"

function ArticlesContent({ article,folders ,handleFormSubmit , setFormValue }) {
    console.log('article',article)
    const [ isHover , setIsHover ] = useState(false);
    const handleHover = (e) =>{
        e.preventDefault();
        setIsHover(!isHover);
    }

    const [ isLinkHover , setIsLinkHover ] = useState(false);
    const handleLinkHover = (e) =>{
        e.preventDefault();
        
            setIsLinkHover(!isLinkHover);

    }

    const [ isToFolderHover , setIsToFolderHover ] = useState(false);
    const handleToFolderHover = (e) => {
        e.preventDefault();
        setIsToFolderHover(!isToFolderHover);
    }

    const [ log , setLog] = useState({
        log:'',
    })
    const handleLogForm = async (e,id) => {
        e.preventDefault();
        console.log('log id',id)
        console.log('log comment',log.log)
        let csrf_token3 = document.head.querySelector('meta[name="csrf-token"]').content;
        try{
            const res = await fetch(`/log/${article.id}`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token3,
                },
                body:JSON.stringify(log)
            })
            if(res.ok){
                setLog(log);
            } else{
                alert('not ok ページを再読み込みし、もう一度送信してください')
                console.log('res not ok')
            }
        } catch(errors){
            console.log('error');
            alert('もう一度送信してください🙇')
        }
    }
    return (
        <>
            <li className="">
                <a href={article.url} target="_blank" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkHover}className= "flex w-full p-5 rounded-md duration-200 mt-1 hover:bg-zinc-700 hover:duration-200">
                    <div className="w-[280px] h-[120px]">
                        <img src={`${article.image}`} className="w-[100%] h-[100%] block object-cover rounded-md"/>
                    </div>
                    <div className="ml-5 limit">
                        <p className="font-bold text-2xl limit">{article.title}</p>
                        <p className="text-xs mt-1 limit">🌐link: <span className="text-gray-400 font-bold">{article.url}</span></p>
                        <p className="mt-1 text-xs limit">📖desc: {article.description}</p>
                        <p className="mt-1 text-xs limit">👤site: {article.site_name}</p>
                        <div className={isLinkHover == true ? "flex duration-300 opacity-100 visible mt-1 justify-end" : "flex justify-end opacity-0 duration-500 invisible" }>
                            <div onClick={handleHover} className="relative z-90 w-[70px] h-[35px] rounded-full mr-1 bg-gray-300 text-black font-bold text-center leading-7 text-xs duration-300 hover:bg-zinc-800 hover:text-white hover:duration-200"><p className="mt-[3px]">Log</p></div>
                            <div onClick={handleToFolderHover} className="w-[70px] h-[35px] rounded-full mr-1 bg-gray-300 text-black font-bold text-center leading-7 text-xs duration-300 hover:bg-zinc-800 hover:text-white hover:duration-200"><p className="mt-[3px]">manage</p></div>
                            
                        </div>
                    </div>
                </a>
                <div onMouseLeave={handleHover} className={ isHover == true ? "opacity-100 visible w-full h-[400px] relative top-[-50px] bg-white rounded-xl px-10 py-5 z-70 duration-300 m-0 ml-auto" : "m-0 ml-auto relative top-[-50px] opacity-0 duration-500 invisible w-0 h-0" }>
                    <form onSubmit={ (e)=>handleLogForm(e,article.id) } className="block h-full">
                        <div className="flex justify-between">
                            <p className={ isHover == true ? 'text-black font-bold opacity-100 visible': 'text-black font-bold opacity-0 duration-300 invisible'}>Log</p>
                            <button type="submit" className="font-bold border border-black text-white py-[2px] px-[5px] rounded-md bg-black ">save</button>
                        </div>
                        <textarea onChange={ (e) => { setLog({log: e.target.value}) }  }className="text-xl font-bold text-black w-full h-[85%] mt-[10px] rounded-md duration-300 border outline-none focus:border-black focus:ring-zinc-400 p-5 border-none">{article.log == null ? '' : article.log.log}</textarea>
                    </form>            
                </div>
                <div onMouseLeave={handleToFolderHover} className={ isToFolderHover == true ? "m-0 ml-auto opacity-100 visible w-[50%] relative top-[-50px] h-[400px] bg-zinc-900 rounded-xl p-5 z-100 duration-300 overflow-scroll" : "m-0 ml-auto relative top-[-50px] opacity-0 duration-500 invisible w-0 h-0" }>
                    <p className={ isToFolderHover == true ? 'text-gray-500 font-bold opacity-100 visible limit': 'text-black font-bold opacity-0 duration-300 invisible h-0'}>folder→{article.title}</p>
                    <p>delete</p>
                    {folders.map(( folder ) => (
                        <div key={folder.id}>
                            <div className={isToFolderHover == true ? "mt-[10px] p-1 rounded-md flex items-center duration-300 hover:bg-zinc-700 hover:duration-200" : "hidden" }>
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