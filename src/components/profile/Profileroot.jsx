import styles from './Profileroot.module.css';
import Mainprofile from './mainprofile/mainprofile';
import Header from '../header/header';
import Noticebox from './notice_box/noticebox';
import { useState } from 'react';
import DeleteMemberInfo from './deletemember/Deletememberinfo'; // Import the deletion component

function Profileroot() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className={styles.scroll}>
        <Header />
        <Mainprofile />
        <Noticebox />
        <div className={styles.secession} onClick={handleDeleteClick}>회원 탈퇴</div>
        {showPopup && <DeleteMemberInfo onClose={handleClosePopup} />} {/* Show popup */}
      </div>
    </div>
  );
}

export default Profileroot;
