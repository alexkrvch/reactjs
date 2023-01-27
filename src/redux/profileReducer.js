const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            if(state.newPostText!=='') {
                state.postData.push({
                    id: 4,
                    message: state.newPostText,
                    date: "26.01.2023",
                    countLike: 0
                })
                state.newPostText = ''
            }
            return state
        case CHANGE_POST_TEXT:
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const changePostTextCreator = (text) => ({type: CHANGE_POST_TEXT, newPostText: text })

export default profileReducer