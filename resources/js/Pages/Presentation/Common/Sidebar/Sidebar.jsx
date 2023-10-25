import SidebarCard from './SidebarCard';
import SidebarForm from './SidebarForm';
import SidebarNav from './SidebarNav';

function Sidebar({ folders , setFormValue , handleFormSubmit}) {
    return (
        <div className="fixed z-20 w-[18%] min-w-[170px] border-r bg-[#202020] border-zinc-700 h-screen">
            <SidebarForm handleFormSubmit={ handleFormSubmit } setFormValue={ setFormValue }/>
            <SidebarNav folders={ folders } />
            <SidebarCard />
        </div>
    );
}

export default Sidebar;