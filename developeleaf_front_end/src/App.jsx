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
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Hero />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
