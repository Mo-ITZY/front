import PropTypes from 'prop-types'; // prop-types를 임포트합니다.
import styles from './detail_address.module.css'

function Detail_address({ item }) {
    return (
        <div className={styles.address}>
            <div className={styles.detail_address}>{item.place.first}</div>
            <div className={styles.detail_address}>{item.place.second}</div>
            <div className={styles.detail_address}>{item.place.third}</div>
            <div className={styles.detail_address}>{item.place.detail}</div>
        </div>
    );
}
Detail_address.propTypes = {
    item: PropTypes.string // keyword prop의 유효성을 확인합니다.
  };
export default Detail_address;
