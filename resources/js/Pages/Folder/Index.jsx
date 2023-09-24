import React from "react";
import { Link } from '@inertiajs/react';
import Show from './Show';

function Index(props) {
    console.log('index props',props);
    const { folders } = props;
    console.log('index folders',folders);
    return (
        <>
            <ul>
                {folders.map((folder) => (
                    <li className="flex">
                        <div>
                            <Link href={`/folder/${folder.id}`} className="flex items-center">
                                <img className="w-[30px] rounded-md mr-1"src={folder.image}/>
                                <p className="font-bold text-xs">{folder.title}</p>
                            </Link>
                        </div>
                        <Show folder={folder}/>
                    </li>   
                ))}
            </ul>
        </>
    );
}

export default Index;