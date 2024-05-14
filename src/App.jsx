import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Intro from './components/Intro/Introroot';
import Main from './components/main/Mainroot';
import Login from './components/login/Loginroot';
import All from './components/all/allroot';
import Search from './components/search/Searchroot';
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// PrivateRoute 컴포넌트를 위한 파일에서 import
import PrivateRoute from './PrivateRoute';

// function App() {
//     const [message, setMessage] = useState('');
//     console.log(message)
  
//     useEffect(() => {
//         axios.get('/api/test')
//           .then(response => {
//             setMessage(response.data);
//           });
//     }, []);
  
//     return (
//       <div className="App">
//         백엔드 데이터 : {message}
//       </div>
//     );
//   }

  // function App() {
  //   const isMobile = useMediaQuery({
  //     query : "(max-width:768px)"
  //   });

  // const isPC = useMediaQuery({
  //     query : "(min-width:769px)"
  //   });
  // return (
  //   <>
  //      <Router>
  //       <Routes>
  //         <Route path="/" element={isPC ? <Intro /> : isMobile && <Intro />} />
  //         <Route path="/main" element={isPC ? <Main /> : isMobile && <Main />} />
  //         <Route path="/login" element={isPC ? <Login /> : isMobile && <Login />} />
  //         <Route path="/all" element={isPC ? <All /> : isMobile && <All />} />
  //         <Route path="/search" element={isPC ? <Search /> : isMobile && <Search />} />
  //       </Routes>
  //     </Router>
  //   </>
  //   )
  // }


  //-------------------------------------기존 코드--------------------------------------------------

  function App() {
    const isMobile = useMediaQuery({
      query: "(max-width:768px)"
    });
  
    const isPC = useMediaQuery({
      query: "(min-width:769px)"
    });
  
    return (
      <Router>
        <Routes>
          <Route path="/" element={isPC ? <Intro /> : isMobile && <Intro />} />
          <Route path="/main" element={<PrivateRoute element={isPC ? <Main /> : isMobile && <Main />} />} />
          <Route path="/login" element={isPC ? <Login /> : isMobile && <Login />} />
          <Route path="/all" element={<PrivateRoute element={isPC ? <All /> : isMobile && <All />} />} />
          <Route path="/search" element={<PrivateRoute element={isPC ? <Search /> : isMobile && <Search />} />} />
        </Routes>
      </Router>
    );
  }

export default App;