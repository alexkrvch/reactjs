const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

const initialState = {
    postData: [
        {
            id: 1,
            message: "It's my first post",
            date: "18.02.2022",
            countLike: 29
        },
        {
            id: 2,
            message: "My demo post",
            date: "24.02.2022",
            countLike: 14
        },
        {
            id: 3,
            message: "Hello world",
            date: "29.02.2022",
            countLike: 1
        },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if(state.newPostText!=='') {
                return {
                    ...state,
                    postData: [...state.postData, {
                        id: 4,
                        message: state.newPostText,
                        date: "26.01.2023",
                        countLike: 0
                    }],
                    newPostText: ''
                }
            }else{
                return state
            }
        case CHANGE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const changePostTextCreator = (text) => ({type: CHANGE_POST_TEXT, newPostText: text })

export default profileReducer