import styles from './likeroot.module.css';
import { NavLink } from "react-router-dom";
import Header from '../header/header';

function likeroot() {
  return (
    <div>
        <Header />
        <NavLink to='/profile'>
          <div className={styles.Look_Around_Box}>찜</div>
        </NavLink>
    </div>
  )
}

export default likeroot
