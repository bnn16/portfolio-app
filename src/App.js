import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Research from './pages/Research';
import Footer from './components/Footer/Footer.js';
import Week1 from './pages/week1.js';
import Week2 from './pages/week2.js';
import Week3 from './pages/week3.js';
import Week4 from './pages/week4.js';
import Week5 from './pages/week5.js';
import Week6 from './pages/week6.js';
import Week7 from './pages/week7.js';
import Week8 from './pages/week8.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/research" element={<Research />} />
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-app" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/week1" element={<Week1 />} />
        <Route path="/week2" element={<Week2 />} />
        <Route path="/week3" element={<Week3 />} />
        <Route path="/week4" element={<Week4 />} />
        <Route path="/week5" element={<Week5 />} />
        <Route path="/week6" element={<Week6 />} />
        <Route path="/week7" element={<Week7 />} />
        <Route path="/week8" element={<Week8 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
