import { 
    FOLLOW, 
    UNFOLLOW, 
    SET_USERS, 
    SET_CURRENT_PAGE, 
    SET_TOTAL_USERS_COUNT, 
    TOGGLE_IS_FETCHING, 
    TOGGLE_IS_FOLLOWING_PROGRESS
} from "./constants-users";


// action creators:
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });