import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let dialogs = props.state.dialogsData.map(d => <Dialog name={d.name} lastMessage={d.lastMessage} dateMessage={d.dateMessage} url={d.id} key={d.id} />)
    let messages = props.state.messageData.map(m => <Message id={m.id} text={m.text} dateMessage={m.dateMessage} key={m.id} author={m.author} img={m.img} />)

    let newMessageArea = React.createRef();

    const onSendMessage = () => {
        let text = newMessageArea.current.value;
        console.log(text)
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
                        <textarea ref={newMessageArea}></textarea>
                        <div className={s.buttons}>
                            <button onClick={ onSendMessage }>Send message</button>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs