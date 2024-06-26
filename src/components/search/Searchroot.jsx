import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Searchroot.module.css';
import { MdOutlineSearch } from "react-icons/md";
import Header from '../header/header';

function Search() {
  const [searchData, setSearchData] = useState({
    keyword: '',
    page: 0,
    size: 10
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchData({
      ...searchData,
      keyword: event.target.value
    });
  };

  const handleSearch = () => {
    navigate('/allroot', { state: searchData });
  };

  return (
    <div className={styles.Container}>
      <Header />
      <div className={styles.Search_Container}>
        <input
          type="text"
          value={searchData.keyword}
          onChange={handleInputChange}
          placeholder="검색어를 입력해주세요"
          className={styles.Search_Input}
        />
        <button onClick={handleSearch} className={styles.Search_Button}>
          <MdOutlineSearch className={styles.icon} />
        </button>
      </div>
      <div className={styles.Horizon_Line}></div>
    </div>
  );
}

export default Search;
