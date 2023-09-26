import React from "react";
import { Link } from '@inertiajs/react';
import Show from './Show';

// indexはフォルダ一覧として使う
function Index(props) {
    console.log('index props',props);
    const { folders } = props;
    console.log('index folders',folders);
    return (
        <div>
            <div class="bg-slate-900 w-screen h-screen fixed"></div>
            <ul className="w-[50%]">
                {folders.map((folder,index) => (
                    <li className={index % 2 === 0 ? 'flex p-5 w-full relative z-10':'flex  p-5 w-full relative z-10 flex-row-reverse'}>
                        <Link href={`/folder/${folder.id}`} className="block" >
                            <div className="rounded-full shadow w-[200px] h-[200px]" style={{ backgroundColor: `rgb(${folder.rgb})`, }}></div>
                            <div className="flex items-center mt-5">
                                <img className="w-[30px] rounded-md mr-1"src={folder.image}/>
                                <p className="font-bold text-xs text-gray-300">{folder.title}</p>
                            </div>
                            <time className="font-bold text-xs text-gray-500 block mt-1">{folder.updated_at}</time>
                        </Link>
                    </li>   
                ))}
            </ul>
        </div>
    );
}

export default Index;