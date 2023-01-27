import reportWebVitals from './reportWebVitals';
import state, {addPost, changePostText, subscribe} from './redux/state';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} changePostText={changePostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
