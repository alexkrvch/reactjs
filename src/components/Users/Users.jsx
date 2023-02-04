import s from './Users.module.css'

const Users = (props) => {
    if(props.usersData.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://hair-man.ru/wp-content/uploads/2017/08/1315826245_strizhki-sergio-bossi_5-e1418133026894.jpg',
                fullName: 'Alex',
                status: 'Im olay',
                location: {
                    city: 'Polotsk',
                    country: 'Belarus'
                },
                followed: false
            },
            {
                id: 2,
                photoUrl: 'https://hair-man.ru/wp-content/uploads/2017/08/1315826245_strizhki-sergio-bossi_5-e1418133026894.jpg',
                fullName: 'Sergey',
                status: 'I like work',
                location: {
                    city: 'NY',
                    country: 'USA'
                },
                followed: true
            },
            {
                id: 3,
                photoUrl: 'https://hair-man.ru/wp-content/uploads/2017/08/1315826245_strizhki-sergio-bossi_5-e1418133026894.jpg',
                fullName: 'Andy',
                status: 'Im now busy',
                location: {
                    city: 'Berlin',
                    country: 'Germany'
                },
                followed: false
            },
            {
                id: 4,
                photoUrl: 'https://hair-man.ru/wp-content/uploads/2017/08/1315826245_strizhki-sergio-bossi_5-e1418133026894.jpg',
                fullName: 'Dmitriy',
                status: 'Go to europe',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                followed: true
            },
        ])
    }

    return (
        <div className={s.users}>
            <h1>Users</h1>
            {props.usersData.map (u => <div key={u.id} className={s.userItem}>
                <div className={s.userItem__left}>
                    <div><img src={u.photoUrl} alt='' /></div>
                    { u.followed ? <button onClick={ () => { props.unfollowUser(u.id) } }>Unfollow</button> : <button onClick={ () => { props.followUser(u.id) } }>Follow</button>}
                </div>
                <div className={s.userItem__center}>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div className={s.userItem__right}>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>)}
        </div>
    )
}

export default Users