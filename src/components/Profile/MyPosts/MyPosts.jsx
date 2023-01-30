import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post message={p.message} date={p.date} countLike={p.countLike} id={p.id} key={p.id} />)
    let newPostArea = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = () => {
        props.updateNewPostText(newPostArea.current.value);
    }
    const onClearPostText = () => {
        props.updateNewPostText('');
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <textarea onChange={ onPostChange } ref={ newPostArea } value={ props.newPostText } />
                <div className={s.buttons}>
                    <button onClick={ onAddPost }>Add post</button>
                    <button onClick={ onClearPostText }>Remove</button>
                </div>
            </div>
            <div className={s.latestPosts}>
                { posts }
            </div>
        </div>
    )
}

export default MyPosts;