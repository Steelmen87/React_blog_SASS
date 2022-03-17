import React from "react";

export default function Signup() {
    return <div>
        <h1 className="page__title page__title--center">Регистрация</h1>
        <form action="/" className="form form--auth">
            <div className="form__group form__group--md">
                <input
                    type="text"
                    className="form__control"
                    placeholder="Ваше имя"
                />
                <span className="form__line"></span>
            </div>
            <div className="form__group form__group--md">
                <input
                    type="email"
                    className="form__control"
                    placeholder="Ваш email"
                />
                <span className="form__line"></span>
            </div>
            <div className="form__group form__group--md">
                <input
                    type="password"
                    className="form__control"
                    placeholder="Пароль"
                />
                <span className="form__line"></span>
            </div>
            <div className="form__group form__group--md">
                <input
                    type="password"
                    className="form__control"
                    placeholder="Потвердите пароль"
                />
                <span className="form__line"></span>
            </div>
            <div className="form__footer form__footer--center">
                <div className="form__group form__group--md">
                    <button className="btn btn--blue btn--sm btn--rounded">Регистрация</button>
                </div>
                <ul className="form__footer-list">
                    <li>
                        <a href="#">войти</a>
                    </li>
                    <li>
                        <a href="#">восстановить</a>
                    </li>
                </ul>
            </div>
        </form>
    </div>
}