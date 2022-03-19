import './scss/style.scss';
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Main from "./components/Main";
import PostPage from "./components/PostPage";
import React, {useState} from "react";
import Works from "./components/Works";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Signup from "./components/signup";
import SignIn from "./components/signin";
import Reset from "./components/reset";
import Text from "./components/Text";
import ContactModal from "./components/modals/ContactModal";
import ShareModal from "./components/modals/ShareModal";
import StoryModal from "./components/modals/storyModal";

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
                    <Main/>
                    {/*<PostPage/>*/}
                    {/*<Works/>*/}
                    {/*<Search/>*/}
                    {/*<Profile/>*/}
                    {/*<Signup/>*/}
                    {/*<SignIn/>*/}
                    {/*<Reset/>*/}
                    {/*<Text/>*/}
                    {/* <ContactModal/>*/}
                    {/* <ShareModal/>*/}
                    {/*<StoryModal/>*/}
                </div>
            </main>
        </div>
    );
}

export default App;
