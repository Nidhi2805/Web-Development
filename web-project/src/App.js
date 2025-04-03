import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Chinese from "./components/Chinese";
import Indian from "./components/Indian";
import Japanese from "./components/Japanese";
import Mexican from "./components/Mexican";
import Italian from "./components/Italian";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/Chinese.js" element={<Chinese />} />
        <Route path="/Indian.js" element={<Indian />} />
        <Route path="/Japanese.js" element={<Japanese />} />
        <Route path="/Mexican.js" element={<Mexican />} />
        <Route path="/Italian.js" element={<Italian />} />
      </Routes>
    </Router>
  );
}

export default App;
