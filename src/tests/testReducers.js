import PostReducer, {AddPostAC} from "../reducers/PostReducer";

const ADD_POST = "ADD_POST"
const InitialState = [
    {
        id: '1',
        title: 'Articles',
        text: 'Text for post',
        date: '1987-10-10'
    },
    {
        id: '2',
        title: 'Articles 2',
        text: 'Text for post 2',
        date: '1987-11-11'
    },
]

test('add', () => {
    const action = AddPostAC('new Post','Text post !')
    const state = PostReducer(InitialState,action)
    expect(state.length).toBe(3)
})