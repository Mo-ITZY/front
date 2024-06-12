import styles from './Addnotice.module.css';
import { useState } from 'react';
import axios from 'axios';

function Addnotice() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const notice = {
      title: title,
      content: content,
    };

    try {
      const response = await axios.post('http://localhost:8080/mo-itzy/notice/edit', notice);
      console.log('Notice submitted:', response.data);
      // 성공적으로 제출한 후 폼 초기화 (선택 사항)
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('공지사항 제출 중 오류가 발생했습니다:', error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.noticebox}>
          <div className={styles.noticebox_title}>공지사항 작성</div>
          <div className={styles.noticebox_content}>
            <div className={styles.noticebox_content_title}>제목</div>
            <input
              type="text"
              className={styles.noticebox_content_input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.noticebox_content}>
            <div className={styles.noticebox_content_title}>내용</div>
            <textarea
              className={styles.noticebox_content_textarea}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.noticebox_btn}>등록</button>
        </div>
      </form>
    </div>
  );
}

export default Addnotice;