import PropTypes from 'prop-types'; // prop-types를 임포트합니다.
import axios from "axios";
import { useEffect, useState } from "react";
import styles from './review.module.css';

function Review({ item }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/mo-itzy/festivals/${item.id}/review`);
        console.log("리뷰 데이터", response.data); // 콘솔에 데이터 출력
        setDatas(response.data.data); // response.data.data가 배열이라고 가정
      } catch (error) {
        console.error("Error fetching festivals:", error);
      }
    };

    fetchDataFromAPI();
  }, [item.id]);

  return (
    <div>
      {datas.length > 0 ? (
        <div>
          {datas.map((review, index) => (
            <div key={index} className={styles.box11}>
              <div className={styles.name_div}>
                <div className={styles.profile}></div>
                <div className={styles.name}>{review.userName}</div>
              </div>
              <div className={styles.content}>{review.reviewContent}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>리뷰 내용이 없습니다.</p>
      )}
    </div>
  );
}

Review.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired, // item.id는 숫자여야 합니다.
  }).isRequired,
};

export default Review;
