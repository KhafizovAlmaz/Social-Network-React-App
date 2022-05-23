import classes from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.png";
import Preloader from "../../../common/preloader/Preloader";
import React from "react";

const Post = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
      <div className={classes.posts}>
        <div className={classes.postHeader}>
            <img src={props.profile.photos.large || userPhoto} alt={userPhoto}/>
            <h4>{props.profile.fullName}</h4>
        </div >
          <span> {props.message}</span>
        <div>
         {props.like} like
        </div>
       
    </div>
   )
} 
export default Post;