import React, {useState} from "react";
import send from "../assets/images/send.svg"

export default function Post() {
    const[content,setContent] = useState("")
    const changeContent = (e) => {
        setContent(e.currentTarget.value)
    }

    return <div className="add-post">
        <form action="/" method="post" className="add-post__form">
            <textarea className="add-post__textarea"
                      value={content}
                      onChange={changeContent}
                      name="post-text"
                      placeholder="Напишите что-нибудь"/>
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
