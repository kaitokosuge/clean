import FolderFetch from '@/Pages/Container/FolderFetch';
import SidebarCard from './SidebarCard';
import SidebarForm from './SidebarForm';
import SidebarNav from './SidebarNav';

function Sidebar() {
    return (
        <div className="fixed z-20 w-[18%] min-w-[170px] border-r bg-[#202020] border-zinc-700 h-screen">
            <FolderFetch />
            <SidebarNav />
            <SidebarCard />
        </div>
    );
}



export default Sidebar;