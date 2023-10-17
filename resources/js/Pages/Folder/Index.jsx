import React,{ useEffect, useState } from "react";
import { Link , useForm } from '@inertiajs/react';
import Menu from "../Common/Menu";
import FolderForm from "../Common/FolderForm";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Drawer from '@mui/material/Drawer';
import Popover from '@mui/material/Popover';
import Folder from "./Folder";

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
    
    const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };
  
const [isHover , setIsHover] = useState(false);
  const handleMouseOver = () => {
    console.log('hover')
    setIsHover(!isHover);
  }
 
  const [isToastOpen , setIsToastOpen] = useState(false);
  const handleBtnClick = () => {
    setIsToastOpen(!isToastOpen);
    setTimeout(() => {
        setIsToastOpen(false);
    },4000);
  }
  
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
            
    {/* <div>
      <button
        aria-owns={open ? 'menu' : undefined}
        aria-haspopup="true"
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="btn--white"
      >
        Hover Me
      </button>
      <Popover
        id="menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleMouseLeave}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: '16px' }}>
          {/* メニューの内容をここに配置 
          <div>Menu Item 1</div>
          <div>Menu Item 2</div>
          <div>Menu Item 3</div>
        </div>
      </Popover>
    */}
    <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}className={isHover == true ? "fixed bottom-[10px] bg-white h-[300px] w-[200px] pointer duration-200 z-50":"fixed bottom-[-260px] bg-white h-[300px] w-[200px] pointer duration-500 z-50"}>
        <ul>
            <li>hello</li>
            <li>hello2</li>
        </ul>
    </div>
    
    <button onClick={handleBtnClick} className="text-white top-[100px] absolute z-10">click me</button>
    <div className={ isToastOpen == true ? "p-10 bg-green-400 text-green-50 block absolute z-70" : "p-10 bg-green-400 text-green-50 hidden absolute z-70"}>hello i m toast</div>
                {indexFolders.map((folder,index) => (
                    // <li className={index % 2 === 0 ? 'flex p-5 w-full relative z-10 duration-500':'flex  p-5 w-full relative z-10 flex-row-reverse duration-500'} key={folder.id}>
                    <Folder folder={folder} key={folder.id} />
                ))}
            </ul>
        </div>
        
    );
}
export default Index;