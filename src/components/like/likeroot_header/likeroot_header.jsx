
import styles from "./likeroot_header.module.css";
import { MdChevronLeft } from "react-icons/md";

function LikerootHeader() {
  const renderRelatedFestival = () => {
      return <p className={styles.title}>찜한 축제</p>;
  };

  return (
    <div>
      
      <div className={styles.header_location}>
        <div className={styles.icon}><MdChevronLeft /></div>
        {renderRelatedFestival()}
      </div>
    </div>
  );
}


export default LikerootHeader;
