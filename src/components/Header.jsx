import React from "react";
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";

export default function Header({burgerToggle}) {
    const headList = [
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

    return <div>
        <header className="header">
            <div className="header__left">
                <nav className="nav">
                    <ul className="nav__list">
                        {headList.map((el, i) =>
                            <li key={el.id}>
                                <Navigation
                                    key={i + "index"}
                                    el={el}
                                />
                            </li>)}
                    </ul>
                </nav>
                <button className="burger {active}" onClick={burgerToggle}>
                    <span>Открыть навигацию</span>
                </button>
            </div>

            <div className="header__right">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__profile">
                            <NavLink to="/profile" className="nav__link">Профиль</NavLink>
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
