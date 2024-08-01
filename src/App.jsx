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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Album" element={<MoreAlbum />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/channa-maduranga-photography-web/">
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
