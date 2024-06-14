// import styles from './Editmemberinfo.module.css';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Header from '../../header/header';
// import VerifyPassword from '../verifypassword/Verifypassword';

// function EditMemberInfo() {
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [img, setImg] = useState('');
//   const [first, setFirst] = useState('');
//   const [second, setSecond] = useState('');
//   const [third, setThird] = useState('');
//   const [detail, setDetail] = useState('');
//   const [isPasswordVerified, setIsPasswordVerified] = useState(false); // State to manage password verification dialog
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem('token');
//     if (!token) {
//       console.error('토큰을 찾을 수 없습니다.');
//       return;
//     }

//     const memberInfo = {
//       password,
//       name,
//       email,
//       img,
//       address: { first, second, third, detail }
//     };

//     try {
//       const response = await axios.post('http://localhost:8080/mo-itzy/mypage/update', {memberInfo},
//       {
//         headers: {
//           Authorization: `${token}`
//         }
//       });

//       if (response.status === 200) {
//         // 성공적으로 처리할 경우
//         alert('회원 정보가 성공적으로 수정되었습니다.');
//         navigate('/somewhere');  // 필요에 따라 다른 페이지로 이동
//       } else {
//         // 서버 오류 처리
//         alert('회원 정보 수정에 실패했습니다.');
//       }
//     } catch (error) {
//       // 요청 오류 처리
//       console.error('회원 정보 업데이트 중 오류가 발생했습니다!', error);
//       alert('회원 정보 수정 중 오류가 발생했습니다.');
//     }
//   };

//   const handleVerifySuccess = () => {
//     setIsPasswordVerified(true);
//   };

//   const togglePasswordVerification = () => {
//     setIsPasswordVerified(!isPasswordVerified);
//   };

//   return (
//     <div>
//       <Header />
//       <form onSubmit={handleSubmit}>
//         <div className={styles.change_title}>회원 정보 변경</div>
//         <div className={styles.change_content}>
//           <div className={styles.content_title}>비밀번호 변경</div>
//           <div>
//             <input type="password" value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder='변경하실 정보를 입력해주세요'
//               className={styles.input_box}
//             />
//             <button type="button" onClick={togglePasswordVerification}>비밀번호 확인</button>
//           </div>
//         </div>
//         {isPasswordVerified && <VerifyPassword onSuccess={handleVerifySuccess} />}
//         <div className={styles.change_content}>
//           <div className={styles.content_title}>이름 변경</div>
//           <div>
//             <input
//               type="text" value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder='변경하실 정보를 입력해주세요'
//               className={styles.input_box}
//             />
//           </div>
//         </div>
//         <div className={styles.change_content} >
//           <div className={styles.content_title}>이메일 변경 </div>
//           <div>
//             <input type="text" value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder='변경하실 정보를 입력해주세요'
//               className={styles.input_box}
//             />
//           </div>
//         </div>
//         <div className={styles.change_content}>
//           <div className={styles.content_title}>주소 변경</div>
//           <div>
//             <input
//               type="text" value={first}
//               onChange={(e) => setFirst(e.target.value)}
//               placeholder='특별시, 광역시, 8도'
//               className={styles.input_box}
//             />
//           </div>
//           <div>
//             <input
//               type="text" value={second}
//               onChange={(e) => setSecond(e.target.value)}
//               placeholder='시, 군, 구'
//               className={styles.input_box}
//             />
//           </div>
//           <div>
//             <input
//               type="text" value={third}
//               onChange={(e) => setThird(e.target.value)}
//               placeholder='동, 읍, 면'
//               className={styles.input_box}
//             />
//           </div>
//           <div>
//             <input
//               type="text" value={detail}
//               onChange={(e) => setDetail(e.target.value)}
//               placeholder='상세주소'
//               className={styles.input_box}
//             />
//           </div>
//         </div>
//         <div className={styles.change_content}>
//           <div className={styles.content_title}>이미지 변경</div>
//           <div>
//             <input
//               type="text" value={img}
//               onChange={(e) => setImg(e.target.value)}
//               placeholder='변경하실 정보를 입력해주세요'
//               className={styles.input_box}
//             />
//           </div>
//         </div>
//         <button type="submit" className={styles.change_btn} disabled={!isPasswordVerified}>변경하기</button>
//       </form>
//     </div>
//   );
// }

