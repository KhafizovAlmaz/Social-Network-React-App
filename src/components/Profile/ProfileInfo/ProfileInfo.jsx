import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import React from "react";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
    <div>
        <div className={classes.content}>
            <img src='https://img5.goodfon.ru/original/3360x1050/b/e0/space-galaxy-nebula.jpg'/>
        </div>
        <div className={classes.ava}>
            <img src={props.profile.photos.large || userPhoto}/>
            <h2>{props.profile.fullName}</h2>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
        <div>
        </div>
    </div>
   )
} 
export default ProfileInfo;