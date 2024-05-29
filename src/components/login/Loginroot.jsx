import { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from "./Loginroot.module.css";
import Header from '../header/header';

const Loginroot = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { // 프록시 설정을 통해 요청이 백엔드로 전달되도록 수정
        loginId,
        password
      });
      
      if (response.status === 200) {
        navigate('/main'); // 로그인 성공 시 이동할 페이지
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('아이디/비밀번호가 일치하지 않습니다.');
      } else {
        console.error('Login failed:', error);
        setErrorMessage('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className={styles.login_word}>로그인</div>
        <div>
          <input type="text" value={loginId} placeholder='아이디를 입력해주세요'  onChange={(e) => setLoginId(e.target.value)} className={styles.input_box} />
        </div>
        <div>
          <input type="password" value={password} placeholder='비밀번호를 입력해주세요' onChange={(e) => setPassword(e.target.value)} className={styles.input_box} />
        </div>
        
        <div className={styles.button_location}>
          <div><button type="submit" className={styles.button}>로그인</button></div>
          <NavLink to = '../signin'>
            <div className={styles.button}>회원가입</div>
          </NavLink>
        </div>
      </form>
      {errorMessage && <div className={styles.err_message}>{errorMessage}</div>}
    </div>
  );
};

export default Loginroot;

