import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={s.message_item}>
            <p>{props.text}</p>
            <p>{props.dateMessage}</p>
        </div>
    )
}

export default Message