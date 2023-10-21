import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState , useEffect } from 'react';

function SidebarNav(props) {
    const { folders } = props;
    console.log('sn.jsx folders', folders)
    return (
        <div className="w-full h-[80%]">
            <nav className="overflow-scroll p-1 h-[100%] pl-[10%] pb-[100px]">
                <ul>
                    {folders.map((folder) => (
                        <>
                            <li className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200"><a href="" className='flex items-center'><LockOutlinedIcon className='mr-[5px]' fontColor='blue' fontSize='small'/><span className='block'>{folder.title}</span></a></li>
                        </>
                    ))}
                </ul>
            </nav>
        </div>
    );
}


export default SidebarNav;