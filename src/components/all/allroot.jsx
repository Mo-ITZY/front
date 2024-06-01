import styles from "./allroot.module.css";
import { useEffect, useState } from "react";
import fetchData from "../service/api";
import { NavLink } from "react-router-dom";

function ALLroot() {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 한 페이지에 표시할 데이터 수

  useEffect(() => {
    const fetchDataFromAPI = async (page) => {
      try {
        const result = await fetchData(page, itemsPerPage);
        console.log("Datas Updated:", result.getFestivalKr);
        setDatas(result.getFestivalKr?.item || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDataFromAPI();
  }, [currentPage]);

  // 현재 페이지에 맞는 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 수 계산
  const totalPages = Math.ceil(datas.length / itemsPerPage);

  // 표시할 페이지 번호 계산
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 10;
    const halfMaxPageButtons = Math.floor(maxPageButtons / 2);
    let startPage = Math.max(1, currentPage - halfMaxPageButtons);
    let endPage = startPage + maxPageButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  // 페이지 변경 핸들러
  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={styles.aa}>
        {currentItems.map((data, idx) => (
          <div key={idx} className={styles.box11}>
            <NavLink to={`/allrootview/${data.UC_SEQ}`} className={styles.navLink}>
              <img src={data.MAIN_IMG_THUMB} className={styles.img_size} alt="thumbnail" />
              <div>
                <p>{data.SUBTITLE}</p>
                <p>{data.PLACE}</p>
                <p>{data.USAGE_DAY_WEEK_AND_TIME}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {getPageNumbers().map(number => (
          <button key={number} onClick={(e) => handleClick(e, number)} className={styles.pageButton}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ALLroot;
