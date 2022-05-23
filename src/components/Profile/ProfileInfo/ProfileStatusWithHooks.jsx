import styles from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => { // аналог componentDidMount
        setStatus(props.status);
    },[props.status]);// [] - перерисовать когда изменится props.status

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
         props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span className={styles.status} onClick={activateEditMode}><em>{props.status || "---"}</em></span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode}  autoFocus={true} value={status}/>
            </div>}

        </div>
    )
}

export default ProfileStatusWithHooks;