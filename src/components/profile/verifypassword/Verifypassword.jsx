import { useState } from 'react';
import styles from './Verifypassword.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../header/header';

const VerifyPassword = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    if (passwordCheck === '') {
      setError('비밀번호를 입력하세요.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/mo-itzy/password-check',
        { password: passwordCheck },
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      console.log(response);
      
      if (response.data.status === "OK") {
        navigate('/profile/edit'); 
      } else {
        setError('비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('비밀번호 확인 중 오류 발생:', error);
      setError('비밀번호 확인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.modal}>
      <Header />
      <div className={styles.modal_content}>
        <div className={styles.title}>비밀번호 확인</div>
        <div className={styles.Information}>회원정보를 수정하기 위해서 비밀번호를 다시 입력해주세요</div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            placeholder="비밀번호를 다시 입력하세요."
            className={styles.input_box}
          />
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.verify_btn}>확인</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyPassword;
