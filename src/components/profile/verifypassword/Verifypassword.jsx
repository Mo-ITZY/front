import styles from './Verifypassword.module.css';
import { useState } from 'react';
import axios from 'axios';

const VerifyPassword = ({ onClose, onVerifySuccess }) => {
  const [password, setPassword] = useState('');
  
  const handleVerify = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/password-check', { password: password },
      {
        headers: {
          Authorization: `${token}`
        }
      });

      if (response.status === 200) {
        // Verification successful
        onVerifySuccess();
        onClose();
      } else {
        console.error('비밀번호 확인 실패');
        alert('비밀번호 확인에 실패했습니다.');
      }
    } catch (error) {
      console.error('오류:', error);
      alert('비밀번호 확인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <p>비밀번호를 입력해주세요</p>
        <input
          type="password"
          className={styles.noticebox_content_input}
          placeholder='비밀번호를 입력해주세요'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleVerify} className={styles.noticebox_content_button}>확인</button>
      </div>
    </div>
  ); 
}

export default VerifyPassword;
