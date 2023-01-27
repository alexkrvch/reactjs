const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messageData.push({
                id: 5,
                text: state.newMessageText,
                dateMessage: "26.01.2023",
                img: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
                author: 1
            })
            state.newMessageText = ''
            return state
        case CHANGE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const changeMessageTextCreator = (text) => ({type: CHANGE_MESSAGE_TEXT, newMessageText: text})

export default dialogsReducer