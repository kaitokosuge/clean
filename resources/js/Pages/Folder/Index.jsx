import React,{ useEffect, useState } from "react";
import { Link } from '@inertiajs/react';
import { useForm } from "@inertiajs/react";

import Show from './Show';

// indexはフォルダ一覧として使う
function Index(props) {
    console.log('index props',props);
    const { folders } = props;
    console.log('index folders',folders);
    const {data , setData} = useForm({
        key: crypto.randomUUID(),
        title:'',
        image:'https://kaiton-blog.space/img/tonr.png',
        rgb:'25,25,145,255',
        updated_at:'just now!!!'
    })
    //folder一覧のfoldersの管理
    const [ indexFolders , setIndexFolders ] = useState(folders)
    const handleCreateFolder = async (e) => {
        // console.log('e',e);
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
                const newFolders = [data,...indexFolders]
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
        <div className="flex">
            <div class="bg-space w-screen h-screen fixed"></div>
            <ul className="w-[50%]">
                {indexFolders.map((folder,index) => (
                    <li className={index % 2 === 0 ? 'flex p-5 w-full relative z-10':'flex  p-5 w-full relative z-10 flex-row-reverse'} key={folder.key}>
                        <Link href={`/folder/${folder.key}`} className="block" >
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
            <form onSubmit={handleCreateFolder} className="z-10 block fixed">
                <h2>title</h2>
                <input className="text-black" type="text" onChange= {(e) => setData("title" , e.target.value)}/>
                {/* <input type="file" onChange={(e) => {console.log('image',e.target.files[0]);setData( "image" ,e.target.files[0])}}/> */}
                <button type="submit" className="pointer relative z-20">保存</button>
            </form> 
        </div>
        
    );
}

export default Index;