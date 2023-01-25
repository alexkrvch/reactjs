import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink to={`/dialogs/${props.url}`} className={({ isActive }) => isActive ? `${s.dialogs_item} ${s.active}` : s.dialogs_item}>
            <span>{props.name}</span>
            <span>{props.lastMessage}</span>
            <span>{props.dateMessage}</span>
        </NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={s.message_item}>
            <p>{props.text}</p>
            <p>{props.dateMessage}</p>
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {
            id: 1,
            name: "Alex",
            lastMessage: "someone text",
            dateMessage: "28.10.2022"
        },
        {
            id: 2,
            name: "Andy",
            lastMessage: "last message",
            dateMessage: "19.09.2022"
        },
        {
            id: 3,
            name: "Mikhail",
            lastMessage: "hi, can i ask something?",
            dateMessage: "12.04.2022"
        },
        {
            id: 4,
            name: "Ragnar",
            lastMessage: "thank you",
            dateMessage: "20.05.2021"
        },
        {
            id: 5,
            name: "Eriks",
            lastMessage: "when you finish project?",
            dateMessage: "04.01.2021"
        }
    ]

    let messageData = [
        {
            id: 1,
            text: "Hi",
            dateMessage: "20.04.2022"
        },
        {
            id: 2,
            text: "How are you?",
            dateMessage: "20.05.2022",
        },
        {
            id: 3,
            text: "Are you found job?",
            dateMessage: "20.05.2022"
        }
    ]

    let dialogs = dialogsData.map(d => <Dialog name={d.name} lastMessage={d.lastMessage} dateMessage={d.dateMessage} url={d.id} />)
    let messages = messageData.map(m => <Message id={m.id} text={m.text} dateMessage={m.dateMessage} />)

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