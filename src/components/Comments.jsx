import React from "react";
import CommentForComments from "./CommentForComments";

export default function Comments() {
    return <div className="comments">
        <h3 className="post__subtitle">
            Обсуждение
        </h3>
        <form className="form" action="/" method="post">
            <div className="form__group">
                <textarea
                    className="form__control form__control--textarea"
                    name="comment-text"
                    placeholder="текст коментария">
            </textarea>
                <span className="form__line"></span>
            </div>

            <button
                className="btn btn--blue btn--rounded btn--sm"
                type="submit">Отправить
            </button>
        </form>
        <CommentForComments/>
    </div>
}