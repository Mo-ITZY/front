
import styles from "./likeroot_header.module.css";
import { MdChevronLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";

function LikerootHeader() {
  const renderRelatedFestival = () => {
      return <p className={styles.title}>찜한 축제</p>;
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


export default LikerootHeader;
