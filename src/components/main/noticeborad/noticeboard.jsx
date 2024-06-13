import styles from './noticeboard.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MdAdd } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Noticeboard() {
    const [inform, setInform] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => { axios.get('http://localhost:8080/mo-itzy/main')
        .then(response => {
          console.log(response);
          // id를 기준으로 내림차순 정렬 후 상위 5개 항목만 선택
          const sortedData = response.data.data.content.sort((a, b) => b.id - a.id).slice(0, 5);
          console.log(response.data);
          setInform(sortedData);
        })
        .catch(error => {
          if (error.response && error.response.status === 500) {
            setInform([]); // 에러 발생 시 공지사항이 없도록 표시
          } else {
            setError(error);
          }
        });
    }, []); 
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.substring(0, maxLength) + '...';
        }
        return title;
    };

    return(
      <div>
        <div className={styles.Inform_Container}>
          <div className={styles.title_location}>
            <div className={styles.title}>공지사항</div>
            <NavLink to={'/notice'} className={styles.add}>
              <div ><MdAdd /></div>
            </NavLink>
          </div>
          {inform.length === 0 ? (
            <div>공지사항이 없습니다.</div>
          ) : (
            <ul>
              {inform.map(item => {
                const dateOnly = new Date(item.writeDate).toISOString().split('T')[0];
                return (
                  <div key={item.id} className={styles.itme_location}>
                    <NavLink to={`/notice_detail/${item.id}`} state={item}>
                    <div className={styles.item_title}>{truncateTitle(item.title, 15)}</div>
                    <div className={styles.itme_day}>{dateOnly}</div>
                    </NavLink>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    )
}

export default Noticeboard;
