import s from './Dialog.module.css'
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

export default Dialog