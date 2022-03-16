import './scss/style.scss';
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Main from "./components/Main";
import PostPage from "./components/PostPage";
import React from "react";

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
                    {/*<Main/>*/}
                    <PostPage/>
                </div>
            </main>
        </div>
    );
}

export default App;
