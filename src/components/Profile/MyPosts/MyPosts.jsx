import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {
            id: 1,
            message: "It's my first post",
            date: "18.02.2022",
            countLike: 29
        },
        {
            id: 2,
            message: "My demo post",
            date: "24.02.2022",
            countLike: 14
        },
        {
            id: 3,
            message: "Hello world",
            date: "29.02.2022",
            countLike: 1
        },
    ]

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <textarea></textarea>
                <div className={s.buttons}>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.latestPosts}>
                <Post message="It's my first post" date="18.02.2022" countLike="29" />
                <Post message="My demo post" date="24.02.2022" countLike="14" />
                <Post message="Hello world" date="29.02.2022" countLike="1" />
            </div>
        </div>
    )
}

export default MyPosts;