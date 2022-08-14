import React from 'react';
import {connect} from 'react-redux';
import {
    addFriend,
    deleteFriend,
    setCurrentPage,
   toggleFollowingProgress, getUsers
} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress, getUsersS, getUsersSelector
} from "../../redux/users-selectors";


const axios = require('axios').default;


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        const {currentPage,pageSize} = this.props; //деструктуризация
        this.props.getUsers(currentPage, pageSize);

    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
       this.props.getUsers(pageNumber, pageSize);

    }
    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            deleteFriend={this.props.deleteFriend}
            addFriend={this.props.addFriend}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }}

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {
            addFriend,
            deleteFriend,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers, //:getUsersThunkCreator
        }
    )
) (UsersAPIComponent);

