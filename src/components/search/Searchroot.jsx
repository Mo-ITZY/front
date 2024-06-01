import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Searchroot.module.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Search_Container}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="검색어를 입력해주세요"
          className={styles.Search_Input}
        />
      </div>
      
      <div className={styles.Horizon_Line}></div>

      <div className={styles.RecentSearch_Container}>
        <div className={styles.RecentSearch_Text}>
          최근 검색어
        </div>
      </div>

      <div className={styles.City_Container}>
        <div className={styles.City_Box}>
          <NavLink>
            <div className={styles.City_Name}>
              전체
            </div>
          </NavLink>
          <NavLink>
            <div className={styles.City_Name}>
              강원
            </div>
          </NavLink>
          <NavLink>
            <div className={styles.City_Name}>
              경기
            </div>
          </NavLink>
          <NavLink>
            <div className={styles.City_Name}>
              경북
            </div>
          </NavLink>
        </div>
        <div className={styles.City_Box}>
          <NavLink>
            <div className={styles.City_Name}>
              경남
            </div>
          </NavLink>
          <NavLink>
            <div className={styles.City_Name}>
              광주
            </div>
          </NavLink>
          <NavLink>
            <div className={styles.City_Name}>
              대구
            </div>
          </NavLink>
          <NavLink>
            <div className={styles.City_Name}>
              대전
            </div>
          </NavLink>
        </div>
        <div className={styles.City_Box}>
          <NavLink to="../all">
            <div className={styles.City_Name}>
              부산
            </div>
          </NavLink>       
          <NavLink>
            <div className={styles.City_Name}>
              서울
            </div>
          </NavLink>
          <NavLink>
            <div className={styles.City_Name}>
              울산
            </div>
          </NavLink>
          <NavLink>
            <div className={styles.City_Name}>
              인천
            </div>
          </NavLink>
        </div>
        <div className={styles.City_Box}>
          <NavLink>
            <div className={styles.City_Name}>
              제주
            </div>
          </NavLink>
          <NavLink>
            <div className={styles.City_Name}>
              충북
            </div>
          </NavLink>
          <NavLink>
            <div className={styles.City_Name}>
              충남
            </div>
          </NavLink>
          <div className={styles.City_Name_Dummy}></div>
        </div>
      </div>
    </div>
  );
}

export default Search;
