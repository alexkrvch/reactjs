import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navReducer from "./navReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navSection: navReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;


export default store