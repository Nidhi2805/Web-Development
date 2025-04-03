import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import Hero from "./Hero";
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
        {!isAuthenticated ? (
          <Route path="*" element={<SignIn onSignIn={() => setIsAuthenticated(true)} />} />
        ) : (
          <>
            <Route path="/" element={<Hero />} />
            <Route path="/Chinese" element={<Chinese />} />
            <Route path="/Indian" element={<Indian />} />
            <Route path="/Japanese" element={<Japan />} />
            <Route path="/Mexican" element={<MexicanFood />} />
            <Route path="/Italian" element={<Italian />} />
            <Route path="/Addcart" element={<AddtoCart />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
