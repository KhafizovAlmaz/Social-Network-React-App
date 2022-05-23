import * as React from "react";
import {addPostActionCreator, deletePost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator,deletePost})(MyPosts);

export default MyPostsContainer;