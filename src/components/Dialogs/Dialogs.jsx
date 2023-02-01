import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
debugger
    let dialogs = props.dialogsData.map(d => <Dialog name={d.name} lastMessage={d.lastMessage} dateMessage={d.dateMessage} url={d.id} key={d.id} />)
    let messages = props.messageData.map(m => <Message id={m.id} text={m.text} dateMessage={m.dateMessage} key={m.id} author={m.author} img={m.img} />)

    let newMessageArea = React.createRef();

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onMessageChange = () => {
        props.changeMessage(newMessageArea.current.value)
    }

    const onClearMessageText = () => {
        props.changeMessage('')
    }

    return (
        <div className={s.dialogs}>
            <h1>Dialogs</h1>
            <div className={s.content_dialogs}>
                <div className={s.dialogs_list}>
                    {dialogs}
                </div>
                <div className={s.messages_list}>
                    {messages}
                    <div className={s.sendMessage}>
                        <textarea ref={newMessageArea} value={props.newMessageText} onChange={ onMessageChange }></textarea>
                        <div className={s.buttons}>
                            <button onClick={ onSendMessage }>Send message</button>
                            <button onClick={ onClearMessageText }>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs