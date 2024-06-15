import styles from './noticeroot.module.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/header';

function Noticeroot() {
    const [Inform, setInform] = useState([]);
    const [error, setError] = useState(null);
    const [totalPages, settotalPages] = useState();
    const page = 0;
    const size = 10;
    const [pageNo, setPageNo] = useState(page);
    const role = localStorage.getItem('role');
    console.log(role);

    useEffect(() => {
        axios.get(`http://localhost:8080/mo-itzy/notice?page=${pageNo}&size=${size}`)
            .then(response => {
                // 데이터를 받은 후 내림차순으로 정렬
                //const sortedData = response.data.data.content.sort((a, b) => b.id - a.id);
                const sortedData =  response.data.data.content;
                console.log("aaaaaaaa",response);
                console
                setInform(sortedData);
                settotalPages(response.data.data.totalPages);
            })
            .catch(error => {
                if (error.response && error.response.status === 500) {
                    setInform([]); // 에러 발생 시 공지사항이 없도록 표시
                } else {
                    setError(error);
                }
            });
    }, [pageNo]);

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
                    {role === 'ADMIN' && (
                        <NavLink to="../addnotice">
                            <div className={styles.write_button}>작성하기</div>
                        </NavLink>
                    )}
                    <button 
                        onClick={() => setPageNo(prevPageNo => Math.max(prevPageNo - 1, 0))} 
                        disabled={pageNo === 0} 
                        className={styles.before_button}
                    >
                    이전
                    </button>
                    <span className={styles.page_word}>{pageNo + 1}</span>
                    <button 
                    onClick={() => setPageNo(prevPageNo => Math.min(prevPageNo + 1, totalPages - 1))} 
                    disabled={pageNo === totalPages - 1} 
                    className={styles.next_button}
                    >
                    다음
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Noticeroot;
