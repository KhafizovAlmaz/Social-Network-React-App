import {createSelector} from "reselect";

const getUsers1 = (state) => {
    return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsers1,(users) => {
   // debugger
   return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}









