import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Experience from './components/Experience';
import Contact from './components/contact/Contact';
import Footer from './Footer';
import Navbar from "./components/navigation/Navbar"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     <Footer/>
    </Router>
  );
};

export default App;
