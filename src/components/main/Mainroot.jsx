import styles from './Mainroot.module.css';
import { NavLink } from "react-router-dom";
import Header from '../header/header';
import Noticeboard from './noticeborad/noticeboard';

function Mainroot() {


  return (
    <div>
      <Header />
      <Noticeboard />
      <NavLink to='/allroot'>
        <div className={styles.Look_Around_Box}>각 지역축제 더보기</div>
      </NavLink>
    </div>
  )
}

export default Mainroot