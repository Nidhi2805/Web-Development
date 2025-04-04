import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import Hero from "./Hero";
import Hero1 from "./components/Hero1";
import Chinese from "./components/Chinese";
import Indian from "./components/Indian";
import MexicanFood from "./components/Mexican";
import Italian from "./components/Italian";
import Japan from "./components/Japanese";
import AddtoCart from "./components/Addcart";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />

        {!isAuthenticated && (
          <Route path="/SignIn.js" element={<SignIn onSignIn={() => setIsAuthenticated(true)} />} />
        )}
          <>
            <Route path="/Hero1.js" element={<Hero1 />} /> 
            <Route path="/Chinese.js" element={<Chinese />} />
            <Route path="/Indian.js" element={<Indian />} />
            <Route path="/Japanese.js" element={<Japan />} />
            <Route path="/Mexican.js" element={<MexicanFood />} />
            <Route path="/Italian.js" element={<Italian />} />
            <Route path="/Addcart.js" element={<AddtoCart />} />
          </>
        ) 
      </Routes>
    </Router>
  );
}

export default App;
