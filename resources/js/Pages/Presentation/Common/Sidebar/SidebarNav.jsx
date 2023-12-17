import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from '@inertiajs/react';
import { useState , useEffect } from 'react';
import SidebarNavItem from './SidebarNavItem';

function SidebarNav({folders, handleSelectFolder }) {
    console.log('sn.jsx folders', folders)
    const [ bgColor , setBgColor ] = useState(false);
    return (
        <div className="w-full h-[80%]">
            <nav className="overflow-scroll p-1 h-[100%] pl-[10%] pb-[100px]">
                <ul>
                    <li className="font-bold text-[20px] w-fit min-w-[100%] p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200 cursor-pointer active:scale-95"><Link href="/">all articles</Link></li>
                    {folders.map((folder) => (
                        <>
                            <li onClick={() => {handleSelectFolder(folder.id)}} className="w-fit min-w-[100%] text-[16px] p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200 cursor-pointer active:scale-95" key={ folder.id }><span className='flex items-center'><span className='block w-[15px] h-[15px] bg-blue-600 rounded-[5px]'></span><span className='block font-bold text-md ml-[7px]'>{folder.title}</span></span></li>
                        </>
                    ))}
                </ul>
            </nav>
        </div>
    );
}


export default SidebarNav;