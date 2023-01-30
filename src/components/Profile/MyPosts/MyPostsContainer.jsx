import React from 'react';
import {addPostCreator, changePostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    const addPost = () => { props.store.dispatch(addPostCreator()) }
    const updateNewPostText = (text) => { props.store.dispatch(changePostTextCreator(text)) }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            posts={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;