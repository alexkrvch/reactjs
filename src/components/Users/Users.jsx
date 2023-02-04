import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user_error.jpg';

const Users = (props) => {
    if(props.usersData.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=2000').then( response => {
            props.setUsers(response.data.items);
        })

    }

    return (
        <div className={s.users}>
            <h1>Users</h1>
            {props.usersData.map (u => <div key={u.id} className={s.userItem}>
                <div className={s.userItem__left}>
                    <div><img src={u.photos.small != null ? u.photos.small: userPhoto} alt='' /></div>

                </div>
                <div className={s.userItem__center}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div className={s.userItem__right}>
                    { u.followed ? <button onClick={ () => { props.unfollowUser(u.id) } }>Unfollow</button> : <button onClick={ () => { props.followUser(u.id) } }>Follow</button>}
                </div>
            </div>)}
        </div>
    )
}

export default Users