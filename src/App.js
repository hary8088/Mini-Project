import React from "react";
import Login from "./Comps/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Comps/home/home";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
