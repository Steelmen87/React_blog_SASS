import {combineReducers, createStore} from "redux";
import PostReducer from "../reducers/PostReducer";

const rootReducer = combineReducers({
    postReducer:PostReducer
})
const store = createStore(rootReducer)

export default store;