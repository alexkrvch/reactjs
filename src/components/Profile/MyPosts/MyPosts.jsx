import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.state.postData.map(p => <Post message={p.message} date={p.date} countLike={p.countLike} id={p.id} key={p.id} />)

    let newPostArea = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        props.changePostText(newPostArea.current.value)
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <textarea onChange={ onPostChange } ref={ newPostArea } value={ props.state.textAreaText } />
                <div className={s.buttons}>
                    <button onClick={ onAddPost }>Add post</button>
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