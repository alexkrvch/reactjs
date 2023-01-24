import s from './Profile.module.css'

const Profile = () => {
    return (
        <section className={s.profile}>
            <img src="https://images.unsplash.com/photo-1450387635522-8ecb968079bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBwYW5vcmFtYXxlbnwwfHwwfHw%3D&w=1000&q=80" />
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
                <div className={s.myPosts}>
                    <h3>My posts</h3>
                    <div className={s.newPost}>
                        <p>New post</p>
                    </div>
                    <div className={s.latestPosts}>
                        <div className={s.item}>
                            Post 1
                        </div>
                        <div className={s.item}>
                            Post 2
                        </div>
                        <div className={s.item}>
                            Post 3
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;