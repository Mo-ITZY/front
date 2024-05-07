import styles from './Mainroot.module.css';
import { NavLink } from "react-router-dom";

function Mainroot() {
  return (
    <div>
          <NavLink to='/all'>
            <div className={styles.Look_Around_Box}>각 지역축제 더보기</div>
        </NavLink>
    </div>
  )
}

export default Mainroot
