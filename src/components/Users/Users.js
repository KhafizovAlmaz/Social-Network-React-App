import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css";


const axios = require('axios').default;


let Users = (props) => {
    return <div className={styles.usersContent}>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize}/>
        <div>
        {
            props.users.map(u => <User user={u} key={u.id}
                                       followingInProgress={props.followingInProgress}
                                       deleteFriend={props.deleteFriend}
                                       addFriend={props.addFriend}/>
            )
        }
        </div>
    </div>
}
export default Users;




