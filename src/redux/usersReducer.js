const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


const initialState = {
    usersData: [

    ],
    pageSize: 5,
    totalUsersCount: 15,
    currentPage: 2003
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: [...state.usersData.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })]
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: [...state.usersData.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })]
            }
        case SET_USERS: {
            return {...state, usersData: [...state.usersData, ...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})

export default usersReducer