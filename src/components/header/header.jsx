import styles from './header.module.css';
import Header_Logo from "./img/Mo-ITZY_logo.svg?react";

function header() {
    return (
      <div className={styles.header_location}>
          <div className={styles.logo_location}><Header_Logo /></div>
          <div className={styles.header_box}></div>
      </div>
    )
  }
  
  export default header
  