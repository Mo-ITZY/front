import styles from './Editmemberinfo.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditMemberInfo() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const memberInfo = {
      password,
      name,
      email,
    };

    try {
      const response = await axios.post('http://localhost:8080/mo-itzy/mypage/update', memberInfo);

      if (response.status === 200) {
        // Handle success
        alert('회원 정보가 성공적으로 수정되었습니다.');
        navigate('/somewhere');  // navigate to a different page if needed
      } else {
        // Handle server errors
        alert('회원 정보 수정에 실패했습니다.');
      }
    } catch (error) {
      // Handle request errors
      console.error('There was an error updating the member info!', error);
      alert('회원 정보 수정 중 오류가 발생했습니다.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        비밀번호 수정
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        이름 수정
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        이메일 수정
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">수정하기</button>
    </form>
  );
}

export default EditMemberInfo;


  

