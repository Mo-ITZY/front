import { useState } from 'react';
import './Signin.module.css';
import Header from '../header/header';
import style from './Signin.module.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Signin = () => {
  const [formData, setFormData] = useState({
    loginId: '',
    name: '',
    password: '',
    email: '',
    address: {
      province: '',
      district: '',
      subdistrict: ''
    }
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/mo-itzy/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('회원가입이 성공적으로 완료되었습니다.', {
          onClose: () => navigate('/login')
        });
      } else {
        toast.error('회원가입에 실패했습니다.');
      }

    } catch (error) {
      toast.error('회원가입에 실패했습니다.');
      console.error('Error:', error);
    }
  };

  const getDistricts = (province) => {
    switch (province) {
      case '부산광역시':
        return ['강서구', '금정구', '남구', '동구', '동래구', '부산진구' ,'북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구'];
      default:
        return [];
    }
  };

  const getSubdistricts = (district) => {
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
        <div className={style.scroll}>
          <div className={style.signin_word}>회원가입</div>
          <div>
            <div className={style.mark}>아이디</div>
            <input
              type="text"
              name="loginId"
              placeholder='아이디를 입력해주세요'
              className={style.input_box}
              value={formData.loginId}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className={style.mark}>이름</div>
            <input
              type="text"
              name="name"
              placeholder='이름을 입력해주세요'
              className={style.input_box}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className={style.mark}>비밀번호</div>
            <input
              type="password"
              name="password"
              placeholder='비밀번호를 입력해주세요'
              className={style.input_box}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className={style.mark}>이메일</div>
            <input
              type="text"
              name="email"
              placeholder='이메일을 입력해주세요'
              className={style.input_box}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className={style.mark}>주소</div>
            <div>
              <select
                name="province"
                className={style.input_box}
                value={formData.address.province}
                onChange={handleChange}
              >
                <option value="">도 선택</option>
                <option value="부산광역시">부산광역시</option>
              </select>
            </div>
            <div>
              <select
                name="district"
                className={style.input_box}
                value={formData.address.district}
                onChange={handleChange}
              >
                <option value="">시, 군, 구 선택</option>
                {getDistricts(formData.address.province).map((district, index) => (
                  <option key={index} value={district}>{district}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                name="subdistrict"
                className={style.input_box}
                value={formData.address.subdistrict}
                onChange={handleChange}
              >
                <option value="">동, 면, 읍 선택</option>
                {getSubdistricts(formData.address.district).map((subdistrict, index) => (
                  <option key={index} value={subdistrict}>{subdistrict}</option>
                ))}
              </select>
            </div>
            <div>
             <input
              type="text"
              name="address.detail"
              placeholder='상세주소를 입력해주세요'
              className={style.input_box}
              value={formData.address.detail}
              onChange={handleChange}
          />
            </div>
          </div>
          <div className={style.button_location}>
            <button type="submit" className={style.button}>회원가입 완료</button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signin;
