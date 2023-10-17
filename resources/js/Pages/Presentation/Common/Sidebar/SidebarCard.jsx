import { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


function SidebarCard() {
    const [ hover , isHover ] = useState(false);
    const handleHover = () => {
        isHover(!hover);
    }
    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={ hover == true ?'bg-colorfull w-full rounded-[20px] p-5 pt-10 pb-20 mt-[-200px] duration-300' : 'bg-colorfull w-full rounded-[20px] p-5 pt-10 pb-20 mt-[18px] duration-200'}>
            <ul>
                <li className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200"><a href=""><LockOutlinedIcon className='mr-[5px]' fontSize='small'/>top </a></li>
                <li className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200"><a href=""><LockOutlinedIcon className='mr-[5px]' fontSize='small'/>profile </a></li>
                <li className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200"><a href=""><LockOutlinedIcon className='mr-[5px]' fontSize='small'/>log </a></li>
                <li className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200"><a href=""><LockOutlinedIcon className='mr-[5px]' fontSize='small'/>guild </a></li>
            </ul>
        </div>
    );
}



export default SidebarCard;