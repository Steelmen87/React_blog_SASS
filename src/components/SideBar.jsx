import React from "react";
import sidebarHeader from "../assets/images/sidebar-header.jpg"
import insta from "../assets/images/instagram.svg"
import vk from "../assets/images/vk.svg"
import pinterest from "../assets/images/pinterest.svg"

export default function Sidebar() {
    const socials = [
        {
            href: "#",
            img: vk,
            alt: "vk Petrov Konstantin"
        },
        {
            href: "#",
            img: insta,
            alt: "pinterest Petrov Konstantin"
        },
        {
            href: "#",
            img: pinterest,
            alt: "instagram Petrov Konstantin"
        },
    ]
    return <div>
        <div className="sidebar_header">
            <img src={sidebarHeader} alt="sidebar-header"/>
        </div>
        <div className="sidebar_content">
            <div className="profile">
                <img className="profile__avatar" src="https://place-hold.it/100" alt=""/>
                <div className="profile__name">Константин Петров</div>
                <div className="profile__prof">Blog: Front-end Developer</div>
                <ul className="social">
                    {socials.map(social => <li className="social__item">
                        <a className="social__link" href={social.href} target="_blank">
                            <img src={social.img} alt={social.alt}/>
                        </a>
                    </li>)}
                </ul>
                <div className="profile__text">
                    <p>
                        Front-end разработчик. Практик верстки сайтов.
                        Созданием сайтов занимаюсь с 2020 года.
                        Работал в нескольких ИТ компаниях.
                    </p>
                </div>
            </div>
        </div>
        <div className="sidebar_footer">
            <a href="#" className="btn btn--red">Мои работы</a>
            <button type="button" className="btn btn--blue">Написать мне</button>
        </div>
    </div>
}
