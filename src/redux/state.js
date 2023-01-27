
const store = {
    _rerenderEntireTree: () => {
        console.log('Changed state');
    },
    _state:{
        profilePage: {
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
            _textAreaText: ''
        },
        dialogsPage: {
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
            ]
        },
        navSection: {
            users:[
                {
                    id: 1,
                    name: "Alex",
                    img: "https://image.shutterstock.com/image-vector/lorem-ipsum-dolor-tag-cloud-260nw-1103263931.jpg"
                },
                {
                    id: 2,
                    name: "Andy",
                    img: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg"
                },
                {
                    id: 3,
                    name: "Mikhail",
                    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ice-mountain-mountains-snow-stars-background-design-template-a6af0eb69fdbbf26ec92f3dc506a7d17_screen.jpg?ts=1589741832"
                }
            ]
        }
    },
    getState: () => {
        return store._state;
    },
    addPost: () => {
        store._state.profilePage.postData.push({
            id: 4,
            message: store._state.profilePage.textAreaText,
            date: "26.01.2023",
            countLike: 0
        })
        store._state.profilePage.textAreaText = ''
        store._rerenderEntireTree(store._state)
    },
    changePostText: (newPostText) => {
        store._state.profilePage.textAreaText = newPostText
        store._rerenderEntireTree(store._state)
    },
    subscribe: (observer) => {
        store._rerenderEntireTree = observer
    }
}

window.state = store.getState();


export default store