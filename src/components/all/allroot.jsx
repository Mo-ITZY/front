import styles from "./allroot.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import Allroot_header from "./allroot_header/allroot_header";

function ALLroot() {
  const [datas, setDatas] = useState([]);
  const location = useLocation();
  const searchData = location.state || { keyword: '', page: 0, size: 5 };
  const navigate = useNavigate();
  const [totalPages, settotalPages] = useState();

  const [pageNo, setPageNo] = useState(searchData.page);
  

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        console.log("데이터 셋~", searchData);
        console.log("페이지 넘버", pageNo);
        const response = await axios.post(`http://localhost:8080/mo-itzy/festivals?page=${pageNo}&size=5`, { keyword: searchData.keyword });
        console.log("response",response);
        console.log("데이터 셋~", response.data.data.content); // 콘솔에 데이터 출력
        settotalPages(response.data.data.totalPages);
        setDatas(response.data.data.content || []);
      } catch (error) {
        console.error("Error fetching festivals:", error);
      }
    };

    fetchDataFromAPI();
  }, [searchData.keyword, pageNo]);

  const handleFormClick = (event) => {
    event.stopPropagation();
  };

  const handleFormSubmit = async (event, id) => {
    event.preventDefault();
    console.log("찜 버튼 클릭");

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    console.log("role ::: ", role);
    if(role == "ADMIN"){
        alert("관리자는 찜 목록을 사용할 수 없습니다.");
        return;
    }
    if (!token) {
      if (window.confirm('로그인 후 사용하시겠습니까?')) {
        navigate('/login');
      }
      console.error('No token found');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/mo-itzy/festivals/${id}/like`,
        {},
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      console.log('Response:', response);
      if(response.data.status == "CONFLICT"){
        alert('이미 찜한 축제 입니다.');
        navigate('/allroot');
        return;
      }
      else{
        alert('찜 목록에 추가 되었습니다.');
        navigate('../like');
      }
  
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

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
              lat = "위도정보 없음",
              lng = "경도정보 없음",
              expense = "무료",
              trafficInfo = "교통 정보 없음",
              contact = "연락처 정보 없음",
              homepage = "홈페이지 정보 없음",
              description = "축제 설명 없음",
              facilites = "편의 시설 정보 없음",
              place = {},
              period = {}
            } = data;

            // place 객체가 null인 경우 빈 객체로 설정
            const { first = "", second = "", third = "", detail = "" } = place || {};
            const { startDate = "시작 날짜 없음", endDate = "종료 날짜 없음" } = period || {};

            // 날짜 변환
            const formattedStartDate = startDate !== "시작 날짜 없음" ? new Date(startDate).toLocaleDateString() : startDate;
            const formattedEndDate = endDate !== "종료 날짜 없음" ? new Date(endDate).toLocaleDateString() : endDate;

            return (
              <div key={id} className={styles.box11}>
                <NavLink to={`/allrootview/${id}`} state={{id, name, img, lat, lng, trafficInfo ,startDate: formattedStartDate, expense, endDate: formattedEndDate, contact, facilites, homepage, description, place: {first, second, third, detail}}} className={styles.navLink}>
                  <img src={img} className={styles.img_size} alt={name} />
                  <div>
                    <p>{name}</p>
                    <p>{first} {second} {third} {detail}</p>
                    <p>{formattedStartDate} - {formattedEndDate}</p>
                    <form onSubmit={(e) => handleFormSubmit(e, id)} onClick={handleFormClick}>
                      <button type="submit" className={styles.like}>찜</button>
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
        <button onClick={() => setPageNo(prevPageNo => Math.min(prevPageNo + 1, totalPages - 1))} 
                    disabled={pageNo === totalPages - 1}  className={styles.next_button}>다음</button>
      </div>
    </div>
  );
}

export default ALLroot;
