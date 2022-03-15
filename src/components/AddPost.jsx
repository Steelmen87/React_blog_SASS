import React, {useState} from "react";
import send from "../assets/images/send.svg"
import {useDispatch} from "react-redux";
import {AddPostAC} from "../reducers/PostReducer";

export default function AddPost() {
    const date = new Date()
    const dateNumber = date.getFullYear()
    const dispatch = useDispatch();
    const [content, setContent] = useState("")
    const changeContent = (e) => {
        setContent(e.currentTarget.value)
    }
    const addPost = (e) => {
        e.preventDefault();
        dispatch(AddPostAC(content,dateNumber))
        setContent('')
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
                <button className="add-post__send" onClick={addPost}>
                    <img src={send} alt="send"/>
                </button>
            </div>
        </form>
    </div>
}
