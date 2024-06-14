import styles from './Addnotice.module.css';
import { useState } from 'react';
import axios from 'axios';
import Header from '../../header/header';

function Addnotice() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writeDate, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    // const writeDate = setDate("2021-09-01");

    // const notice = {
    //   title: title,
    //   content: content,
    //   writeDate: writeDate
    // };

    console.log('Notice:', title);
    console.log('Notice:', content);

    try {
      const response = await axios.post('http://localhost:8080/mo-itzy/notice', 
        {title: title, content: content}, {
        headers: {
          Authorization: `${token}`
        }
      });
      console.log('Notice submitted:', response.data);
      // 성공적으로 제출한 후 폼 초기화 (선택 사항)
    } catch (error) {
      console.error('공지사항 제출 중 오류가 발생했습니다:', error);
    }
  };
  
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className={styles.noticebox}>
          <div className={styles.noticebox_title}>공지사항</div>
          <div className={styles.noticebox_content}>
            <div className={styles.noticebox_content_title}>제목</div>
            <input
              type="text"
              className={styles.noticebox_content_input}
              placeholder='공지사항 제목을 입력해주세요'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.noticebox_content}>
            <div className={styles.noticebox_content_title}>내용</div>
            <textarea
              className={styles.noticebox_content_textarea}
              value={content}
              placeholder='공지사항 내용을 입력해주세요'
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.noticebox_btn}>작성완료</button>
        </div>
      </form>
    </div>
  );
}

export default Addnotice;