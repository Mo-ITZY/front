import styles from "./Reviewroot.module.css";
import { useState } from 'react';

function Reviewroot() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/review', {
        title,
        content,
        image
      });
      alert('리뷰 작성에 성공했습니다.');
      setTitle('');
      setContent('');
      setImage('');
    } catch (error) {
      if (error.response) {
        // 서버에서 응답을 반환한 경우
        alert(`리뷰 작성에 실패했습니다: ${error.response.data.message}`);
      } else {
        // 서버에서 응답을 반환하지 않은 경우
        alert('리뷰 작성에 실패했습니다.');
      }
    }
  };

  return(
    <div>
      <div className={styles.review_container}>
        <div className={styles.review_title}>
          <h1>리뷰</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.review_box}>
            <div className={styles.review_box_title}>
              <h2>리뷰 제목</h2>
              <input type="text" className={styles.input_box} value={title} onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.review_box_content}>
              <p>리뷰 내용</p>
              <input type="text" className={styles.input_box} value={content} onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className={styles.review_box_date}>
              <p>리뷰 이미지</p>
              <input type="text" className={styles.input_box} value={image} onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.submit_button}>제출</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reviewroot;