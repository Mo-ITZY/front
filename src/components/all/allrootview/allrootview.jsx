//import styles from './allrootview.module.css';
import Header from '../../header/header';
import Detail from './detail/detail';
import Review from './review/review';


function AllRootView() {

  return (
    <div>
      <Header />
      <Detail />
      <Review />
    </div>
  );
}

export default AllRootView;
