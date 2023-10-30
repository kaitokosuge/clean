import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState , useEffect } from 'react';

function SidebarNav({ folders }) {
    console.log('sn.jsx folders', folders)
    const handleSelectFolder = async (key) => {
        return await fetch(`/folders/${key}`)
            .then(res => res.json())
            .then(data => setFolders([data]))
            .catch(error => 'ページをリロードしてください')
    } 
    return (
        <div className="w-full h-[80%]">
            <nav className="overflow-scroll p-1 h-[100%] pl-[10%] pb-[100px]">
                <ul>
                    {folders.map((folder) => (
                        <>
                            <li onClick={() => handleSelectFolder(folder.key)}className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200 cursor-pointer active:scale-95" key={ folder.id }><span href="" className='flex items-center'><LockOutlinedIcon className='mr-[5px]' fontColor='blue' fontSize='small'/><span className='block'>{folder.title}</span></span></li>
                        </>
                    ))}
                </ul>
            </nav>
        </div>
    );
}


export default SidebarNav;