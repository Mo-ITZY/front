import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// AuthContext 생성
export const AuthContext = createContext();

// AuthContext의 Provider 컴포넌트 생성
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // 토큰 값을 저장하는 함수
  const saveToken = (tokenValue) => {
    localStorage.setItem('token', tokenValue);
    setToken(tokenValue);
  };

  // 토큰 값을 삭제하는 함수 (로그아웃 시 사용)
  const deleteToken = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  // AuthContext.Provider 컴포넌트 반환
  return (
    <AuthContext.Provider value={{ token, saveToken, deleteToken }}>
      {children}
    </AuthContext.Provider>
  );
};
// AuthProvider 컴포넌트의 propTypes를 정의합니다.
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useAuth = () => useContext(AuthContext); // useAuth를 내보냅니다
