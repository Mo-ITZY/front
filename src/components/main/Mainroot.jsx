import styles from './Mainroot.module.css';
import { NavLink } from "react-router-dom";
import Header from '../header/header';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Mainroot() {
  const [Inform, setInform] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/main')
      .then(response => {
        setInform(response.data);
      })
      .catch(error => {
        if (error.response && error.response.status === 500) {
          setInform([]); // 에러 발생 시 공지사항이 없다고 가정
        } else {
          setError(error);
        }
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Header />
      <div className={styles.Inform_Container}>
        <h2>공지사항</h2>
        {Inform.length === 0 ? (
          <div>공지사항이 없습니다.</div>
        ) : (
          <ul>
            {Inform.map(Inform => (
              <li key={Inform.inform_id}>
                <h3>{Inform.title}</h3>
                <p>{Inform.content}</p> 
              </li>
            ))}
          </ul>
        )}
      </div>
      <NavLink to='/all'>
        <div className={styles.Look_Around_Box}>각 지역축제 더보기</div>
      </NavLink>
  )
}

export default Mainroot
