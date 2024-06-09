import Header from '../../header/header';
import Detail from './detail/detail';
import styles from './allrootview.module.css';

function AllRootView() {

  return (
    <div className={styles.scroll}>
      <Header />
      <Detail />
    </div>
  );
}

export default AllRootView;
