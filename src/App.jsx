import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Menu />
              <Location />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;