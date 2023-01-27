import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    let state = store.getState();
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={store.addPost} changePostText={store.changePostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
