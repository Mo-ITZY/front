import styles from './Profileroot.module.css';
import Mainprofile from './mainprofile/mainprofile';
import Header from '../header/header';
import Noticebox from './notice_box/noticebox';
import { useState } from 'react';
import DeleteMemberInfo from './deletemember/Deletememberinfo'; // 삭제 컴포넌트 import

function Profileroot() {
  const [showPopup, setShowPopup] = useState(false);
  const role = localStorage.getItem('role');

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
        <div>
          {role === 'USER' ? (
            <>
              <div className={styles.secession} onClick={handleDeleteClick}>회원 탈퇴</div>
              {showPopup && <DeleteMemberInfo onClose={handleClosePopup} />} {/* 팝업 표시 */}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Profileroot;
