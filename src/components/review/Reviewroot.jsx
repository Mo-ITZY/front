import styles from "./Reviewroot.module.css";
import { useState } from 'react';
import Header from "../header/header";

function Reviewroot() {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your submission logic here
    } catch (error) {
      // Error handling logic here
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.review_container}>
        <div className={styles.review_title}>
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
