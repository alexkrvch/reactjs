import s from './Profile.module.css'
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const BigImg = (props) => {
    return <img alt="" src={props.url} />
}

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <BigImg url="https://images.unsplash.com/photo-1450387635522-8ecb968079bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBwYW5vcmFtYXxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <div className={s.profile__info}>
                <UserInfo />
                <MyPostsContainer />
            </div>
        </section>
    )
}

export default Profile;