import React from "react";
import {addMessageCreator, changeMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(addMessageCreator())},
        changeMessage: (text) => {dispatch(changeMessageTextCreator(text))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer