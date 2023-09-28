import React , {useState} from "react";
import { useForm } from "@inertiajs/react";


function Show({folder}) {
    console.log('show props',folder);
    //const { folder } = folder;
    console.log('show folder.articles',folder.articles);
    const [ indexFolder , setIndexFolder] = useState(folder.articles);
    const { data , setData } = useForm({
        title:'',
        memo:'',
        url:'',
        image:'https://kaiton-blog.space/img/tonp.png',
    })
    const handleCreateArticle = async (e) => {
        e.preventDefault();
        let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
        try{
            const response = await fetch(`/article/${folder.id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token,
                },
                //folderのオブジェクトをjsonに変換して送る
                body: JSON.stringify(data),
            })
            if (response.ok) {
                const newFolder = [data,...folder.articles]
                setIndexFolder(newFolder);
                console.log('response-ok')
            } else {
              console.log('error-json')
            }
        } catch (error) {
            console.log('async-error')
        }
    }
    return (
        <>
            <div className="flex">
                <img className="w-1/6 rounded-xl"src={folder.image}/>
                <div className="w-[200px] h-[200px] rounded-full shadow" style={{ backgroundColor: `rgb(${folder.rgb})`, }}></div>
            </div>
            <p className="font-bold text-sm mt-10">{folder.title}</p>
            <form onSubmit={handleCreateArticle} className="mt-10">
                <p className="font-bold text-xs">article area</p>
                <input className="bg-gray-800 rounded-md"type="text" onChange={(e) => setData("url" , e.target.value)} placeholder="url"/>
                <input className="bg-gray-800 rounded-md"type="text" onChange={(e) => setData("title" , e.target.value)} placeholder="title"/>
                <input className="bg-gray-800 rounded-md"type="text" onChange={(e) => setData("memo" , e.target.value)} placeholder="memo"/>
                <button type="submit">save</button>
            </form>
            <ul className="mt-10">
                {indexFolder.map((article) => (
                    <>
                        <li className="">
                            <a href={article.url} target="_blank" className="flex items-center pointer">
                                <img className="w-[30px] rounded-md mr-5"src={article.image}/>
                                <p className="text-xs mr-5">{article.title}</p>
                                <p className="font-bold text-blue-200 mr-5">{article.url}</p>
                                <p className="text-xs font-weight mr-5">{article.memo}</p>
                            </a>
                        </li> 
                    </> 
                ))}
            </ul>
        </>
    );
}

export default Show;