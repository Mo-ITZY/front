// import styles from "./AddReview.module.css";
// import { useState } from 'react';
// import Header from "../header/header";
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';

// function AddReview() {
//   const location = useLocation();
//   const items = location.state
//   const [content, setContent] = useState('');
//   const navigate = useNavigate(); // useNavigate 훅 추가

//   console.log("리뷰 아이템:", items);
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`http://localhost:8080/mo-itzy/festivals/${items.id}/review`, {
//         content: content
//       });
//       console.log('Response:', response);
//       // 성공 시 처리 로직 추가
//       navigate('/success'); // 성공 페이지로 이동 예시
//     } catch (error) {
//       console.error('Error submitting review:', error);
//       // 에러 처리 로직 추가
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <div>
//           <div className={styles.title}>리뷰 작성</div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.review_box}>
//             <div className={styles.review_box_content}>
//               <p>리뷰 내용</p>
//               <textarea
//                 className={styles.textarea_box} // Apply your CSS class here
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//               />
//             </div>
//             <button type="submit" className={styles.submit_button}>제출</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddReview;













// import styles from "./AddReview.module.css";
// import { useState } from 'react';
// import Header from "../header/header";
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';

// function AddReview() {
//   const location = useLocation();
//   const items = location.state;
//   const [content, setContent] = useState('');
//   const [img, setImageUrl] = useState(''); // 이미지 URL 상태 추가
//   const navigate = useNavigate(); 

//   console.log("리뷰 아이템:", items);
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Submitting review with content:', content); 
//     console.log("type", content, typeof content);
//     console.log('Submitting review with image URL:', img); 
//     console.log("type", img, typeof img);
    
//     try {
//       const response = await axios.post(`http://localhost:8080/mo-itzy/festivals/${items.id}/review`, {
//         content: content,
//         img: img // 이미지 URL 포함
//       });
//       console.log('Response:', response);
//       navigate('/success'); // 성공 페이지로 이동 예시
//     } catch (error) {
//       console.error('Error submitting review:', error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <div>
//           <div className={styles.title}>리뷰 작성</div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.review_box}>
//             <div className={styles.review_box_content}>
//               <p>리뷰 내용</p>
//               <textarea
//                 className={styles.textarea_box} // CSS 클래스 적용
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//               />
//             </div>
//             <div className={styles.review_box_content}>
//               <p>이미지 URL</p>
//               <input
//                 type="text"
//                 className={styles.input_box} // CSS 클래스 적용
//                 value={img}
//                 onChange={(e) => setImageUrl(e.target.value)}
//               />
//             </div>
//             <button type="submit" className={styles.submit_button}>제출</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddReview;



import styles from "./AddReview.module.css";
import { useState } from 'react';
import Header from "../header/header";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function AddReview() {
  const location = useLocation();
  const items = location.state;
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const [Img, setImg] = useState('');

  console.log("리뷰 작성 데이터:", items);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    
    try {
      console.log('전송할 데이터 타입:', typeof content);
      console.log('전송할 데이터:', content );
      console.log('전송할 토큰 :', token);
      console.log('전송할 id :', items.id);
      const response = await axios.post(
        `http://localhost:8080/mo-itzy/festivals/${items.id}/review`,
        { content: content, img: Img},
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      console.log('Response:', response);
      alert('리뷰가 성공적으로 제출되었습니다!');
      navigate('/profile');

    } catch (error) {
      console.error('Error submitting review:', error);
      if (error.response && error.response.status === 400) {
        alert('잘못된 요청입니다. 입력 내용을 확인해주세요.');
      } else {
        alert('리뷰 제출에 실패했습니다. 다시 시도해주세요.');
      }
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
              <div className={styles.sub_title}>리뷰 내용</div>
              <textarea
                className={styles.textarea_box}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='리뷰내용을 작성해주세요'
              />
              <div>
              <input 
                type="text" 
                value={Img} 
                placeholder='이미지를 입력해주세요' 
                onChange={(e) => setImg(e.target.value)} 
                className={styles.input_box} 
              />
            </div>
            </div>
            <button type="submit" className={styles.submit_button}>작성완료</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddReview;
