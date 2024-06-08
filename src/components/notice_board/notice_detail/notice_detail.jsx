import styles from './notice_detail.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import Header from '../../header/header';

function Notice_detail() {
  const location = useLocation();
  const { state } = location;
  const item = state; // NavLink에서 전달된 item
  const dateOnly = new Date(item.writeDate).toISOString().split('T')[0];

  return (
    <div>
        <Header />
        <div className={styles.Inform_Container}>
          <div className={styles.title_location}>
            <div className={styles.title}>공지사항</div>
          </div>
          <div className={styles.notice_name}>
            <div className={styles.notice_title}>{item.title}</div>
            <div className={styles.notice_views}>{dateOnly}</div>
          </div>
          <div className={styles.main_line}></div>
          <div className={styles.notice_content}>{item.content}</div>
          <div className={styles.main_line}></div>
          <NavLink to={'/notice'}>
          <div className={styles.go_list}>목록으로</div>
          </NavLink>
        </div>
        
    </div>
  )
}

export default Notice_detail;