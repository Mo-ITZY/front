﻿import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './mainprofile.module.css';


function MainProfile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/mo-itzy/mypage', {
          headers: {
            Authorization: `${token}`
          }
        });
        console.log("user_response!!!!!: ",response);
        setUser(response.data);
        console.log("user_data!!!!!: ",user);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  return (
    <div>
      <div className={styles.main_box}>
        <div className={styles.profile}></div>
        {/* <img src={user.data.img} alt="Profile" className={styles.profile} /> */}
        {user ? (
          <>
            <div className={styles.name}>이름: {user.data.name}</div>
            <div className={styles.review}>작성하신 리뷰 : {user.data.reviewCount ?? 0}개</div>
            <div className={styles.location}>
              <NavLink to='/profile/edit'>
                <div className={styles.change}>회원정보 수정</div>
              </NavLink>
              <div className={styles.logout} onClick={handleLogout}>로그아웃</div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.name}>로그인해주세요</div>
            <div className={styles.review}>작성하신 리뷰 : 0개</div>
            <div className={styles.location}>
              <NavLink to='/login'>
                <div className={styles.logout}>로그인</div>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MainProfile;
