import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostCreator, changePostTextCreator} from "../../../redux/state";



const MyPosts = (props) => {
    let posts = props.state.postData.map(p => <Post message={p.message} date={p.date} countLike={p.countLike} id={p.id} key={p.id} />)
    let newPostArea = React.createRef();

    const onAddPost = () => {
        props.dispatch(addPostCreator());
    }
    const onPostChange = () => {
        props.dispatch(changePostTextCreator(newPostArea.current.value))
    }
    const onClearPostText = () => {
        props.dispatch(changePostTextCreator(''))
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <textarea onChange={ onPostChange } ref={ newPostArea } value={ props.state.newPostText } />
                <div className={s.buttons}>
                    <button onClick={ onAddPost }>Add post</button>
                    <button onClick={ onClearPostText }>Remove</button>
                </div>
            </div>
            <div className={s.latestPosts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;