import React from "react";

export default function Profile() {
    return <div>
        <h1 className="page__title">Профиль</h1>

        <form action="/" className="form">
            <div className="cabinet">
                <div className="cabinet__form">
                    <div className="form__group form__group--md">
                        <input
                            type="text"
                            className="form__control"
                            placeholder="Ваше имя" value="Э т о   Я!"
                        />
                        <span className="form__line"></span>
                    </div>
                    <div className="form__group form__group--md">
                        <input
                            type="email"
                            className="form__control"
                            placeholder="Ваш email" value="Email@.ru"
                        />
                        <span className="form__line"></span>
                    </div>
                    <div className="form__group form__group--md">
                        <input
                            type="password"
                            className="form__control"
                            placeholder="Новый пароль"
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
                </div>
                <div className="cabinet__avatar">
                    <img src="https://place-hold.it/150" alt="alt"/>
                    <label className="cabinet__file">
                        <input type="file"/>
                        выбрать аватар
                    </label>
                </div>
            </div>
            <div className="form__footer">
                <button className="btn btn--blue btn--sm btn--rounded">Сохранить</button>
            </div>
        </form>
    </div>
}