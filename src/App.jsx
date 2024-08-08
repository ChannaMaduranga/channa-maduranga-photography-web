import { useState, useEffect } from 'react';
import AOS from "aos"; // for animation aos package
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';



import './App.css';
import Navbar from '../src/component/Navbar/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import MoreAlbum from './component/MoreAlbum';
import Loading from './component/Loading';
import Wedding from './component/Wedding';
import Preshoot from './component/Preshoot';
import Graduation from './component/Graduation';
import Event from './component/Event';
import ScrollToTop from './component/ScrollToTop';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading delay

    return () => clearTimeout(timer);
  }, []);




  return loading ? (
    <Loading />
  ) : (
    <div className=''>
       <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Album" element={<MoreAlbum />} />
        <Route path="/Wedding" element={<Wedding />} />
        <Route path="/Preshoot" element={<Preshoot />} />
        <Route path="/Graduation" element={<Graduation/>} />
        <Route path="/Event" element={<Event/>} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter  >
      <AppContent />
    </BrowserRouter>
  );
}
// for use local host
// basename='/channa-maduranga-photography-web/'  
export default App;
