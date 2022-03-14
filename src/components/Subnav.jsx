import React from "react";

export default function SubNav({subNav, deactivate}) {
    return <ul>
        {subNav.map((li, i) => <li key={i+"subNav"} onClick={deactivate}>
            <a
               className="nav__item" href={li.link}>
                {li.text}
            </a>
        </li>)}
    </ul>

}