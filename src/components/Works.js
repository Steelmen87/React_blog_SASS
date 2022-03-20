import React from "react"
import rectangle from "../assets/images/Rectangle 21.jpg"
import Works575 from "../assets/images/Works575.jpg"

export default function Works() {
    return <div>
        <h1 className="page__title">Мои работы</h1>
        <article className="work">
            <div className="work__preview">
                <picture>
                    <source srcSet={Works575} media="(max-width:575px)"/>
                    <img src={rectangle} alt="rectangle"/>
                </picture>
            </div>
            <div className="work__content">
                <h2 className="work__title">
                    <a href="#" target="_blank">Google book</a>
                </h2>
                <div className="work__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab beatae et facilis fuga, nisi officia repellat. Culpa
                        incidunt inventore iste quibusdam reiciendis!
                        Ad laboriosam nobis officia qui quia sunt ullam!</p>
                </div>
                <ul className="tags">
                    <li className="tags__item">дизайн</li>
                    <li className="tags__item">содание сайта</li>
                    <li className="tags__item">SMM</li>
                </ul>
                <div className="work__footer">
                    <a href="#" className="btn btn--blue btn--rounded btn--sm">
                        Перейти на сайт
                    </a>
                </div>
            </div>
        </article>
    </div>
}