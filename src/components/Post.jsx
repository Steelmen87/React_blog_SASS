import React from "react";

export default function Post() {

    return <div>
        <div className="post">
            <div className="post__content">
                <p className="post__text">
                    Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit.
                    A ab asperiores at autem, delectus
                    doloribus dolorum ea eligendi
                    ullam!
                </p>

            </div>
            <div className="post__footer">
                <ul className="post__data">
                    <li className="post-data-item">
                        <time dateTime="1987-10-10">
                            1987-10-10
                        </time>
                    </li>
                </ul>

            </div>
        </div>
    </div>
}
