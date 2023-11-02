import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState , useEffect } from 'react';
import SidebarNavItem from './SidebarNavItem';

function SidebarNav({folders, handleSelectFolder }) {
    console.log('sn.jsx folders', folders)
    const [ bgColor , setBgColor ] = useState(false);
    return (
        <div className="w-full h-[80%]">
            <nav className="overflow-scroll p-1 h-[100%] pl-[10%] pb-[100px]">
                <ul>
                    {folders.map((folder) => (
                        <>
                            {/* <SidebarNavItem folder={ folder }  handleSelectFolder={ handleSelectFolder } key={ folder.id }/> */}
                            <li onClick={() => {handleSelectFolder(folder.id)}} className="w-fit min-w-[100%] p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200 cursor-pointer active:scale-95" key={ folder.id }><span className='flex items-center'><LockOutlinedIcon className='mr-[5px]' fontColor='blue' fontSize='small'/><span className='block'>{folder.title}</span></span></li>
                        </>
                    ))}
                </ul>
            </nav>
        </div>
    );
}


export default SidebarNav;