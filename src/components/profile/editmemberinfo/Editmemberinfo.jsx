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


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../header/header';
import styles from './Editmemberinfo.module.css';

function EditMemberInfo() {
  const [formData, setFormData] = useState({
    password: '',
    name: '',
    email: '',
    img: '',
    address: {
      first: '',
      second: '',
      third: '',
      detail: '',
    },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/mo-itzy/mypage/update', formData, {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.status === 200) {
        alert('회원 정보가 성공적으로 수정되었습니다.');
        navigate('/profile'); // 필요에 따라 다른 페이지로 이동
      } else {
        alert('회원 정보 수정에 실패했습니다.');
      }
    } catch (error) {
      console.error('회원 정보 업데이트 중 오류가 발생했습니다!', error);
      alert('회원 정보 수정 중 오류가 발생했습니다.');
    }
  };

  const getfirst = (province) => {
    switch (province) {
      case '부산광역시':
        return ['강서구', '금정구', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구'];
      default:
        return [];
    }
  };

  const getsecond = (district) => {
    switch (district) {
      case '강서구':
        return ['강동동', '명지동', '신호동', '연산동', '죽림동', '녹산동', '대저1동', '대저2동', '송정동', '구랑동', '기장읍', '정관읍', '철마면'];
      case '금정구':
        return ['남산동', '구서동', '부곡동', '장전동', '서동', '선두구동', '청룡동', '회동동'];
      case '남구':
        return ['대연1동', '대연3동', '대연4동', '대연5동', '대연6동', '용호1동', '용호2동', '용호3동', '용호4동', '용당동', '문현1동', '문현2동', '문현3동', '문현4동', '문현5동', '문현6동', '문현7동', '우암동', '감만1동', '감만2동', '우암동'];
      case '동구':
        return ['초량1동', '초량2동', '초량3동', '초량4동', '초량5동', '수정1동', '수정2동', '수정3동', '수정4동', '수정5동', '좌천동', '범일1동', '범일2동', '범일5동', '범일6동', '수안동', '영주1동', '영주2동', '영주3동', '좌동', '좌천동', '수안동'];
      case '동래구':
        return ['명장1동', '명장2동', '온천1동', '온천2동', '온천3동', '사직1동', '사직2동', '사직3동', '사직4동', '안락1동', '안락2동', '명륜동', '안락동', '명륜동', '명장동', '온천동', '사직동'];
      case '부산진구':
        return ['부전1동', '부전2동', '부전3동', '부전4동', '부전5동', '양정1동', '양정2동', '전포동', '부암1동', '부암2동', '토성1동', '토성2동', '가야1동', '가야2동', '개금1동', '개금2동', '개금3동', '초읍동', '당감1동', '당감2동', '당감3동', '당감4동'];
      case '북구':
        return ['구포1동', '구포2동', '구포3동', '금곡동', '화명1동', '화명2동', '화명3동', '화명4동', '덕천1동', '덕천2동', '덕천3동', '덕천4동', '덕천5동', '덕천6동', '덕천7동', '덕천동', '만덕1동', '만덕2동', '만덕3동', '만덕4동', '만덕5동', '만덕동', '구포동', '화명동', '덕천동', '만덕동'];
      case '사상구':
        return ['감전동', '괘법동', '덕포1동', '덕포2동', '모라1동', '모라2동', '삼락동', '주례1동', '주례2동', '주례3동', '주례4동', '엄궁동', '학장동', '덕포동', '주례동', '모라동', '엄궁동', '학장동'];
      case '사하구':
        return ['괴정1동', '괴정2동', '괴정3동', '괴정4동', '구평동', '다대1동', '다대2동', '다대3동', '다대4동', '당리동', '신평동', '장림1동', '장림2동', '하단1동', '하단2동', '하단3동', '신평동', '장림동', '하단동'];
      case '서구':
        return ['서1동', '서2동', '서3동', '부곡동', '암남동', '아미동', '초장동', '충무동', '충무동', '충무동', '충무동', '충무동', '서동', '부곡동', '아미동', '충무동', '부곡동', '서동', '충무동', '서동'];
      case '수영구':
        return ['남천1동', '남천2동', '남천3동', '망미1동', '망미2동', '망미3동', '민락동', '광안1동', '광안2동', '광안3동', '광안동', '광안동', '민락동', '광안동', '민락동', '망미동', '망미동', '남천동', '망미동'];
      case '연제구':
        return ['거제1동', '거제2동', '거제3동', '거제4동', '거제5동', '거제6동', '연산1동', '연산2동', '연산3동', '연산4동', '연산5동', '연산6동', '연산7동', '연산8동', '연산동'];
      case '영도구':
        return ['남항동', '봉래1동', '봉래2동', '봉래3동', '봉래4동', '청학1동', '청학2동', '동삼1동', '동삼2동', '동삼3동', '영선1동', '영선2동', '신선동', '영선동'];
      case '중구':
        return ['광복동', '대청동', '동광동', '동대신1동', '동대신2동', '동대신3동', '서대신1동', '서대신3동', '서대신4동', '서대신5동', '안락동', '영선동', '토성동', '청학동', '효제동'];
      default:
        return [];
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className={styles.change_title}>회원 정보 변경</div>
        <div className={styles.change_content}>
          <div className={styles.content_title}>비밀번호 변경</div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='변경하실 정보를 입력해주세요'
              className={styles.input_box}
            />
          </div>
        </div>
        <div className={styles.change_content}>
          <div className={styles.content_title}>이름 변경</div>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='변경하실 정보를 입력해주세요'
              className={styles.input_box}
            />
          </div>
        </div>
        <div className={styles.change_content}>
          <div className={styles.content_title}>이메일 변경</div>
          <div>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='변경하실 정보를 입력해주세요'
              className={styles.input_box}
            />
          </div>
        </div>
        <div className={styles.change_content}>
          <div className={styles.content_title}>주소 변경</div>
          <div>
            <select
              name="address.first"
              className={styles.input_box}
              value={formData.address.first}
              onChange={handleChange}
            >
              <option value="">도 선택</option>
              <option value="부산광역시">부산광역시</option>
            </select>
          </div>
          <div>
            <select
              name="address.second"
              className={styles.input_box}
              value={formData.address.second}
              onChange={handleChange}
            >
              <option value="">시, 군, 구 선택</option>
              {getfirst(formData.address.first).map((first, index) => (
                <option key={index} value={first}>{first}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="address.third"
              className={styles.input_box}
              value={formData.address.third}
              onChange={handleChange}
            >
              <option value="">동, 면, 읍 선택</option>
              {getsecond(formData.address.second).map((second, index) => (
                <option key={index} value={second}>{second}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              name="address.detail"
              value={formData.address.detail}
              onChange={handleChange}
              placeholder='상세주소'
              className={styles.input_box}
            />
          </div>
        </div>
        <div className={styles.change_content}>
          <div className={styles.content_title}>이미지 변경</div>
          <div>
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
              placeholder='변경하실 정보를 입력해주세요'
              className={styles.input_box}
            />
          </div>
        </div>
        <button type="submit" className={styles.change_btn}>변경하기</button>
      </form>
    </div>
  );
}

export default EditMemberInfo;
