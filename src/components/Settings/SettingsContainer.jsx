import React from "react";
import Settings from "./Settings";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getUserProfile, saveProfile, uploadPhoto} from "../../redux/profile-reducer";


const SettingsContainer = (props) => {
    return (
        <Settings profile={props.profile}
                  uploadPhoto={props.uploadPhoto}
                  saveProfile={props.saveProfile}
        />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
});

export default compose(
    connect(mapStateToProps,{uploadPhoto,saveProfile,getUserProfile}),
   withAuthRedirect
) (SettingsContainer)