// export default EditMemberInfo;










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../header/header';
import styles from './Editmemberinfo.module.css';
import VerifyPassword from '../verifypassword/Verifypassword'; // VerifyPassword 컴포넌트 임포트

function EditMemberInfo() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [img, setImg] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [detail, setDetail] = useState('');
  const [isPasswordVerified, setIsPasswordVerified] = useState(false); // 비밀번호 확인 상태 관리
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    const memberInfo = {
      password,
      name,
      email,
      img,
      address: { first, second, third, detail }
    };

    try {
      const response = await axios.post('http://localhost:8080/mo-itzy/mypage/update', memberInfo ,
        {
          headers: {
            Authorization: `${token}`
          }
        });

      if (response.status === 200) {
        // 성공 처리
        alert('회원 정보가 성공적으로 수정되었습니다.');
        navigate('/somewhere');  // 필요에 따라 다른 페이지로 이동
      } else {
        // 서버 오류 처리
        alert('회원 정보 수정에 실패했습니다.');
      }
    } catch (error) {
      // 요청 오류 처리
      console.error('회원 정보 업데이트 중 오류가 발생했습니다!', error);
      alert('회원 정보 수정 중 오류가 발생했습니다.');
    }
  };

  const handleVerifySuccess = () => {
    setIsPasswordVerified(true);
  };

  const togglePasswordVerification = () => {
    setIsPasswordVerified(!isPasswordVerified);
  };
  
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className={styles.change_title}>회원 정보 변경</div>
        <div className={styles.change_content}>
          <div className={styles.content_title}>비밀번호 변경</div>
          <div>
            <input type="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='변경하실 정보를 입력해주세요'
              className={styles.input_box}
            />
          </div>
        </div>
          <div>
            <div className={styles.change_content}>
              <div className={styles.content_title}>이름 변경</div>
              <div>
                <input
                  type="text" value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='변경하실 정보를 입력해주세요'
                  className={styles.input_box}
                />
              </div>
            </div>
            <div className={styles.change_content} >
              <div className={styles.content_title}>이메일 변경 </div>
              <div>
                <input type="text" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='변경하실 정보를 입력해주세요'
                  className={styles.input_box}
                />
              </div>
            </div>
            <div className={styles.change_content}>
              <div className={styles.content_title}>주소 변경</div>
              <div>
                <input
                  type="text" value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  placeholder='특별시, 광역시, 8도'
                  className={styles.input_box}
                />
              </div>
              <div>
                <input
                  type="text" value={second}
                  onChange={(e) => setSecond(e.target.value)}
                  placeholder='시, 군, 구'
                  className={styles.input_box}
                />
              </div>
              <div>
                <input
                  type="text" value={third}
                  onChange={(e) => setThird(e.target.value)}
                  placeholder='동, 읍, 면'
                  className={styles.input_box}
                />
              </div>
              <div>
                <input
                  type="text" value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  placeholder='상세주소'
                  className={styles.input_box}
                />
              </div>
            </div>
            <div className={styles.change_content}>
              <div className={styles.content_title}>이미지 변경</div>
              <div>
                <input
                  type="text" value={img}
                  onChange={(e) => setImg(e.target.value)}
                  placeholder='변경하실 정보를 입력해주세요'
                  className={styles.input_box}
                />
              </div>
            </div>
            <button type="submit" className={styles.change_btn}>변경하기</button>
          </div>
      </form>
    </div>
  );
}

export default EditMemberInfo;
