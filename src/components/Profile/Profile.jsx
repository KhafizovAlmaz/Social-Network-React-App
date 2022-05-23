import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import Info from "./Info";

const Profile = (props) => {
    return (<div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}    />
        <div className={s.yoy}>
            <div className={s.posts}>
                <MyPostsContainer />
            </div>
            <Info profile={props.profile}/>
        </div>
    </div>
    )
}
export default Profile;
//{props.params == props.authorizedUserId ? 123 :0}