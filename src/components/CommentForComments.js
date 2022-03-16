import React from "react";

export default function CommentForComments() {
    return <div>
        <ul className="comments">
            <li className="comments__item">
                <div className="comments__header">
                    <img className="comments__avatar"
                         src="https://place-hold.it/30" alt=""/>
                    <div className="comments__author">
                        <div className="comments__name">
                            John Smite
                        </div>
                        <time className="comments__pubdate"
                              dateTime="2021-12-12">
                            1 week ago
                        </time>
                    </div>
                </div>
                <div className="comments__text">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. At aut harum illo libero
                    magnam perferendis similique tempora unde
                    vero. Distinctio eveniet incidunt nam nihil
                    nostrum nulla
                    perspiciatis praesentium unde voluptatibus?
                </div>
                <button className="comments__replay ">ответить</button>
                <ul className="comments">
                    <li className="comments__item">
                        <div className="comments__header">
                            <img className="comments__avatar"
                                 src="https://place-hold.it/30" alt=""/>
                            <div className="comments__author">
                                <div className="comments__name">
                                    John Smite
                                </div>
                                <time className="comments__pubdate"
                                      dateTime="2021-12-12">
                                    1 week ago
                                </time>
                            </div>
                        </div>
                        <div className="comments__text">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. At aut harum illo libero
                            magnam perferendis similique tempora unde
                            vero. Distinctio eveniet incidunt nam nihil
                            nostrum nulla
                            perspiciatis praesentium unde voluptatibus?
                        </div>
                        <button className="comments__replay ">ответить</button>

                    </li>

                </ul>


            </li>

        </ul>
    </div>
}