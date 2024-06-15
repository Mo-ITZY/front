import styles from './noticebox.module.css';
import { MdArrowForwardIos } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function NoticeBox() {
  const role = localStorage.getItem('role');

  return (
    <div>
      {role === 'USER' ? (
        <div className={styles.notice_box}>
          <div className={styles.detail_box}>
            공지사항
            <NavLink to={`../notice`}>
              <MdArrowForwardIos style={{ marginLeft: '228px', color: 'black' }} />
            </NavLink>
          </div>
          <div className={styles.detail_box}>
            1:1 문의
            <MdArrowForwardIos style={{ marginLeft: '230px' }} />
          </div>
          <div className={styles.detail_box}>
            자주 묻는 질문
            <MdArrowForwardIos style={{ marginLeft: '190px' }} />
          </div>
        </div>
      ) : (
        <div className={styles.notice_box}>
          <div>관리자 계정입니다.</div>
        </div>
      )}
    </div>
  );
}

export default NoticeBox;
