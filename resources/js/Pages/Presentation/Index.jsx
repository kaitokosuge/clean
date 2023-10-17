import Header from "./Common/Header/Header"
import Sidebar from "./Common/Sidebar/Sidebar"
import Footer from "./Common/Footer/Footer"
import Articles from "./Pages/Articles"

function Index() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Articles />
            <Footer />
        </div>
    );
}

export default Index;