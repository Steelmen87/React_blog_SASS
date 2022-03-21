import './scss/style.scss';
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Main from "./components/Main";
import PostPage from "./components/PostPage";

import Works from "./components/Works";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Signup from "./components/signup";
import SignIn from "./components/signin";
import Reset from "./components/reset";
import Text from "./components/Text";
import ShareModal from "./components/modals/ShareModal";
import StoryModal from "./components/modals/storyModal";
import React, {useState} from "react";
import ContactModal from "./components/modals/ContactModal";
import {Route, Routes} from "react-router-dom";

function App() {
    const [burgerActive, setBurgerActive] = useState(false)
    const burgerToggle = () => {
        setBurgerActive(!burgerActive)
    }
    return (
        <div className={`page ${burgerActive && 'show-sidebar'}`}>
            <div className="header ">
                <Header burgerToggle={burgerToggle}/>
            </div>
            <aside className="sidebar">
                <Sidebar/>
            </aside>
            <main className="main">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/contact" element={<ContactModal/>}/>
                        <Route path="/myWorks" element={<Works/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>

                    {/*<PostPage/>*/}
                    {/* <Works/>*/}
                    {/*<Search/>*/}

                    {/*<Signup/>*/}
                    {/*<SignIn/>*/}
                    {/*<Reset/>*/}
                    {/*<Text/>*/}

                    {/* <ShareModal/>*/}
                    {/* <StoryModal/>*/}
                </div>
            </main>
        </div>
    );
}

export default App;
