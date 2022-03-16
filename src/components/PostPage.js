import React from "react";
import {useSelector} from "react-redux";
import headerImg from "../assets/images/RectangleHeader.jpg"
import share from "../assets/images/share 1.svg"
import image from "../assets/images/image.jpg"

export default function PostPage() {
    /* const posts = useSelector((state) => state.postReducer)*/
    return <div>
        <article className="post">
            <div className="post__actions">
                <a href="#">вернуться назад</a>
                <a href="#">поделиться
                    <img
                        className="post__actions-icon"
                        src={share} alt="share"/></a>
            </div>
            <div className="post__header post__header--open">
                <h1 className="post__title post__title--mb0">
                    Как писать код быстро и безболезненно.
                </h1>
                <ul className="post__data">
                    <li className="post-data-item">
                        <time dateTime="1987-10-10">
                            1987-10-10
                        </time>
                    </li>
                    <li className="post-data-item">
                        <a href="#">создание сайтов</a>
                    </li>
                </ul>
            </div>
            <div className="post__content">
                <div className="post__text">
                    <h2>Title h2</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Assumenda doloribus facere illum non praesentium quas sequi
                        veniam voluptatum! Aperiam aspernatur blanditiis distinctio
                        harum ipsa ipsum maiores minus nemo quod vero!
                    </p>
                    <h3>Title h3</h3>
                    <p>
                        Lorem <a href="">ipsum dolor</a> sit amet, consectetur adipisicing elit.
                        Assumenda doloribus facere illum non praesentium quas sequi
                        veniam voluptatum! Aperiam aspernatur blanditiis distinctio
                        harum ipsa ipsum maiores minus nemo quod vero!
                    </p>
                    <h4>Title h4</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Assumenda doloribus facere illum non praesentium quas sequi
                        veniam voluptatum! Aperiam aspernatur blanditiis distinctio
                        harum ipsa ipsum maiores minus nemo quod vero!
                    </p>
                    <p>
                        <img src={image} alt=""/>
                    </p>

                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                    <ol>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ol>
                    <p>
                        <span className="fr-video">
                            <iframe
                                src="https://www.youtube.com/embed/CvEttNvty0U"
                                frameBorder="0"
                                allow="accelerometer;autoplay;clipboard-write;
                        encrypted-media;gyroscope;picture-in-picture"
                                allowFullScreen
                            />
                        </span>
                    </p>
                </div>
                <div className="related">
                    <h3 className="related__title">
                        Интересно по читать
                    </h3>
                    <ul className="related__list">
                        <li className="related__list-item">
                            <h4 className="related__list-title">
                                <a href="#">Как я сходил на FrontEnd Conf 2021</a>
                            </h4>
                            <time className="related__list-date" dateTime="2021-06-12">21.06.12</time>
                        </li>
                        <li className="related__list-item">
                            <h4 className="related__list-title">
                                <a href="#">Как я сходил на FrontEnd Conf 2021</a>
                            </h4>
                            <time className="related__list-date" dateTime="2021-06-12">21.06.12</time>
                        </li>
                        <li className="related__list-item">
                            <h4 className="related__list-title">
                                <a href="#">Как я сходил на FrontEnd Conf 2021</a>
                            </h4>
                            <time className="related__list-date" dateTime="2021-06-12">21.06.12</time>
                        </li>
                        <li className="related__list-item">
                            <h4 className="related__list-title">
                                <a href="#">Как я сходил на FrontEnd Conf 2021</a>
                            </h4>
                            <time className="related__list-date" dateTime="2021-06-12">21.06.12</time>
                        </li>

                    </ul>
                </div>

            </div>

        </article>
    </div>
}

