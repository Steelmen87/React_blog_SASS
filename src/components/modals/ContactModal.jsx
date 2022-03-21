import React from "react";
import close from "../../assets/images/close.png"
import { useNavigate } from "react-router-dom";

export default function ContactModal() {
    const navigate = useNavigate()
    const navigateHandle = () => {
        navigate('../', { replace: true })
    }

    return <div className="modal modal--no-scroll">
        <div className="modal__content modal__content--contact">
            <button onClick={navigateHandle}
                className="modal__close">
                <img src={close} alt="close"/>
            </button>

            <form action="/" className="form">

                <div className="form__group form__group--md">
                    <input
                        type="text"
                        className="form__control"
                        placeholder="Имя"
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
                    <textarea
                        name=""
                        className="form__control form__control--textarea"
                        placeholder="текст сообщения"
                    />
                    <span className="form__line"></span>
                </div>

                <div className="form__footer">
                    <div className="form__group form__group--md">
                        <button className="btn btn--blue btn--sm btn--rounded">Отправить</button>
                    </div>
                </div>
            </form>
            <ul className="modal__footer">
                <li>
                    e-mail: <a href="mailto:info@MyWebSite.ru">
                    info@MyWebSite.ru</a>
                </li>
                <li>
                    тел: <a href="tel:+943-323-856-32">
                    +94332385632</a>
                </li>
            </ul>

        </div>
    </div>
}