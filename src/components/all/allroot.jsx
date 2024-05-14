import styles from "./allroot.module.css";
import { useEffect, useState } from "react";
import fetchData from "../service/api";
import { NavLink } from "react-router-dom";
//import Header from "../header/header";


function ALLroot() {
  const [datas, setDatas] = useState([]); 
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData();
        console.log("Datas Updated:", result.getFestivalKr);
        setDatas(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDataFromAPI();
  }, []); // useEffect의 의존성 배열을 빈 배열로 설정하여 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.


  return (
    <div>
      <div className={styles.aa}>
        {datas && datas.getFestivalKr?.item.map((data, idx) => 
        <div key={idx} className={styles.box11}>
          <NavLink to={`/allrootview/${data.UC_SEQ}`} className={styles.navLink}>
            <img src={data.MAIN_IMG_THUMB} className={styles.img_size}></img>
            <div>
              <p>{data.SUBTITLE}</p>
              <p>{data.PLACE}</p>
              <p>{data.USAGE_DAY_WEEK_AND_TIME}</p>
            </div>
          </NavLink>
        </div>   
      )}
      </div>
    </div>
  );
}

export default ALLroot;
