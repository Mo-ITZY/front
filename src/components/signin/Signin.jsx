import React, { useState } from 'react';
import './Signin.module.css';
import Header from '../header/header';
import style from './Signin.module.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    loginId: '',
    name: '',
    password: '',
    email: '',
    address: {
      first: '',
      second: '',
      third: '',
      detail: ''
    }
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const addressKey = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressKey]: value
        }
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
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
          onClose: () => navigate('/login') // 성공적으로 완료되었을 때 로그인 페이지로 이동
        });
      } else {
        toast.error('회원가입에 실패했습니다.');
      }

    } catch (error) {
      toast.error('회원가입에 실패했습니다.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
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
          <input
            type="text"
            name="address.first"
            placeholder='특별시, 광역시, 8도'
            className={style.input_box}
            value={formData.address.first}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address.second"
            placeholder='시, 군, 구'
            className={style.input_box}
            value={formData.address.second}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address.third"
            placeholder='동, 읍, 면'
            className={style.input_box}
            value={formData.address.third}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address.detail"
            placeholder='상세주소를 입력해주세요'
            className={style.input_box}
            value={formData.address.detail}
            onChange={handleChange}
          />
        </div>
        <div className={style.button_location}>
          <button type="submit" className={style.button}>회원가입 완료</button>
        </div>
      </form>

      {/* 토스트 컨테이너 */}
      <ToastContainer />
    </div>
  );
};

export default Signin;
