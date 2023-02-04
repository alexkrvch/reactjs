import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {dispatch(followAC(userId))},
        unfollowUser: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default DialogsContainer