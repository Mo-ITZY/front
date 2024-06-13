import styles from "./Reviewroot.module.css";
import { useState } from 'react';
import Header from "../header/header";
import axios from 'axios';

function Reviewroot() {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/mo-itzy/{festival_id}/review', {
        content: content
      });
      console.log('Response:', response.data);
      // 성공 시 처리 로직 추가
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

export default Reviewroot;
