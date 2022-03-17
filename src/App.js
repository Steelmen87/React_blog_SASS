import './scss/style.scss';
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Main from "./components/Main";
import PostPage from "./components/PostPage";
import React from "react";
import Works from "./components/Works";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Signup from "./components/signup";
import SignIn from "./components/signin";
import Reset from "./components/reset";
import Text from "./components/Text";

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
                    {/*<PostPage/>*/}
                    {/*<Works/>*/}
                    {/*<Search/>*/}
                    {/*<Profile/>*/}
                    {/*<Signup/>*/}
                    {/*<SignIn/>*/}
                    {/*<Reset/>*/}
                    <Text/>
                </div>
            </main>
        </div>
    );
}

export default App;
