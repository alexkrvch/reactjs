import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root'));


let state = store.getState();
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App state={state} />
        </Provider>
    </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
