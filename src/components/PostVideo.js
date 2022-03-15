import React from "react";
import {useSelector} from "react-redux";

export default function PostVideo() {
    const posts = useSelector((state) => state.postReducer)
    return <div>
        {posts.map(post => <article className="post">
            <div className="post__header post__header--video">
                <div className="embed">
                    <iframe
                        src="https://www.youtube.com/embed/CvEttNvty0U"
                        frameborder="0"
                        allow="accelerometer;autoplay;clipboard-write;
                        encrypted-media;gyroscope;picture-in-picture"
                        allowfullscreen
                    />
                </div>
            </div>
            <div className="post__content">
                <h2 className="post__title">
                    <a href="#">Купить новый ноутбук за 150 к</a>
                </h2>

            </div>
            <div className="post__footer">
                <ul className="post__data">
                    <li className="post-data-item">
                        <time dateTime="1987-10-10">
                            {post.date}
                        </time>
                    </li>
                    <li className="post-data-item">
                        <a href="#">пордвижение видео</a>
                    </li>
                </ul>
                <a className="post__read" href="#">оставить комментарий</a>
            </div>
        </article>)}
    </div>
}
