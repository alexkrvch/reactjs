import React from 'react';
import {addPostCreator, changePostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    const addPost = () => { store.dispatch(addPostCreator()) }
                    const updateNewPostText = (text) => { store.dispatch(changePostTextCreator(text)) }

                    return (
                        <MyPosts
                            addPost={addPost}
                            updateNewPostText={updateNewPostText}
                            posts={state.profilePage.postData}
                            newPostText={state.profilePage.newPostText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;