import React from "react";
import {addMessageCreator, changeMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    const sendMessage = () => {
        props.store.dispatch( addMessageCreator() );
    }

    const changeMessage = (text) => {
        props.store.dispatch( changeMessageTextCreator(text) )
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

export default DialogsContainer