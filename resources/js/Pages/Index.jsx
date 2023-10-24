import Header  from "./Presentation/Common/Header/Header"
import Articles from "./Presentation/Pages/Articles"
import SidebarContainer from "./Container/SidebarContainer"

function Index() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SidebarContainer />
                <Articles />
            </div>
            
        </div>
    );
}

export default Index;