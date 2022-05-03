import React from "react";
import Header from "../src/Comps/header";
import Footer from "../src/Comps/footer";
import Home from "../src/Pages/home";
// import About from '../src/Pages/about'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
