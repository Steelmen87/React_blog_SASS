import React from "react"

export default function Stories({stories}) {
    return <div className="stories">
        {stories.map(st => <div className="stories__item">
            <img className="stories__preview" src={st.src} alt={st.src}/>
            <div className="stories__title">{st.title}</div>
            <time className="stories__date" dateTime={st.dateTime}>
                {st.dateTime}
            </time>
        </div>)}
    </div>
}