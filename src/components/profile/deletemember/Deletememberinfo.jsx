// // import styles from './Deletememberinfo.module.css';
// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const Deletememberinfo = ({ onClose }) => {
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const validationPassword = () => {
// //     const token = localStorage.getItem('token');
// //     if (!token) {
// //       console.error('No token found');
// //       return;
// //     }

// //     try {
// //       axios.post('http://localhost:8080/mo-itzy/password-check', { password },
// //       {
// //         headers: {
// //           Authorization: `${token}`
// //         }
// //       })
// //     } catch (error) {
// //       console.error('오류:', error);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     const token = localStorage.getItem('token');
// //     if (!token) {
// //       console.error('No token found');
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('http://localhost:8080/mo-itzy/mypage/delete', { password },
// //       {
// //         headers: {
// //           Authorization: `${token}`
// //         }
// //       });

// //       console.log('Response:', response);

// //       if (response.status === 200) { // 탈퇴 성공
// //         console.log(response)
// //         localStorage.removeItem('token');
// //         console.log('탈퇴 성공');
// //         navigate('/'); // 처리 후 이동
// //       } else { // 탈퇴 실패 
// //         console.error('탈퇴 실패');
// //       }
// //     } catch (error) {
// //       console.error('오류:', error);
// //     }
// //   };

// //   return (
// //     <div className={styles.popup}>
// //       <div className={styles.popupContent}>
// //         <button className={styles.closeButton} onClick={onClose}>X</button>
// //         <p>정말 탈퇴하시겠습니까? 비밀번호를 입력해주세요</p>
// //         <input
// //           type="password"
// //           className={styles.noticebox_content_input}
// //           placeholder='비밀번호를 입력해주세요'
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button onClick={validationPassword}>비밀번호 확인</button>
// //         <button onClick={handleDelete} className={styles.noticebox_content_button}>탈퇴하기</button>
// //         <button onClick={onClose} className={styles.cancelButton}>취소</button> {/* 취소 버튼 추가 */}
// //       </div>
// //     </div>
// //   ); 
// // }

// // export default Deletememberinfo;



// import styles from './Deletememberinfo.module.css';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Deletememberinfo = ({ onClose }) => {
//   const [password, setPassword] = useState('');
//   const [isPasswordValid, setIsPasswordValid] = useState(false);
//   const navigate = useNavigate();

//   const validationPassword = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       console.error('No token found');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/mo-itzy/password-check', { password },
//       {
//         headers: {
//           Authorization: `${token}`
//         }
//       });

//       console.log('Response:', response);

//       if (response.data.status === 'BAD_REQUEST') {
//          setIsPasswordValid(false);
//       } else {
//         setIsPasswordValid(true);
//       }

//     } catch (error) {
//       console.error('오류:', error);
//       setIsPasswordValid(false);
//     }
//   };

//   const handleDelete = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       console.error('No token found');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/mo-itzy/mypage/delete', { password },
//       {
//         headers: {
//           Authorization: `${token}`
//         }
//       });

//       console.log('Response:', response);

//       if (response.status === 200) { // 탈퇴 성공
//         console.log(response)
//         localStorage.removeItem('token');
//         console.log('탈퇴 성공');
//         navigate('/'); // 처리 후 이동
//       } else { // 탈퇴 실패 
//         console.error('탈퇴 실패');
//       }
//     } catch (error) {
//       console.error('오류:', error);
//     }
//   };

//   return (
//     <div className={styles.popup}>
//       <div className={styles.popupContent}>
//         <button className={styles.closeButton} onClick={onClose}>X</button>
//         <p>정말 탈퇴하시겠습니까? 비밀번호를 입력해주세요</p>
//         <input
//           type="password"
//           className={styles.noticebox_content_input}
//           placeholder='비밀번호를 입력해주세요'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={validationPassword}>비밀번호 확인</button>
//         {isPasswordValid && (
//           <button onClick={handleDelete} className={styles.noticebox_content_button}>탈퇴하기</button>
//         )}
//         <button onClick={onClose} className={styles.cancelButton}>취소</button>
//       </div>
//     </div>
//   );
// }

// export default Deletememberinfo;



import styles from './Deletememberinfo.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Deletememberinfo = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const validationPassword = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/mo-itzy/password-check', { password },
      {
        headers: {
          Authorization: `${token}`
        }
      });

      console.log('Response:', response);

      if (response.data.status === 'BAD_REQUEST') {
        setIsPasswordValid(false);
        alert('비밀번호가 일치하지 않습니다.');
      } else {
        setIsPasswordValid(true);
        console.log('비밀번호 확인 완료');
        console.log(setIsPasswordValid)
      }
    } catch (error) {
      console.error('오류:', error);
      setIsPasswordValid(false);
      alert('비밀번호 확인 중 오류가 발생했습니다.');
    }
  };

  const handleDelete = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found');
    return;
  }

  try {
    const response = await axios.post('http://localhost:8080/mo-itzy/mypage/delete', { password },
    {
      headers: {
        Authorization: `${token}`
      }
    });

    console.log('Response:', response);

    if (response.status === 200) { // 탈퇴 성공
      console.log(response)
      localStorage.removeItem('token');
      console.log('탈퇴 성공');
      navigate('/'); // 처리 후 이동
    } else { // 탈퇴 실패 
      console.error('탈퇴 실패');
    }
    } catch (error) {
      console.error('오류:', error);
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <p>정말 탈퇴하시겠습니까? 비밀번호를 입력해주세요</p>
        <input
          type="password"
          className={styles.noticebox_content_input}
          placeholder='비밀번호를 입력해주세요'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={validationPassword}>비밀번호 확인</button>
        {isPasswordValid && (
          <button onClick={handleDelete} className={styles.noticebox_content_button}>탈퇴하기</button>
        )}
        <button onClick={onClose} className={styles.cancelButton}>취소</button>
      </div>
    </div>
  );
}

export default Deletememberinfo;