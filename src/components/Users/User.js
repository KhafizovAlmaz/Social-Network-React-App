import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";

const axios = require('axios').default;


let User = ({user,followingInProgress,deleteFriend,addFriend }) => {
    return <div>
                 <div>
             <div>
                 <NavLink to={'/profile/' + user.id}>
                     <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo"
                          className={styles.photo}/>
                 </NavLink>
             </div>
             <div>
                 {user.friendship ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                         deleteFriend(user.id);
                     }}> Delete</button> :
                     <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                         //  debugger
                         addFriend(user.id);
                     }}>Add</button>}

             </div>
                   </div>
            <span>
            <span>
                <div>{user.name}</div>
            </span>
             <span>
                <div>{"user.location.country"}</div>
                 <div>{"user.location.city"}</div>
            </span>
        </span>
        
    </div>
}
export default User;




