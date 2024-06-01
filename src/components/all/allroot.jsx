import styles from "./allroot.module.css";
import { useEffect, useState } from "react";
import fetchData from "../service/api";
import { NavLink } from "react-router-dom";

function ALLroot() {
  const [datas, setDatas] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData(pageNo);
        console.log("Datas Updated:", result.getFestivalKr);
        setDatas(result.getFestivalKr?.item || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDataFromAPI();
  }, [pageNo]); // 페이지 번호가 변경될 때마다 데이터를 다시 가져옵니다.

  const handleNextPage = () => {
    if(pageNo < 8) {
      setPageNo(prevPageNo => prevPageNo + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNo > 1) {
      setPageNo(prevPageNo => prevPageNo - 1);
    }
  };

  return (
    <div className={styles.scroll}>
      <div>
        {datas.map((data, idx) => (
          <div key={idx} className={styles.box11}>
            <NavLink to={`/allrootview/${data.UC_SEQ}`} className={styles.navLink}>
              <img src={data.MAIN_IMG_THUMB} className={styles.img_size} alt={data.SUBTITLE} />
              <div>
                <p>{data.SUBTITLE}</p>
                <p>{data.PLACE}</p>
                <p>{data.USAGE_DAY_WEEK_AND_TIME}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={pageNo === 1} className={styles.before_button}>이전</button>
        <span className={styles.page_word}>{pageNo} / 8</span>
        <button onClick={handleNextPage} disabled={pageNo === 8} className={styles.next_button}>다음</button>
      </div>
    </div>
  );
}

export default ALLroot;
