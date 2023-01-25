import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink to={`/dialogs/${props.url}`} className={({ isActive }) => isActive ? `${s.dialogs_item} ${s.active}` : s.dialogs_item}>
            <span>{props.name}</span>
            <span>{props.lastmessage}</span>
            <span>{props.datemassage}</span>
        </NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={s.message_item}>
            <p>{props.text}</p>
            <p>{props.datemessage}</p>
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {
            id: 1,
            name: "Alex",
            lastMessage: "someone text"
        },
        {
            id: 2,
            name: "Andy",
            lastMessage: "last message"
        },
        {
            id: 3,
            name: "Mikhail",
            lastMessage: "hi, can i ask something?"
        },
        {
            id: 4,
            name: "Ragnar",
            lastMessage: "thank you"
        },
        {
            id: 5,
            name: "Eriks",
            lastMessage: "when you finish project?"
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

    return (
        <div className={s.dialogs}>
            <h1>Dialogs</h1>
            <div className={s.content_dialogs}>
                <div className={s.dialogs_list}>
                    <Dialog name="Alex" lastmessage="someone text" datemassage="28.10.2022" url="1" />
                    <Dialog name="Andy" lastmessage="last message" datemassage="19.09.2022" url="2" />
                    <Dialog name="Mikhail" lastmessage="hi, can i ask something?" datemassage="12.04.2022" url="3" />
                    <Dialog name="Ragnar" lastmessage="thank you" datemassage="20.05.2021" url="4" />
                    <Dialog name="Eriks" lastmessage="when you finish project?" datemassage="04.01.2021" url="5" />
                </div>
                <div className={s.messages_list}>
                    <Message text="Hi" datemessage="20.04.2022" />
                    <Message text="How are you?" datemessage="20.05.2022" />
                    <Message text="Are you found job?" datemessage="20.05.2022" />
                </div>
            </div>
        </div>
    )
}

export default Dialogs