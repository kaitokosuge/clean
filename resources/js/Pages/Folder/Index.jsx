import React from "react";
import { Link } from '@inertiajs/react';

function Index(props) {
    console.log('index props',props);
    const { folders } = props;
    console.log('index folders',folders);
    return (
        <>
            <ul>
                {folders.map((folder) => (
                    <li>
                        <Link href={`/folder/${folder.id}`} className="flex items-center">
                            <img className="w-[100px]"src={folder.image}/>
                            <p>{folder.title}</p>
                        </Link>
                    </li>   
                ))}
            </ul>
        </>
    );
}

export default Index;