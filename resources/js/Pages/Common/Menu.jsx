import React,{ useEffect, useState } from "react";
import { Link , useForm } from '@inertiajs/react';

function Menu({folders}) {
    console.log('memu.jsx folders',folders);
    return (
        <div className="fixed z-20 mt-[100px] p-5">
            {folders.map((folder) => (
                <>
                    <Link href={`/folder/${folder.key}`} className="pointer block font-bold text-xs mt-1">{folder.title}</Link>
                </>
            ))}
        </div>
    );
}

export default Menu;