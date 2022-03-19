import React from "react";
import sidebarHeader from "../assets/images/sidebar-header.jpg"
import insta from "../assets/images/instagram.svg"
import vk from "../assets/images/vk.svg"
import pinterest from "../assets/images/pinterest.svg"
import Navigation from "./Navigation";

export default function Sidebar() {
    const headListMobile = [
        {
            id: '1',
            title: 'Главная',
            subLi:
                [
                    {link: "#", text: "Создание сайтов",},
                    {link: "#", text: "Интернет маркет",},
                    {link: "#", text: "Продвижение видео",}]
        },
        {
            id: '2',
            title: 'Статьи',
            subLi:
                [
                    {link: "#", text: "Мои статьи",},
                    {link: "#", text: "О мире",},
                    {link: "#", text: "Разное",}]
        },
        {
            id: '3',
            title: 'Обо мне',
            subLi:
                [
                    {link: "#", text: "Коротко обо мне",},
                    {link: "#", text: "Мои наваки",},
                    {link: "#", text: "Мои проекты",},
                    {link: "#", text: "Мои хобби",},
                ]
        },
        {
            id: '4',
            title: 'Реклама',
            subLi:
                [
                    {link: "#", text: "Бесплатные сервисы",},
                    {link: "#", text: "Разное",},
                ]
        },

    ]
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
        <div className="sidebar__header">
            <img src={sidebarHeader} alt="sidebar-header"/>
        </div>
        <div className="sidebar_content">
            <div className="profile">
                <img className="profile__avatar" src="https://place-hold.it/100" alt=""/>
                <div className="profile__header">
                    <div className="profile__name">Константин Петров</div>
                    <div className="profile__prof">Blog: Front-end Developer</div>
                </div>
                {true && <nav className="nav__mobile">
                    <ul className="nav__list">
                        {headListMobile.map((el, i) =>
                            <li key={el.id}>
                                <Navigation
                                    key={i + "index"}
                                    el={el}
                                />
                            </li>)}
                    </ul>
                </nav>}

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
