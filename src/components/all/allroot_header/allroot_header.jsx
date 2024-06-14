import PropTypes from 'prop-types'; // prop-types를 임포트합니다.
import styles from "./allroot_header.module.css";
import { MdChevronLeft } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function AllrootHeader({ keyword }) {
  const renderRelatedFestival = () => {
    if (!keyword) {
      return <p className={styles.title}>전체 축제</p>;
    }
    return <p className={styles.title}>{keyword}에 관련된 축제</p>;
  };

  return (
    <div>
      
      <div className={styles.header_location}>
        <NavLink to={`../main`}>
        <div className={styles.icon}><MdChevronLeft /></div>
        </NavLink>
        {renderRelatedFestival()}
      </div>
    </div>
  );
}

AllrootHeader.propTypes = {
  keyword: PropTypes.string // keyword prop의 유효성을 확인합니다.
};

export default AllrootHeader;
