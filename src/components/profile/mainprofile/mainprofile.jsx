import styles from './mainprofile.module.css';

function MainProfile() {
  return (
    <div>
      <div>
          <div className={styles.main_box}>
              <div className={styles.profile}></div>
              <div className={styles.name}>OOO님</div>
              <div className={styles.review}>작성하신 리뷰 : 4개</div>
              <div className={styles.location}>
                  <div className={styles.change}>회원정보 수정</div>
                  <div className={styles.logout}>로그아웃</div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default MainProfile;
