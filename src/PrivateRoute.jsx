import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ element, isPC, isMobile }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // /api/user 엔드포인트를 호출하여 인증 상태를 확인
        const response = await axios.get('/api/user');
        setAuth(response.data); // 인증 성공 시 auth 상태를 업데이트
      } catch (error) {
        setAuth(false); // 인증 실패 시 auth 상태를 false로 설정
      }
    };
    checkAuth();
  }, []);

  // auth 상태가 null인 동안 로딩 메시지를 표시
  if (auth === null) {
    return <div>Loading...</div>;
  }

  // 인증된 경우 element를 렌더링하고, 인증되지 않은 경우 /login으로 리다이렉트
  return auth ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
