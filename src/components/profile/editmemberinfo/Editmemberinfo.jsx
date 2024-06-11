import styles from './Editmemberinfo.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditMemberInfo() {
  
  return (
    <div>
      <div>
        아이디 수정
        <input type="text" />
      </div>
      <div>
        비밀번호 수정
        <input type="password" />
      </div>
      <div>
        이름 수정
        <input type="text" />
      </div>
      <div>
        이메일 수정
        <input type="text" />
      </div>
    </div>
  );
}

export default EditMemberInfo;


  

