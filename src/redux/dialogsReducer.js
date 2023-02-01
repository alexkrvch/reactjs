const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

const initialState = {
    dialogsData:[
        {
            id: 1,
            name: "Alex",
            lastMessage: "someone text",
            dateMessage: "28.10.2022"
        },
        {
            id: 2,
            name: "Andy",
            lastMessage: "last message",
            dateMessage: "19.09.2022"
        },
        {
            id: 3,
            name: "Mikhail",
            lastMessage: "hi, can i ask something?",
            dateMessage: "12.04.2022"
        },
        {
            id: 4,
            name: "Ragnar",
            lastMessage: "thank you",
            dateMessage: "20.05.2021"
        },
        {
            id: 5,
            name: "Eriks",
            lastMessage: "when you finish project?",
            dateMessage: "04.01.2021"
        }
    ],
    messageData:[
        {
            id: 1,
            text: "Hi",
            dateMessage: "20.04.2022",
            img: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
            author: 1
        },
        {
            id: 2,
            text: "How are you?",
            dateMessage: "20.05.2022",
            img: "https://image.shutterstock.com/image-vector/lorem-ipsum-dolor-tag-cloud-260nw-1103263931.jpg",
            author: 2
        },
        {
            id: 3,
            text: "Are you found job?",
            dateMessage: "20.05.2022",
            img: "https://image.shutterstock.com/image-vector/lorem-ipsum-dolor-tag-cloud-260nw-1103263931.jpg",
            author: 2
        },
        {
            id: 4,
            text: "No yet, but I hope",
            dateMessage: "24.05.2022",
            img: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
            author: 1
        },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let stateCopy = {...state}
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