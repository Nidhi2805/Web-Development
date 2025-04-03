import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Chinese from "./components/Chinese";
import AddtoCart from "./components/Addcart";
import Indian from "./components/Indian";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/Indian.js" element={<Indian />} />
        <Route path="/Chinese.js" element={<Chinese />} /> 
        <Route path="/Addcart.js" element={<AddtoCart />} />
      </Routes>
    </Router>
  );
}

export default App;
