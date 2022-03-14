import React, {useState} from "react";
import SubNav from "./Subnav";

export default function Navigation({el}) {
    const [active, setActive] = useState("")
    const activeLink = () => {
        setActive("has-subnav")
    }
    const deactivate = () => {
        setActive("")
    }
    return <div onMouseLeave={deactivate} onMouseEnter={activeLink}>
        <a href="#"
           className={"nav__link" + " " + active}
           /*onMouseEnter={activeLink}*/
           onClick={active === "has-subnav" ? deactivate : activeLink}
        >{el.title}</a>
        {active && <SubNav subNav={el.subLi} deactivate={deactivate} activeLink={activeLink}/>}
    </div>
}