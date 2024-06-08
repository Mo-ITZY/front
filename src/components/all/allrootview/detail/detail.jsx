import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './detail.module.css';

function Detail() {
  const { id } = useParams();
  const [items, setData] = useState('');

  useEffect(() => {
    const fetchAllPages = async () => {
      console.log("Fetching data for id:", id);

      try {
        const response = await axios.get(`http://localhost:8080/mo-itzy/festivals/${id}`);
        console.log("Response:", response);
        console.log("setData:", response.data); // 콘솔에 데이터 출력
        const items = response.data;
        console.log("items data:", items);
        setData(items);
        console.log("set items data:", items);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchAllPages();
  }, [id]);

  if (!items) {
    return <div>로딩중</div>;
  }

  console.log("For return Items!!!!!!!!!!!:", items)


  return (
    <div>
      <div className={styles.main_content}>
        <div className={styles.main_title}>{items.name}</div>
        <img src={items.img} className={styles.main_img} alt={items.img} />
        <div>
          <div className={styles.main_content_name}>축제 이름</div>
          <div>{items.name}</div>
        </div>
        <div>
          <div className={styles.main_content_name}>축제 장소</div>
          <div>{items.place.first}</div>
          <div>{items.place.second}</div>
        </div>
        <div>
          <div className={styles.main_content_name}>축제 운영 기간</div>
          <div>{items.description}</div>
        </div>
        <div>
          <div className={styles.main_content_name}>관련 홈페이지</div>
          <div>{items.contact}</div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
