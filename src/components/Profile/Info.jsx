import React from "react";
import Preloader from "../common/preloader/Preloader";

const Info = ({profile}) => {
    const Contacts = ({contactTitle, contactValue}) => {
        return <div>
            {contactTitle}: {contactValue}
        </div>
    }
    if (!profile) {
        return <div>Loading...</div>
    }
    return <div>
            <h3>Info</h3>
            <ul>
            {profile.aboutMe ? <li>About me: {profile.aboutMe}</li> : null}
            <li>Contacts: {Object.keys(profile.contacts).map(key => {
                return (<Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>)
            })} </li>

            <li>Looking for a job: {profile.lookingForAJob ? " yes" : " no"} </li>
            {profile.lookingForAJob && <li>My skills: {profile.lookingForAJobDescription}</li>}
        </ul>
    </div>

}



export default Info;