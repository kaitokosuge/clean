import React,{ useEffect, useState } from "react";
import { Link , useForm } from '@inertiajs/react';

function Menu({folders}) {
    console.log('memu.jsx folders',folders);
    return (
        <div className="fixed z-20 mt-[100px] p-5">
            {folders.map((folder) => (
                <>
                    <Link href={`/folder/${folder.key}`} className="pointer font-bold text-sm mt-[10px] flex">
                        <img src={folder.image} className="w-[20px] rounded-md mr-[10px]"/>
                        <p>{folder.title}</p>
                    </Link>
                </>
            ))}
        </div>
    );
}

export default Menu;