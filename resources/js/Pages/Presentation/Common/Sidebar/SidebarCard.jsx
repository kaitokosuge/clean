import { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from '@inertiajs/react'


function SidebarCard() {
    const [ hover , isHover ] = useState(false);
    const handleHover = () => {
        isHover(!hover);
    }
    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={ hover == true ? 'bg-colorfull w-[150%] rounded-[20px] p-5 pt-10 pb-20 mt-[-250px] duration-300 overflow-scroll h-[400px]' : 'bg-colorfull w-full rounded-[20px] p-5 pt-10 pb-20 mt-[25px] h-[400px] duration-700'}>
            <ul>
                <li className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200 font-bold text-2xl"><Link href="/top" className='w-full block'><LockOutlinedIcon className='mr-[5px]' fontSize='small'/>top </Link></li>
                <li className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200 font-bold text-2xl"><a href=""><LockOutlinedIcon className='mr-[5px]' fontSize='small'/>profile </a></li>
                <li className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200 font-bold text-2xl"><a href=""><LockOutlinedIcon className='mr-[5px]' fontSize='small'/>log </a></li>
                <li className="p-1 rounded-[10px] py-[8px] duration-200 hover:bg-zinc-700 hover:duration-200 font-bold text-2xl"><a href=""><LockOutlinedIcon className='mr-[5px]' fontSize='small'/>guild </a></li>
            </ul>
        </div>
    );
}



export default SidebarCard;