import React from "react";

export default function SubNav({subNav, deactivate,activeLink}) {
    return <ul onMouseLeave={deactivate}>
        {subNav.map((li, i) => <li
            className="nav__sub__li"
            key={i + "subNav"}
            onClick={deactivate}
        >
            <a className="nav__item" href={li.link} >
                {li.text}
            </a>
        </li>)}
    </ul>

}