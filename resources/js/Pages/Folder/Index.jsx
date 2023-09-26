import React,{ useEffect, useState } from "react";
import { Link } from '@inertiajs/react';
import { useForm } from "@inertiajs/react";

import Show from './Show';

// indexはフォルダ一覧として使う
function Index(props) {
    console.log('index props',props);
    const { folders } = props;
    console.log('index folders',folders);
    //保存するものは一旦titleのみでOK
    const {data , setData} = useForm({
        title:'',
        image:'https://kaiton-blog.space/img/tony.png',
        updated_at:'just now',
        rgb:'255,255,255,255',

    })
    //folder一覧のfoldersの管理
    const [ indexFolders , setIndexFolders ] = useState(folders)
    const handleCreateFolder = async (e) => {
        e.preventDefault();
        let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
        try {
            const response = await fetch('/folder',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token,
                },
                //folderのオブジェクトをjsonに変換して送る
                body: JSON.stringify(data),
            })
            if (response.ok) {
                const newFolders = [...indexFolders,data]
                setIndexFolders(newFolders);
                console.log('response-ok')
            } else {
              console.log('error-json')
            }
        } catch (error) {
            console.log('async-error')
        }
    }
    return (
        <div>
            <a href="/create" className="text-white">create folder</a>
            <div class="bg-slate-900 w-screen h-screen fixed"></div>
            <ul className="w-[50%]">
                {indexFolders.map((folder,index) => (
                    <li className={index % 2 === 0 ? 'flex p-5 w-full relative z-10':'flex  p-5 w-full relative z-10 flex-row-reverse'}>
                        <Link href={`/folder/${folder.id}`} className="block" >
                            <div className="rounded-full shadow w-[200px] h-[200px]" style={{ backgroundColor: `rgb(${folder.rgb})`, }}></div>
                            <div className="flex items-center mt-5">
                                <img className="w-[20px] rounded-md mr-1"src={folder.image}/>
                                <p className="font-bold text-xs text-gray-300">{folder.title}</p>
                            </div>
                            <time className="font-bold text-xs text-gray-500 block mt-1">{folder.updated_at}</time>
                        </Link>
                    </li>   
                ))}
            </ul>
            <form onSubmit={handleCreateFolder} className="absolute z-10">
                <h2>title</h2>
                <input className="text-black"type="text" onChange= {(e) => setData("title" , e.target.value)}/>
                <button type="submit" className="pointer">保存</button>
            </form> 
        </div>
        
    );
}

export default Index;