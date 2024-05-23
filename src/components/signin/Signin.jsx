//import { useState } from 'react';
import './Signin.module.css';
import Header from '../header/header';
import style from './Signin.module.css'
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Signin = () => {


  return (
    <div>
      <Header />
      <div className={style.signin_word}>회원가입</div>
        <div>
          <div className={style.mark}>아이디</div>
          <input type="text" placeholder='아이디를 입력해주세요' className={style.input_box} />
        </div>
        <div>
          <div className={style.mark}>비밀번호</div>
          <input type="password" placeholder='비밀번호를 입력해주세요' className={style.input_box}  />
        </div>
        <div>
          <div className={style.mark}>이메일</div>
          <input type="text"  placeholder='이메일를 입력해주세요' className={style.input_box}/>
        </div>
        <div>
          <div className={style.mark}>주소</div>
          <input type="text"  placeholder='주소를 입력해주세요' className={style.input_box}/>
        </div>
        <div className={style.button_location}>
          <button type="submit" className={style.button}>회원가입 완료</button>
        </div>
    </div>
  );
};

export default Signin;
