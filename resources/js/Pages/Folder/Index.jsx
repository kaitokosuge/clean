import React,{ useEffect, useState } from "react";
import { Link , useForm } from '@inertiajs/react';
import Menu from "../Common/Menu";
import FolderForm from "../Common/FolderForm";

// indexはフォルダ一覧として使う
function Index(props) {
    console.log('index props',props);
    const { folders } = props;
    const [ indexFolders , setIndexFolders ] = useState(folders);

    const {data , setData} = useForm({
        key: crypto.randomUUID(),
        title:'',
        image:'https://kaiton-blog.space/img/tonr.png',
        rgb:'200,50,65,255',
        updated_at:'just now!!!'
    })

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
                await getFolders();
            } else {
              console.log('error-json')
              alert('もう一度送信してください')
            }
        } catch (error) {
            console.log('async-error')
            alert('もう一度送信してください🙇')
        }
    }
    const getFolders = ()=>{
        return fetch("/get/folders")
        .then(response => response.json())
        .then(data => {setIndexFolders(data.folders)})
        .catch(error => console.error('Error fetching folders', error))
    }
    return (
        <div className="flex justify-between">
            <div class="bg-space w-screen h-screen fixed"></div>
            <div className="w-[20%]">
                {/* <FolderForm handleCreateFolder={handleCreateFolder}/> */}
                <form onSubmit={handleCreateFolder} className="z-10 block fixed">
                    <input type="text" placeholder="title" className="mt-5 text-white bg-gray-800 rounded-md" onChange= {(e) => setData("title" , e.target.value)}/>
                    <button type="submit" className="pointer relative z-20 bg-slate-700 rounded-md px-5 py-1">save</button>
                </form>
                <Menu folders = {indexFolders}/> 
            </div>
            <ul className="w-[60%]">
                {indexFolders.map((folder,index) => (
                    <li className={index % 2 === 0 ? 'flex p-5 w-full relative z-10':'flex  p-5 w-full relative z-10 flex-row-reverse'} key={folder.id}>
                        {folder.id}
                        <Link href={`/folder/${folder.key}`} className="block pointer" >
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
        </div>
        
    );
}

export default Index;