import React from "react";

export default function Post({posts}) {

    return <div>
        {posts.map(post => <div className="post">
            <div className="post__content">
                <p className="post__text">
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
                </ul>

            </div>
        </div>)}
    </div>
}
