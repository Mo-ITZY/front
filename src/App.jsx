import './App.css';
import Intro from './components/Intro/Introroot';
import Main from './components/main/Mainroot';
import Login from './components/login/Loginroot';
import All from './components/all/allroot';
import Search from './components/search/Searchroot';
import Bottomnav from './components/bottomnav/bottomnav';
import Profile from './components/profile/Profileroot'
import Like from './components/like/likeroot';
import AllRootView from './components/all/allrootview/allrootview';
import Signin from './components/signin/Signin';
import Review from './components/review/Reviewroot';
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ALLroot from './components/all/allroot';

// PrivateRoute 컴포넌트를 위한 파일에서 import
//import PrivateRoute from './PrivateRoute';

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
// ----------------------------------------------------------------------------------


  function App() {
    const isMobile = useMediaQuery({
      query : "(max-width:768px)"
    });

  const isPC = useMediaQuery({
      query : "(min-width:769px)"
    });
  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={isPC ? <Intro /> : isMobile && <Intro />} />
          <Route path="/main" element={isPC ? <Main /> : isMobile && <Main />} />
          <Route path="/login" element={isPC ? <Login /> : isMobile && <Login />} />
          <Route path="/allroot" element={isPC ? <ALLroot /> : isMobile && <ALLroot />} />
          <Route path="/allrootview/:id" element={isPC ? <AllRootView /> : isMobile && <AllRootView />} />
          <Route path="/search" element={isPC ? <Search /> : isMobile && <Search />} />
          <Route path="/profile" element={isPC ? <Profile /> : isMobile && <Profile />} />
          <Route path="/like" element={isPC ? <Like /> : isMobile && <Like />} />
          <Route path="/signin" element={isPC ? <Signin /> : isMobile && <Signin />} />
          <Route path="/review" element={isPC ? <Review /> : isMobile && <Review />} />
        </Routes>
        <Bottomnav />
      </Router>
    </>
    )
  }


  //-------------------------------------기존 코드--------------------------------------------------

// function App() {
//   const isMobile = useMediaQuery({
//     query: "(max-width:768px)"
//   });

//   const isPC = useMediaQuery({
//     query: "(min-width:769px)"
//   }); 

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={isPC ? <Intro /> : isMobile && <Intro />} />
//         <Route path="/main" element={<PrivateRoute element={isPC ? <Main /> : isMobile && <Main />} />} />
//         <Route path="/login" element={isPC ? <Login /> : isMobile && <Login />} />
//         <Route path="/all" element={<PrivateRoute element={isPC ? <All /> : isMobile && <All />} />} />
//         <Route path="/allrootview/:id" element={<PrivateRoute element={isPC ? <Allview /> : isMobile && <Allview />} />} />
//         <Route path="/search" element={<PrivateRoute element={isPC ? <Search /> : isMobile && <Search />} />} />
//       </Routes>
//     </Router>
//   );
// }

export default App;