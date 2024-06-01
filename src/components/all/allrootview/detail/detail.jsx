import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../../../service/api';
import styles from './detail.module.css';

function Detail() {  // 컴포넌트 이름을 PascalCase로 변경
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAllPages = async () => {
      let allData = [];
      for (let page = 1; page <= 8; page++) {  // Assuming there are 8 pages
        try {
          const result = await fetchData(page);
          const items = result.getFestivalKr?.item || [];
          allData = [...allData, ...items];
        } catch (error) {
          console.error("Error:", error);
          break;
        }
      }
      const festival = allData.find(item => item.UC_SEQ === parseInt(id));
      setData(festival);
      console.log("Data:", festival);
    };

    fetchAllPages();
  }, [id]);

  if (!data) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <div className={styles.main_content}>
        <div className={styles.main_title}>{data.TITLE}</div>
        <img src={data.MAIN_IMG_NORMAL} className={styles.main_img} alt={data.TITLE} />
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

export default Detail;
