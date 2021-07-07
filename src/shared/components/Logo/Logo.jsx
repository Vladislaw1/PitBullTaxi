import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Logo.module.scss"
import LogoImg from "../../../images/logo.png"
function Logo(props) {
    return (
        <NavLink to="/" className={styles.logoLink}>
            <img src={LogoImg} alt="Logo" width="100px" height="50px"/>
            {/*Pit Bull Taxi*/}
        </NavLink>
    );
}

export default Logo;