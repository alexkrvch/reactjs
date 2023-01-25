import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
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
]

let messageData = [
    {
        id: 1,
        text: "Hi",
        dateMessage: "20.04.2022"
    },
    {
        id: 2,
        text: "How are you?",
        dateMessage: "20.05.2022",
    },
    {
        id: 3,
        text: "Are you found job?",
        dateMessage: "20.05.2022"
    }
]

let postData = [
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
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messageData={messageData} dialogsData={dialogsData} postData={postData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
