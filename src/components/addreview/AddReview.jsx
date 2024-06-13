import styles from "./AddReview.module.css";
import { useState } from 'react';
import Header from "../header/header";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function AddReview() {
  const location = useLocation();
  const items = location.state
  const [content, setContent] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 추가

  console.log("리뷰 아이템:", items);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8080/mo-itzy/festivals/${items.id}/review`, {
        content: content
      });
      console.log('Response:', response);
      // 성공 시 처리 로직 추가
      navigate('/success'); // 성공 페이지로 이동 예시
    } catch (error) {
      console.error('Error submitting review:', error);
      // 에러 처리 로직 추가
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div>
          <div className={styles.title}>리뷰 작성</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.review_box}>
            <div className={styles.review_box_content}>
              <p>리뷰 내용</p>
              <textarea
                className={styles.textarea_box} // Apply your CSS class here
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.submit_button}>제출</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddReview;
