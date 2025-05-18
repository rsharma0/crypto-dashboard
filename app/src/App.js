import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import Portfolio from './pages/Portfolio';
import './index.css';

function App() {
  return (
    <Router>
      <nav className="bg-black text-white px-6 py-4 flex gap-6 shadow-md">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/help" className="hover:underline">Help</Link>
        <Link to="/portfolio" className="hover:underline">Portfolio</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
