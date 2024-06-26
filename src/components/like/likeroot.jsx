﻿import styles from './likeroot.module.css';
import axios from 'axios';
import LikerootHeader from './likeroot_header/likeroot_header';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Likeroot() {
  const [datas, setDatas] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [role, setRole] = useState(localStorage.getItem('role'));
  const navigate = useNavigate();

  const size = 5;

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:8080/mo-itzy/like?page=${pageNo}&size=${size}`,
          {
            headers: {
              Authorization: `${token}`
            }
          }
        );
        console.log("page", pageNo);
        console.log("Aaa", response);
        console.log("user_response!!!!!: ", response.data.data.data.content || []);
        setTotalPages(response.data.data.data.totalPages);
        setDatas(response.data.data.data.content || []);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    fetchDataFromAPI();
  }, [pageNo]); // pageNo을 의존성 배열에 추가

  const handleFormClick = (event) => {
    event.stopPropagation();
  };

  const handleFormSubmit = async (event, id) => {
    event.preventDefault();
    console.log("찜 버튼 클릭");

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/mo-itzy/${id}/unlike`,
        {},
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      console.log('Response:', response);
      alert('찜 목록에서 삭제 되었습니다.');
      setDatas((prevDatas) => prevDatas.filter((data) => data.id !== id)); // 삭제된 항목을 데이터에서 제거
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className={styles.scroll}>
      <LikerootHeader />

      {role === 'USER' ? (
        <>
          <div>
            {datas.length === 0 ? (
              <p>데이터가 없습니다.</p>
            ) : (
              datas.map((data) => {
                const {
                  id,
                  name = "이름 정보 없음",
                  img = "/placeholder.jpg",
                  lat = "위도정보 없음",
                  lng = "경도정보 없음",
                  expense = "무료",
                  trafficInfo = "교통 정보 없음",
                  contact = "연락처 정보 없음",
                  homepage = "홈페이지 정보 없음",
                  description = "축제 설명 없음",
                  place = {},
                  period = {}
                } = data;

                const { first = '', second = '', third = '', detail = '' } = place || {};
                const { startDate = '시작 날짜 없음', endDate = '종료 날짜 없음' } = period || {};

                const formattedStartDate = startDate !== '시작 날짜 없음' ? new Date(startDate).toLocaleDateString() : startDate;
                const formattedEndDate = endDate !== '종료 날짜 없음' ? new Date(endDate).toLocaleDateString() : endDate;

                return (
                  <div key={id} className={styles.box11}>
                    <NavLink to={`/allrootview/${id}`} state={{id, name, img, lat, lng, trafficInfo ,startDate: formattedStartDate, expense, endDate: formattedEndDate, contact, homepage, description, place: {first, second, third, detail}}} className={styles.navLink}>
                      <img src={img} className={styles.img_size} alt={name} />
                      <div>
                        <p>{name}</p>
                        <p>{first} {second} {third} {detail}</p>
                        <p>{formattedStartDate} - {formattedEndDate}</p>
                        <form onSubmit={(e) => handleFormSubmit(e, id)} onClick={handleFormClick}>
                          <button type="submit" className={styles.like}>삭제</button>
                        </form>
                      </div>
                    </NavLink>
                  </div>
                );
              })
            )}
          </div>
          <div>
            <button onClick={() => setPageNo(prevPageNo => Math.max(prevPageNo - 1, 0))} disabled={pageNo === 0} className={styles.before_button}>이전</button>
            <span className={styles.page_word}>{pageNo + 1}</span>
            <button onClick={() => setPageNo(prevPageNo => Math.min(prevPageNo + 1, totalPages - 1))} disabled={pageNo === totalPages - 1} className={styles.next_button}>다음</button>
          </div>
        </>
      ) : (
        <div>
          <p>관리자 계정 입니다.</p>
          <button onClick={() => navigate('/allroot')} className={styles.admin_button}>축제 페이지로 이동</button>
        </div>
      )}
    </div>
  );
}

export default Likeroot;
