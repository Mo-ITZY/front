import styles from './Searchroot.module.css';


function Search() {
  return ( 
    <div className={styles.Container}>
      <div className={styles.Search_Container}>
        <div className={styles.Box}>
          <div className={styles.Search_Text}>
            검색어를 입력해주세요
          </div>
        </div>
      </div>
      
      <div class={styles.Horizon_Line}></div>

      <div className={styles.RecentSearch_Container}>
        <div className={styles.RecentSearch_Text}>
          최근 검색어
        </div>
      </div>

      <div className={styles.City_Container}>
        <div className={styles.City_Box}>
          <div className={styles.City_Name}>
            전체
          </div>
          <div className={styles.City_Name}>
            강원
          </div>
          <div className={styles.City_Name}>
            경기
          </div>
          <div className={styles.City_Name}>
            경북
          </div>
        </div>
        <div className={styles.City_Box}>
          <div className={styles.City_Name}>
            경남
          </div>
          <div className={styles.City_Name}>
            광주
          </div>
          <div className={styles.City_Name}>
            대구
          </div>
          <div className={styles.City_Name}>
            대전
          </div>
        </div>
        <div className={styles.City_Box}>
          <div className={styles.City_Name}>
            부산
          </div>
          <div className={styles.City_Name}>
            서울
          </div>
          <div className={styles.City_Name}>
            울산
          </div>
          <div className={styles.City_Name}>
            인천
          </div>
        </div>
        <div className={styles.City_Box}>
          <div className={styles.City_Name}>
            제주
          </div>
          <div className={styles.City_Name}>
            충북
          </div>
          <div className={styles.City_Name}>
            충남
          </div>
          <div className={styles.City_Name_Dummy}></div>
        </div>
      </div>
    </div>
  )
}

export default Search