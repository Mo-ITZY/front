import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './mainprofile.module.css';

function MainProfile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const [role, setRole] = useState(localStorage.getItem('role'));

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (role) {
      setUserRole(role);
      console.log("role: ", role);
      console.log("userRole", userRole);
    }

    if (!token) {
      console.error('No token found');
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8080/mo-itzy/mypage', {
          headers: {
            Authorization: `${token}`
          }
        });
        console.log("user_response!!!!!: ", response);

        setUser(response.data);
        console.log("user_data!!!!!: ", response.data);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);  // 빈 배열 추가

  const handleLogout = () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      navigate('/login');
    }
  };

  return (
    <div>
      <div className={styles.main_box}>
        <div className={styles.profile}></div>
        {user ? (
          <>
          {userRole === 'ADMIN' ? (
              <div className={styles.name}>관리자님</div>
            ): <div className={styles.name}>{user.data.name}님</div>
          }
            
            <div className={styles.review}>작성하신 리뷰 : {user.data.reviewCount ?? 0}개</div>
            <div className={styles.location}>
              {userRole === 'ADMIN' ? (
                <div className={styles.logout} onClick={handleLogout}>로그아웃</div>
              ) : (
                <>
                  <NavLink to='/verifypassword'>
                    <div className={styles.change}>회원정보 수정</div>
                  </NavLink>
                  <div className={styles.logout} onClick={handleLogout}>로그아웃</div>
                </>
              )}
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
