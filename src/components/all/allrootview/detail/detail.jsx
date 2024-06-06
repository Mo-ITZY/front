import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './detail.module.css';

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/mo-itzy/festival/${id}`);
        setData(response.data);
        console.log("Fetched data:", response.data); // 콘솔에 데이터 출력
      } catch (error) {
        console.error("Error fetching festival detail:", error);
      }
    };

    fetchDataFromAPI();
  }, [id]);

  if (!data) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <div className={styles.main_content}>
        <div className={styles.main_title}>{data.name}</div>
        <img src={data.img || '/placeholder.jpg'} className={styles.main_img} alt={data.name} />
        <div>
          <div className={styles.main_content_name}>축제 이름</div>
          <div>{data.name}</div>
        </div>
        <div>
          <div className={styles.main_content_name}>축제 장소</div>
          <div>{data.place.first} {data.place.second} {data.place.third} {data.place.detail}</div>
        </div>
        <div>
          <div className={styles.main_content_name}>축제 운영 기간</div>
          <div>{data.period.startDate} - {data.period.endDate}</div>
        </div>
        <div>
          <div className={styles.main_content_name}>관련 홈페이지</div>
          <div>{data.homepage}</div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
