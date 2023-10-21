import { useState , useEffect } from "react";
import SidebarNav from "../Presentation/Common/Sidebar/SidebarNav";

// export const getFolder = async () => {
//     const [ folders , setFolders ] = useState([]);
//     const response = await fetch('/get/folders', {
//         method: "get"
//     });
//     setFolders(response.json().folders)
// };

function SidebarNavContainer() {
    const [ folders , setFolders ] = useState([]);
    const folderFetch = () => {
        useEffect(() => {
            fetch('/get/folders')
            .then(res => res.json())
            .then(data => {
                setFolders(data.folders)
            })
            .catch(error => console.error('Error fetching folders', error))
        },[])
    }
    folderFetch();
    console.log('folders',folders);
    return (
        <SidebarNav folders={folders}/>
    );
}

export default SidebarNavContainer;