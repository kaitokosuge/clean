import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';


function SidebarNavItem({handleSelectFolder,folder}) {
    return (
        <>
           <li onClick={() => {handleSelectFolder(folder.id)}} className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200 cursor-pointer active:scale-95" key={ folder.id }><span className='flex items-center'><LockOutlinedIcon className='mr-[5px]' fontColor='blue' fontSize='small'/><span className='block'>{folder.title}</span></span></li>
        </>
    );
}

export default SidebarNavItem;