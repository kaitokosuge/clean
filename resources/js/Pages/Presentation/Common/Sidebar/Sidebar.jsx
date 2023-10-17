import SidebarCard from './SidebarCard';
import SidebarForm from './SidebarForm';
import SidebarNav from './SidebarNav';

function Sidebar() {
    return (
        <div className="fixed z-10 w-[18%] min-w-[180px] border-r  border-zinc-700  h-screen">
            <SidebarForm />
            <SidebarNav />
            <SidebarCard />
        </div>
    );
}



export default Sidebar;