import React from "react";
import Stories from "./Stories";
import Post from "./Post";
import rect1 from "../assets/images/Rectangle 1.jpg"
import rect2 from "../assets/images/Rectangle 2.jpg"
import rect3 from "../assets/images/Rectangle 3.jpg"
import rect4 from "../assets/images/Rectangle 4.jpg"

export default function Main() {
    const stories= [
        {
            src:rect1,
            title:'Отдыхаю на природе',
            dateTime:'2021-09-21'
        },
        {
            src:rect2,
            title:'Заканчиваю сложный проект',
            dateTime:'2021-09-22'
        },
        {
            src:rect3,
            title:'Переехал в новую квартиру',
            dateTime:'2021-09-23'
        },
        {
            src:rect4,
            title:'Осень заканчиваеться',
            dateTime:'2021-09-24'
        },
    ]
    return <div>
        <Stories stories={stories}/>
        <Post/>
    </div>
}
