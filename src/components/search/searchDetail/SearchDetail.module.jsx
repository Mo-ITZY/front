import styles from './SearchDetail.module.css';
import { NavLink } from "react-router-dom";

function SearchDetail() {
  return(
    <div>
      <NavLink to='/all'>
        <div className={styles.Look_Around_Box}>각 지역축제 더보기</div>
      </NavLink>
    </div>
  );
}

export default SearchDetail

