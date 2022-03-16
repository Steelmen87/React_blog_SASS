import React from "react";

export default function CommentForComments() {
    return <div>
        <ul className="comments">
            <li className="comments__item">
                <div className="comments__header">
                    <img src="" alt=""/>
                    <div className="comments__name">
                        John Smite
                    </div>
                    <time className="comments__pubdate"
                          dateTime="2021-12-12">
                        1 week ago
                    </time>
                </div>
                <div className="comments__text">
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. At aut harum illo libero
                        magnam perferendis similique tempora unde
                        vero. Distinctio eveniet incidunt nam nihil
                        nostrum nulla
                        perspiciatis praesentium unde voluptatibus?</p>
                </div>
            </li>
        </ul>
    </div>
}