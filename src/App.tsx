import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import HowToCare from './pages/HowToCare';
import WhatTheyLove from './pages/WhatTheyLove';
import './styles/global.scss';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/how-to-care">How to Care</Link>
        <Link to="/what-they-love">What They Love</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-care" element={<HowToCare />} />
        <Route path="/what-they-love" element={<WhatTheyLove />} />
      </Routes>
    </Router>
  );
};

export default App;
