import './scss/style.scss';
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Main from "./components/Main";

function App() {
    return (
        <div className="page">
            <div className="header">
                <Header/>
            </div>
            <aside className="sidebar">
                <Sidebar/>
            </aside>
            <main className="main">
                <div className="container">
                    <Main/>
                </div>
            </main>
        </div>
    );
}

export default App;
