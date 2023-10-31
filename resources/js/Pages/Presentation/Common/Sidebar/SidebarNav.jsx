import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState , useEffect } from 'react';
import SidebarNavItem from './SidebarNavItem';

function SidebarNav({ folders, handleSelectFolder }) {
    console.log('sn.jsx folders', folders)
    const [ bgColor , setBgColor ] = useState(false);
    return (
        <div className="w-full h-[80%]">
            <nav className="overflow-scroll p-1 h-[100%] pl-[10%] pb-[100px]">
                <ul>
                    {folders.map((folder) => (
                        <>
                            <SidebarNavItem folder={ folder }  handleSelectFolder={ handleSelectFolder } key={ folder.id }/>
                        </>
                    ))}
                </ul>
            </nav>
        </div>
    );
}


export default SidebarNav;