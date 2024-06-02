import styles from "./allroot.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, NavLink } from "react-router-dom";

function ALLroot() {
  const [datas, setDatas] = useState([]);
  const location = useLocation();
  const searchData = location.state || { keyword: '', page: 0, size: 10 };

  const [pageNo, setPageNo] = useState(searchData.page);
  const [keyword, setKeyword] = useState(searchData.keyword);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.post('http://localhost:8080/mo-itzy/festivals', { keyword, page: pageNo, size: 10 });
        console.log("Fetched data:", response.data.content); // 콘솔에 데이터 출력
        setDatas(response.data.content || []);
      } catch (error) {
        console.error("Error fetching festivals:", error);
      }
    };

    fetchDataFromAPI();
  }, [keyword, pageNo]);

  return (
    <div className={styles.scroll}>
      <div>
        {datas.length === 0 ? (
          <p>데이터가 없습니다.</p>
        ) : (
          datas.map((data) => {
            // null 값 처리를 위한 기본값 설정
            const {
              id,
              name = "이름 정보 없음",
              img = "/placeholder.jpg",
              lat = "위도 정보 없음",
              lng = "경도 정보 없음",
              trafficInfo = "교통 정보 없음",
              expense = "비용 정보 없음",
              contact = "연락처 정보 없음",
              homepage = "#",
              description = "설명 없음",
              facilities = "편의 시설 정보 없음",
              place = {},
              period = {}
            } = data;

            // place 객체가 null인 경우 빈 객체로 설정
            const { first = "", second = "", third = "", detail = "" } = place || {};
            const { startDate = "시작 날짜 없음", endDate = "종료 날짜 없음" } = period || {};

            return (
              <div key={id} className={styles.box11}>
                <NavLink to={`/allrootview/${id}`} className={styles.navLink}>
                  <img src={img} className={styles.img_size} alt={name} />
                  <div>
                    <p>축제 이름: {name}</p>
                    <p>위도: {lat}</p>
                    <p>경도: {lng}</p>
                    <p>교통 정보: {trafficInfo}</p>
                    <p>비용: {expense}</p>
                    <p>연락처: {contact}</p>
                    <p>홈페이지: <a href={homepage} target="_blank" rel="noopener noreferrer">{homepage}</a></p>
                    <p>설명: {description}</p>
                    <p>편의 시설: {facilities}</p>
                    <p>장소: {first} {second} {third} {detail}</p>
                    <p>기간: {startDate} - {endDate}</p>
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
        <button onClick={() => setPageNo(prevPageNo => prevPageNo + 1)} className={styles.next_button}>다음</button>
      </div>
    </div>
  );
}

export default ALLroot;
