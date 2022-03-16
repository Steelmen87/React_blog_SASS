import React from "react";
import {useSelector} from "react-redux";
import headerImg from "../assets/images/RectangleHeader.jpg"

export default function PostHeader() {
    const posts = useSelector((state) => state.postReducer)
    return <div>
        {posts.map(post => <article className="post">
            <div className="post__header post__header--preview">
                <a href="#">
                    <img className="post__preview" src={headerImg} alt="img"/>
                </a>
            </div>
            <div className="post__content">
                <h2 className="post__title">
                    <a href="#">Как писать код быстро и безболезненно.</a>
                </h2>
                <p className="post__description">
                    {post.text}
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
                <a className="post__read" href="#">читать</a>
            </div>
        </article>)}
    </div>
}
