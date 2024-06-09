import styles from './noticeroot.module.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/header';

function Noticeroot() {
    const [Inform, setInform] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/mo-itzy/main')
            .then(response => {
                // 데이터를 받은 후 내림차순으로 정렬
                const sortedData = response.data.data.content.sort((a, b) => b.id - a.id);
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

    return (
        <div className={styles}>
            <Header />
            <div className={styles.Inform_Container}>
                <div className={styles.scroll}>
                    <div className={styles.title_location}>
                        <div className={styles.title}>공지사항</div>
                    </div>
                    <div className={styles.main_line}></div>
                    <div className={styles.notice_name}>
                        <div className={styles.notice_number}>번호</div>
                        <div className={styles.notice_title}>제목</div>
                        <div className={styles.notice_views}>작성일</div>
                    </div>
                    <div className={styles.main_line}></div>
                    {Inform.length === 0 ? (
                        <div>공지사항이 없습니다.</div>
                    ) : (
                        <ul>
                            {Inform.map(item => {
                                const dateOnly = new Date(item.writeDate).toISOString().split('T')[0];
                                return (
                                    <div key={item.id} className={styles.itme_location}>
                                        <div className={styles.item_id}>{item.id}</div>
                                        <NavLink to={`/notice_detail/${item.id}`} state={item}>
                                            <div className={styles.item_title}>{truncateTitle(item.title, 15)}</div>
                                        </NavLink>
                                        <div className={styles.itme_day}>{dateOnly}</div>
                                    </div>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Noticeroot;
