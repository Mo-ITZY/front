import PropTypes from 'prop-types'; // prop-types를 임포트합니다.
import axios from "axios";
import { useEffect, useState } from "react";
import styles from './review.module.css';
import { useLocation } from 'react-router-dom';
function Review() {
  const location = useLocation();
  const items = location.state;
  const [datas, setDatas] = useState([]);

  console.log("리뷰 아이템:", items);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/mo-itzy/festivals/${items.id}/review`);
        console.log("리뷰 데이터!!!!!:", response); // 콘솔에 데이터 출력
        setDatas(response.data.data); // response.data.data가 배열이라고 가정
      } catch (error) {
        console.error("Error fetching festivals:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

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
        <div>
          <p>리뷰 내용이 없습니다.</p>
          {/* <NavLink to='/addreview' state={items}>
            <button className={styles.add_review}>리뷰 작성하기</button>
          </NavLink> */}
        </div>
      )}
    </div>
  );
}

Review.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired, // item.id는 숫자여야 합니다.
  }),
};

export default Review;
