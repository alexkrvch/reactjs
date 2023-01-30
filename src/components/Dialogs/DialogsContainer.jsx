import React from "react";
import {addMessageCreator, changeMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {addPostCreator, changePostTextCreator} from "../../redux/profileReducer";
import MyPosts from "../Profile/MyPosts/MyPosts";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                const sendMessage = () => {
                    store.dispatch( addMessageCreator() );
                }

                const changeMessage = (text) => {
                    store.dispatch( changeMessageTextCreator(text) )
                }

                return (
                    <Dialogs dialogsData={state.dialogsPage.dialogsData}
                             messageData={state.dialogsPage.messageData}
                             sendMessage={sendMessage}
                             changeMessage={changeMessage}
                             newMessageText={state.dialogsPage.newMessageText}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer