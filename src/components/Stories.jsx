import React from "react"
import rect1 from "../assets/images/Rectangle 1.jpg"
import rect2 from "../assets/images/Rectangle 2.jpg"
import rect3 from "../assets/images/Rectangle 3.jpg"
import rect4 from "../assets/images/Rectangle 4.jpg"

export default function Stories(){
    return <div className="stories">
        <div className="stories__item">
            <img className="stories__preview" src={rect1} alt="rect1"/>
            <div className="stories__title">Отдыхаю на природе</div>
            <time className="stories__date" dateTime="2021-09-21">
                2021.09.21</time>
        </div>
        <div className="stories__item">
            <img className="stories__preview" src={rect2} alt="rect1"/>
            <div className="stories__title">Заканчиваю сложный проект</div>
            <time className="stories__date" dateTime="2021-09-21">
                2021.09.21</time>
        </div>
        <div className="stories__item">
            <img className="stories__preview" src={rect3} alt="rect1"/>
            <div className="stories__title">Переехал в новую квартиру</div>
            <time className="stories__date" dateTime="2021-09-21">
                2021.09.21</time>
        </div>
        <div className="stories__item">
            <img className="stories__preview" src={rect4} alt="rect1"/>
            <div className="stories__title">Осень заканчиваеться</div>
            <time className="stories__date" dateTime="2021-09-21">
                2021.09.21</time>
        </div>
    </div>
}