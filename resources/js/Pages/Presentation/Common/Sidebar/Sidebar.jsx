import SidebarFormContainer from '@/Pages/Container/SidebarFormContainer';
import SidebarNavContainer from '@/Pages/Container/SidebarNavContainer';
import SidebarCard from './SidebarCard';

function Sidebar(props) {
    const {  } = props;
    return (
        <div className="fixed z-20 w-[18%] min-w-[170px] border-r bg-[#202020] border-zinc-700 h-screen">
            <SidebarFormContainer />
            <SidebarNavContainer />
            <SidebarCard />
        </div>
    );
}

export default Sidebar;