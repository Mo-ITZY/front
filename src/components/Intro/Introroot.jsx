import styles from './Introroot.module.css';
import Main_Logo from "./image/Mo_ITZY.svg?react";
import { NavLink } from "react-router-dom";

function Introroot() {
  return (
    <div>
        <div><Main_Logo /></div>
        <NavLink to='./login'>
            <div className={styles.Login_Box} >로그인</div>
        </NavLink>
        <NavLink to='/main'>
            <div className={styles.Look_Around_Box}>둘러보기</div>
        </NavLink>
    </div>
  )
}

export default Introroot
