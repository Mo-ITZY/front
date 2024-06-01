import { NavLink } from 'react-router-dom';
import styles from './SearchDetail.module.css';

function SearchDetail() {
  return(
    <NavLink to="../all">
            <div className={styles.City_Name}>
              부산
            </div>
          </NavLink>   
  )
}

export default SearchDetail;