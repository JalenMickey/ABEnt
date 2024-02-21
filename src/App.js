import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
