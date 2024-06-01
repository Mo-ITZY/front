import styles from './Profileroot.module.css';
import Mainprofile from './mainprofile/mainprofile';
import Header from '../header/header';
import Noticebox from './notice_box/noticebox';

function profileroot() {
  return (
    <div>
        <div className={styles.scroll}>
          <Header />
          <Mainprofile />
          <Noticebox />
          <div className={styles.secession}>회원 탈퇴</div>
        </div>
    </div>
  )
}

export default profileroot
