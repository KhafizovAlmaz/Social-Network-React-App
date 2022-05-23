import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
    return <header className={classes.header}>
        <div className={classes.loginBlock}>
            {props.isAuth ?  <div> {props.login} - {}
                <button onClick={props.logout}>Exit</button>
            </div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>;
} 
export default Header;