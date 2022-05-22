import React from "react";
import Login from "./Comps/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Comps/home/home";
import Contact from "./Comps/contact/contact" 
import Admin from "./Comps/admin/admin";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
