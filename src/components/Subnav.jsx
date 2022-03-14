import React from "react";

export default function SubNav({subNav, deactivate}) {
    return <ul onMouseLeave={deactivate} className="subnav">
        {subNav.map((li, i) => <li
            className="nav__sub__li"
            key={i + "subNav"}
            onClick={deactivate}
        >
            <a className="nav__item" href={li.link}>
                {li.text}
            </a>
        </li>)}
    </ul>

}