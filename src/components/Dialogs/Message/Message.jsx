import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={props.author == 1 ? `${s.message_item} ${s.message_left}` : `${s.message_item} ${s.message_right}`}>
            <img alt="" src={props.img} />
            <div>
                <p>{props.text}</p>
                <p>{props.dateMessage}</p>
            </div>
        </div>
    )
}

export default Message