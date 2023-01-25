import s from './User.module.css'

const User = (props) => {
    return (
        <div className={s.user}>
            <img src={props.img} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default User;