import s from './UserInfo.module.css'

const UserInfo = () => {
    return (
           <div className={s.profile__info}>
                <div className={s.profileBase}>
                    <div className={s.profile__photo}>
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ice-mountain-mountains-snow-stars-background-design-template-a6af0eb69fdbbf26ec92f3dc506a7d17_screen.jpg?ts=1589741832" />
                    </div>
                    <div className={s.userinfo}>
                        <p className={s.username}>Alex</p>
                        <p className={s.description}>Description</p>
                    </div>
                </div>
            </div>
    )
}

export default UserInfo;