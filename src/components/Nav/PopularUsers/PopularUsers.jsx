import s from './PopularUsers.module.css'
import User from "./User/User";

const PopularUsers = (props) => {
    let users = props.state.users.map(u => <User name={u.name} img={u.img} id={u.id} key={u.id} />)

    return (
        <div className={s.popular__users}>
            <p>Popular users</p>
            <div className={s.users__list}>
                {users}
            </div>
        </div>
    )
}

export default PopularUsers;