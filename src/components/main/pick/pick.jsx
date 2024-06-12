import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './pick.module.css';


function Pick() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.post('http://localhost:8080/mo-itzy/festivals', { keyword: '', page: 0, size: 10 });
        console.log("데이터 셋~", response.data.data.content); // 콘솔에 데이터 출력
        setFestivals(response.data.data.content || []);
      } catch (error) {
        console.error("Error fetching festivals:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % festivals.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [festivals]);

  return (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        {festivals.length === 0 ? (
          <p>데이터가 없습니다.</p>
        ) : (
          <>
            <img src={festivals[currentImageIndex].img} className={styles.photo} alt="Festival" />
            <div className={styles.caption}>
              <p>{festivals[currentImageIndex].name}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Pick;
