import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../../service/api';
import Header from '../../header/header'
import styles from './allrootview.module.css';


function AllRootView() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData();
        console.log("result: ", result);
        const festival = result.getFestivalKr?.item.find(item => item.UC_SEQ === parseInt(id));
        setData(festival);
        console.log("Data:", festival);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDataFromAPI();
  }, [id]);

  return (
    <div>
      <Header/>
      <div className={styles.main_content}>
        <div className = {styles.main_title}>{data.TITLE}</div>
        <img src={data.MAIN_IMG_NORMAL} className={styles.main_img}></img>
        <div>
          <div className={styles.main_content_name}>축제 이름</div>
          <div>{data.TITLE}</div>
        </div>
        <div>
          <div className={styles.main_content_name}>축제 장소</div>
          <div>{data.MAIN_PLACE}</div>
          <div>{data.ADDR1}</div>
        </div>
        <div>
          <div className={styles.main_content_name}>축제 운영 기간</div>
          <div>{data.USAGE_DAY_WEEK_AND_TIME}</div>
        </div>
        <div>
          <div className={styles.main_content_name}>관련 홈페이지</div>
          <div>{data.HOMEPAGE_URL}</div>
        </div>
      </div>
    </div>
  );
}

export default AllRootView;
