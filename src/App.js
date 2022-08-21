import React from "react";
import Login from "./Comps/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Comps/home/home";
import About from "./Comps/about/about";
import Contact from "./Comps/contact/contact";
import Signup from "./Comps/Signup/signup";
import "./App.css";
import Admin from "./Comps/admin/admin";
import U_products from "./Comps/all_products/u_products";
function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/product' element={<U_products />} />
					<Route path='/admin/*' element={<Admin />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
