import styles from "./allroot.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, NavLink } from "react-router-dom";
import Allroot_header from "./allroot_header/allroot_header";

function ALLroot() {
  const [datas, setDatas] = useState([]);
  const location = useLocation();
  const searchData = location.state || { keyword: '', page: 0, size: 5 };

  const [pageNo, setPageNo] = useState(searchData.page);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.post('http://localhost:8080/mo-itzy/festivals', { keyword: searchData.keyword, page: pageNo, size: 10 });
        console.log("Fetched data:", response.data.content); // 콘솔에 데이터 출력
        setDatas(response.data.content || []);
      } catch (error) {
        console.error("Error fetching festivals:", error);
      }
    };

    fetchDataFromAPI();
  }, [searchData.keyword, pageNo]);

  return (
    <div className={styles.scroll}>
      <Allroot_header keyword={searchData.keyword} />
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
              place = {},
              period = {}
            } = data;

            // place 객체가 null인 경우 빈 객체로 설정
            const { first = "", second = "", third = "", detail = "" } = place || {};
            const { startDate = "시작 날짜 없음", endDate = "종료 날짜 없음" } = period || {};

            return (
              <div key={id} className={styles.box11}>
                <NavLink to={`/allrootview/${id}`} state={data} className={styles.navLink}>
                  <img src={img} className={styles.img_size} alt={name} />
                  <div>
                    <p>축제 이름: {name}</p>
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
