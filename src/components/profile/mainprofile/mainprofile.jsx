import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/authprovider'; // AuthProvider 파일 경로에 맞게 수정해야 합니다.
import styles from './mainprofile.module.css';

function MainProfile() {
  const { token, deleteToken } = useAuth();
  const navigate = useNavigate();

  // 토큰이 있는 경우 토큰에 맞는 이름을 설정
  const [name, setName] = useState(token ? '로그인 됨' : '로그인해주세요');
  const [buttonLabel, setButtonLabel] = useState(token ? '로그아웃' : '로그인');

  useEffect(() => {
    setName(token ? '로그인 됨' : '로그인해주세요');
    setButtonLabel(token ? '로그아웃' : '로그인');
  }, [token]);

  // 로그인 또는 로그아웃 버튼 클릭 핸들러
  const handleButtonClick = () => {
    if (token) {
      console.log("토큰값", token);
      deleteToken();
    } else {
      console.log("토큰값", token);
      navigate('../login');
    }
  };

  return (
    <div>
      <div>
        <div className={styles.main_box}>
          <div className={styles.profile}></div>
          <div className={styles.name}>{name}</div>
          <div className={styles.review}>작성하신 리뷰 : 4개</div>
          <div className={styles.location}>
            <div className={styles.change}>회원정보 수정</div>
            <button className={styles.logout} onClick={handleButtonClick}>{buttonLabel}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
