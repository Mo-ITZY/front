﻿import styles from './header.module.css';
import Header_Logo from "./img/Mo-ITZY_logo.svg?react";

function Header() {
    return (
        <div className={styles.header_location}>
            <div><Header_Logo /></div>
        </div>
    )
}

export default Header;
