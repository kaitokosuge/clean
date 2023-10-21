import { useState , useEffect } from "react";
import Sidebar from "../Presentation/Common/Sidebar/Sidebar";



function SidebarContainer() {

    const text = 'text';
    return (
        <>
            <Sidebar text = { text } />
        </>
    );
}

export default SidebarContainer;