import React,{ useEffect, useState } from "react";
import { Link , useForm } from '@inertiajs/react';

function FolderForm(props) {
    const { folders } = props;
    const {data , setData} = useForm({
        key: crypto.randomUUID(),
        title:'',
        image:'https://kaiton-blog.space/img/tonr.png',
        rgb:'200,50,65,255',
        updated_at:'just now!!!'
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
                const newFolders = [data,...indexFolders]
                setIndexFolders(newFolders);
                setFetch(!fetching);
                handleCreateFolder(indexFolders)
                console.log('response-ok')
            } else {
              console.log('error-json')
            }
        } catch (error) {
            console.log('async-error')
        }
    }
    //fetching変数の状態が変化（保存処理が走ったタイミング）した時にデータを取ってきてIndexFoldersに格納する
    const [ fetching , setFetch ] = useState(true);
    useEffect(() =>{
        fetch("/get/folders")
        .then(response => response.json())
        .then(data => {setIndexFolders(data.folders)})
        .catch(error => console.error('Error fetching folders', error))
    },[fetching])
    return (
        <div className="fixed">
            <form onSubmit={handleFolder} className="z-10 block fixed">
                    <input placeholder="title"className="mt-5 text-white bg-gray-800 rounded-md" type="text" onChange= {(e) => setData("title" , e.target.value)}/>
                    {/* <input type="file" onChange={(e) => {console.log('image',e.target.files[0]);setData( "image" ,e.target.files[0])}}/> */}
                    <button type="submit" className="pointer relative z-20 bg-slate-700 rounded-md px-5 py-1">save</button>
            </form>
        </div>
    );
}


export default FolderForm;