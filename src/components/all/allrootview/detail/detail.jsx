import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';  // axios 임포트
import styles from './detail.module.css';

function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const [items, setData] = useState(location.state || null);

  useEffect(() => {

    if (!items) {
      console.error("아이템 이상:", id);
    }
  }, [id]);

  if (!items) {
    return <div>로딩중</div>;
  }

  console.log("아이템!!!!!!!!!!!:", items)


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
