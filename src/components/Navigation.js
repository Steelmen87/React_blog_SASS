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
    return <div>
        <a href="#"
           className={"nav__link" + " " + active}
           onFocus={activeLink}
           onBlur={deactivate}
        >{el.title}</a>
        {active && <SubNav subNav={el.subLi} deactivate={deactivate}/>}
    </div>
}