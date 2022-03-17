import React from "react"
import {useSelector} from "react-redux";

export default function Search(){
    const posts = useSelector((state) => state.postReducer)
    return <div>
        <h2 className="post__title">Результат поиска : создания сайта</h2>
        {posts.map(post => <article className="post">

            <div className="post__content">
                <h2 className="post__title">
                    <a href="#">Как писать код быстро и безболезненно.</a>
                </h2>
                <p className="post__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur earum explicabo ipsam nobis, praesentium quasi
                    quod repudiandae voluptates. Asperiores doloremque est fugiat
                    mollitia
                    natus nihil rerum ullam ut voluptate voluptatibus?
                </p>

            </div>
            <div className="post__footer">
                <ul className="post__data">
                    <li className="post-data-item">
                        <time dateTime="1987-10-10">
                            {post.date}
                        </time>
                    </li>
                    <li className="post-data-item">
                        <a href="#">создание сайтов</a>
                    </li>
                </ul>
                <a className="post__read" href="#">перейти</a>
            </div>
        </article>)}
    </div>
}