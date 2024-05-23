import styles from './Profileroot.module.css';
import { NavLink } from "react-router-dom";
import Header from '../header/header';

function Mainroot() {
  return (
    <div>
        <Header />
        <NavLink to='/profile'>
          <div className={styles.Look_Around_Box}>프로필</div>
        </NavLink>
    </div>
  )
}

export default Mainroot
