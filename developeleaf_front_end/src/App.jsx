// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// components
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/MainWebsite/Navbar/Navbar";
import Footer from "./components/MainWebsite/Footer/Footer";
import Hero from "./components/MainWebsite/Hero/Hero";
import About from "./components/MainWebsite/About/About";
import HowItWorks from "./components/MainWebsite/HowItWorks/HowItWorks";
import GetInvolved from "./components/MainWebsite/GetInvolved/GetInvolved";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
