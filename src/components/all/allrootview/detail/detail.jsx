import { useEffect, useState } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';
import styles from './detail.module.css';
import Detail_address from './detail_address/detail_address';
import Review from '../review/review';

function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const [items] = useState(location.state || null);

  useEffect(() => {
    if (!items) {
      console.error("아이템 이상:", id);
    }
  });

  if (!items) {
    return <div>로딩중</div>;
  }

  console.log("축제 상세:", items);

  return (
    <div className={styles.Inform_Container}>
      <div className={styles.title}>{items.name}</div>
      <img src={items.img} className={styles.main_img} alt={items.img} />
      <div>
        <a href={items.homepage} className={styles.href}>{items.homepage}</a>
      </div>
      <div>
        <div className={styles.main_line}></div>
        <div className={styles.notice_name}>행사 설명</div>
        <div className={styles.content}>{items.description}</div>
      </div>
      <div>
        <div className={styles.main_line}></div>
        <div className={styles.notice_name}>행사 주소</div>
        <Detail_address item={items} />
      </div>
      <div>
        <div className={styles.main_line}></div>
        <div className={styles.notice_name}>행사 기간</div>
        <div>{items.startDate}-{items.endDate}</div>
      </div>
      <div>
        <div className={styles.main_line}></div>
        <div className={styles.notice_name}>행사 관련 전화번호</div>
        <div>{items.contact}</div>
      </div>
      <div>
        <div className={styles.main_line}></div>
        <div className={styles.notice_name}>행사 가격</div>
        <div className={styles.content}>{items.expense}</div>
      </div>
      <div>
        <div className={styles.main_line}></div>
        <div className={styles.notice_name}>편의사항</div>
        <div className={styles.content}>{items.facilities}</div>
      </div>
      <div>
        <div className={styles.main_line}></div>
        <div className={styles.notice_name}>리뷰</div>
        <Review item={items} />
      </div>
      <NavLink to={'../addreview'} state={items}>
        <div className={styles.go_reivew} >리뷰 작성</div>
      </NavLink>
      <NavLink to={'../allroot'}>
        <div className={styles.go_list}>목록으로</div>
      </NavLink>
      
    </div>
  );
} 

export default Detail;
