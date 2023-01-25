import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.postData.map(p => <Post message={p.message} date={p.date} countLike={p.countLike} id={p.id} key={p.id} />)

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
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;