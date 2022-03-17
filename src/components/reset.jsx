import React from "react";

export default function Reset() {
    return <div>
        <h1 className="page__title page__title--center">Вход</h1>
        <form action="/" className="form form--auth">

            <div className="form__group form__group--md">
                <input
                    type="email"
                    className="form__control"
                    placeholder="Ваш email"
                />
                <span className="form__line"></span>
            </div>


            <div className="form__footer form__footer--center">
                <div className="form__group form__group--md">
                    <button className="btn btn--blue btn--sm btn--rounded">Востановить</button>
                </div>
                <ul className="form__footer-list">
                    <li>
                        <a href="#">вход</a>
                    </li>
                    <li>
                        <a href="#">регистрация</a>
                    </li>
                </ul>
            </div>
        </form>
    </div>
}