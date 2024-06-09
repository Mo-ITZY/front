import styles from './Mainroot.module.css';
import { NavLink } from "react-router-dom";
import Header from '../header/header';
import Noticeboard from './noticeborad/noticeboard';
import Pick from './pick/pick';

function Mainroot() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.scroll}>
        <div className={styles.pickTitle}>MoItzy-Pick</div>
        <Pick className={styles.pick} />
        <div className={styles.btn_location}>
          <Noticeboard />
          <NavLink to='/allroot'>
            <div className={styles.Look_Around_Box}>각 지역축제 더보기</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Mainroot;
