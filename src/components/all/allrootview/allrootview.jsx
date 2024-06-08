import Header from '../../header/header';
import Detail from './detail/detail';
import Review from './review/review';
import styles from './allrootview.module.css';

function AllRootView() {

  return (
    <div className={styles.scroll}>
      <Header />
      <Detail />
      <Review />
    </div>
  );
}

export default AllRootView;
