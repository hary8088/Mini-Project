import React from "react";
import Login from "./Comps/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Comps/home/home";
import About from "./Comps/about/about";
import Contact from "./Comps/contact/contact";
import Signup from "./Comps/Signup/signup";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
