// // src/Loginroot.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Loginroot = () => {
//   const [loginId, setLoginId] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {  
//     e.preventDefault();  
//     try {
//       const response = await axios.post('/api/login', {
//         loginId,
//         password
//       });
//       if (response.status === 200) {
//         navigate('/dashboard'); // 변경된 페이지 경로로 네비게이션
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setErrorMessage('Invalid username or password');
//       } else {
//         console.error('Login failed:', error);
//         setErrorMessage('An unexpected error occurred');
//       }
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
//     </div>
//   );
// };


// export default Loginroot;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        setErrorMessage('Invalid login ID or password');
        navigate('/login');
      } else {
        console.error('Login failed:', error);
        setErrorMessage('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login ID</label>
          <input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}  
    </div>
  );
};

export default Loginroot;

