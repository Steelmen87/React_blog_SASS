import React from "react";
import send from "../assets/images/send.svg"
import file from "../assets/images/photo 1.svg"
export default function Post() {
    return <div className="add-post">
        <form action="/" method="post" className="add-post__form">
            <textarea className="add-post__textarea"
                name="post-text"
                placeholder="Напишите что-нибудь"
            ></textarea>
            <div className="add-post__form-actions">
                <label className="add-post__file" htmlFor="add-post-file">
                    <input type="file" id="add-post-file"/>
                </label>
                <button className="add-post__send" type="submit">
                    <img src={send} alt="send"/>
                </button>
            </div>
        </form>
    </div>
}
