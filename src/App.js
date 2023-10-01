import React from 'react';
import './App.scss';
import './index.scss';


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './Homepage/Homepage';
import Footer from './Footer/Footer';
import AboutPage from './Aboutpage/Aboutpage';
import LoginPage from './Loginpage/Loginpage';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;