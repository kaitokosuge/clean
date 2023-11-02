import SidebarCard from './SidebarCard';
import SidebarForm from './SidebarForm';
import SidebarNav from './SidebarNav';

function Sidebar({value,setValue,folders ,formValue, setFormValue , handleFormSubmit ,handleSelectFolder}) {
    return (
        <div className="fixed z-20 w-[18%] min-w-[170px] border-r bg-[#202020] border-zinc-700 h-screen">
            <SidebarForm value={ value } setValue={ setValue }formValue={ formValue } handleFormSubmit={ handleFormSubmit } setFormValue={ setFormValue }/>
            <SidebarNav handleSelectFolder={ handleSelectFolder } folders={ folders } />
            <SidebarCard />
        </div>
    );
}

export default Sidebar;