import s from "./Users.module.css";
import userPhoto from "../../assets/images/user_error.jpg";
import React from "react";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
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
            <div className={s.pagination}>
                {pages.map(p => {
                    return <span key={p} onClick={ (e) => {props.onPageChanged(p)} } className={props.currentPage === p ? s.selectPage : props.currentPage+4 < p || props.currentPage-4 > p ? s.simplePage : s.nearPage}>{p}</span>
                })}
            </div>
        </div>
    )
}

export default Users