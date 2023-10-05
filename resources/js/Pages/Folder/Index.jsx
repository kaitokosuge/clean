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
        image:'https://kaiton-blog.space/img/tony.png',
        rgb:'10,250,255,255',
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
              alert('ページを再読み込みし、もう一度送信してください🙇')
            }
        } catch (error) {
            console.log('async-error')
            alert('もう一度送信してください🙇')
        }
    }
    const getFolders = async () => {
        return await fetch("/get/folders")
        .then(response => response.json())
        .then(data => {setIndexFolders(data.folders)})
        .catch(error => console.error('Error fetching folders', error))
    }
    useEffect(() =>{
        fetch("/get/folders")
        .then(response => response.json())
        .then(data => {setIndexFolders(data.folders)})
        .catch(error => console.error('Error fetching folders', error))
    },[])
    return (
        <div className="flex justify-between">
            <div class="bg-space w-screen h-screen fixed"></div>
            <div className="w-[20%]">
                {/* <FolderForm handleCreateFolder={handleCreateFolder}/> */}
                <form onSubmit={handleCreateFolder} className="z-10 block fixed">
                    <input type="text" placeholder="folder" className="mt-5 text-white bg-black rounded-md" onChange= {(e) => setData("title" , e.target.value)}/>
                    <button type="submit" className="pointer relative z-20 bg-black border border-gray-600 rounded-md px-1 text-gray-600 py-1">add</button>
                </form>
                <Menu folders = {indexFolders}/>
            </div>
            <ul className="w-[75%]">
                {indexFolders.map((folder,index) => (
                    // <li className={index % 2 === 0 ? 'flex p-5 w-full relative z-10 duration-500':'flex  p-5 w-full relative z-10 flex-row-reverse duration-500'} key={folder.id}>
                    <li className='flex p-5 w-full relative z-10 duration-500 mt-10' key={folder.id}>
                        {/* {folder.id} */}
                        <Link href={`/folder/${folder.key}`} className="pointer flex">
                            <div className="rounded-full shadow w-[100px] h-[100px]" style={{ backgroundColor: `rgb(${folder.rgb})`, }}></div>
                            <div>
                                <div className="flex items-center mt-5">
                                    <img className="w-[20px] rounded-md mr-1"src={folder.image}/>
                                    <p className="font-bold text-md text-gray-100">{folder.title}</p>
                                </div>
                                <time className="font-bold text-xs text-gray-500 block mt-1">{folder.updated_at}</time>
                            </div>
                        </Link>
                    </li>   
                ))}
            </ul>
        </div>
        
    );
}

export default Index;