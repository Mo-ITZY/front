import styles from './Addnotice.module.css';

function Addnotice() {
  return (
    <div>
      <form action="">
        <div className={styles.noticebox}>
          <div className={styles.noticebox_title}>공지사항 작성</div>
          <div className={styles.noticebox_content}>
            <div className={styles.noticebox_content_title}>제목</div>
            <input type="text" className={styles.noticebox_content_input} />
          </div>
          <div className={styles.noticebox_content}>
            <div className={styles.noticebox_content_title}>내용</div>
            <textarea className={styles.noticebox_content_textarea} />
          </div>
          <button className={styles.noticebox_btn}>등록</button>
        </div>
      </form>
    </div>
  );
}

export default Addnotice;