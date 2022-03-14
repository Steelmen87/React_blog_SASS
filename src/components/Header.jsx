import React from "react";
import Navigation from "./Navigation";

export default function Header() {
    const headList = [
        {
            title: 'Главная',
            subLi:
                [
                    {link: "#", text: "Создание сайтов",},
                    {link: "#", text: "Интернет маркет",},
                    {link: "#", text: "Продвижение видео",}]
        },
        {
            title: 'Статьи',
            subLi:
                [
                    {link: "#", text: "Мои статьи",},
                    {link: "#", text: "О мире",},
                    {link: "#", text: "Разное",}]
        },
        {
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
            title: 'Реклама',
            subLi:
                [
                    {link: "#", text: "Бесплатные сервисы",},
                    {link: "#", text: "Разное",},
                ]
        },

    ]

    return <div>
        <header className="header">
            <div className="header__left">
                <nav className="nav">
                    <ul className="nav__list">
                        {headList.map((el, i) =>
                            <li>
                                <Navigation
                                    key={i + "index"}
                                    el={el}
                                />
                            </li>)}
                    </ul>
                </nav>
            </div>
            <div className="header__right">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__profile">
                            <a href="#" className="nav__link">Профиль</a>
                        </li>
                    </ul>
                </nav>
                <form action="/" className="search">
                    <input type="text" className="search__input" placeholder="поиск по блогу"/>
                </form>
            </div>
        </header>
    </div>
}
