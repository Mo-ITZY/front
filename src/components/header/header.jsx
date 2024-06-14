import styles from './header.module.css';
import Header_Logo from "./img/Mo-ITZY_logo.svg?react";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={styles.header_location}>
            <NavLink to={'../main'}>
                <div><Header_Logo /></div>
            </NavLink>
        </div>
    )
}

export default Header;
