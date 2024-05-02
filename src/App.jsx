import './App.css'
import Intro from './components/Intro/Introroot'
import Main from './components/main/Mainroot'
import Login from './components/login/Loginroot'
import Search from './components/search/Searchroot'
import { useMediaQuery } from "react-responsive"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


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
            <Route path="/search" element={isPC ? <Search /> : isMobile && <Search />} />
          </Routes>
        </Router>
      </>
    )
  }

  export default App
