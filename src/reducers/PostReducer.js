import {v4} from "uuid";

const ADD_POST = "ADD_POST"
const InitialState = [
    {
        id: '1',
        /*title: 'Articles',*/
        text: 'Text for post',
        date: '1987-10-10'
    }
]
export default function PostReducer(state = InitialState, action) {
    switch (action.type) {
        case ADD_POST:
            return [
                ...state,
                {
                    id: v4(),
                    /*title: action.title,*/
                    text: action.text,
                    date: action.date
                }
            ]

        default:
            return state;
    }
}
export const AddPostAC = (text, date) => {
    return {type: ADD_POST, text, date}
}
