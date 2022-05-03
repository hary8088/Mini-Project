import React from "react";
import Header from "./Comps/header/header";
import Footer from "./Comps/footer/footer";
import Home from "./Comps/home/home";
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
