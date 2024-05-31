import styles from './noticebox.module.css';
import { MdArrowForwardIos } from "react-icons/md";



function noticebox() {
  return (
    <div>
        <div>
            <div className={styles.notice_box}>
                <div className={styles.detail_box}>공지사항
                <MdArrowForwardIos style={{marginLeft: '230px'}} /></div>
                <div className={styles.detail_box}>1:1 문의
                <MdArrowForwardIos style={{marginLeft: '230px'}} /></div>
                <div className={styles.detail_box}>자주 묻는 질문
                <MdArrowForwardIos style={{marginLeft: '200px'}} /></div>
            </div>
        </div>
    </div>
  )
}

export default noticebox
