import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialogsData.map(d => <Dialog name={d.name} lastMessage={d.lastMessage} dateMessage={d.dateMessage} url={d.id} key={d.id} />)
    let messages = props.messageData.map(m => <Message id={m.id} text={m.text} dateMessage={m.dateMessage} key={m.id} />)

    return (
        <div className={s.dialogs}>
            <h1>Dialogs</h1>
            <div className={s.content_dialogs}>
                <div className={s.dialogs_list}>
                    {dialogs}
                </div>
                <div className={s.messages_list}>
                    {messages}
                </div>
            </div>
        </div>
    )
}

export default Dialogs