import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Chinese from "./components/Chinese";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/Chinese.js" element={<Chinese />} /> 
      </Routes>
    </Router>
  );
}

export default App;
