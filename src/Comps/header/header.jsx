import React, { useState } from "react";
import Styles from "./header.module.css";
import { Link } from "react-router-dom";
import ScriptTag from "react-script-tag";
function header() {
	const [change, setchange] = useState(false);
	const scrollevent = () => {
		if (window.scrollY >= 80) {
			setchange(true);
		} else {
			setchange(false);
		}
	};
	window.addEventListener("scroll", scrollevent);

	return (
		<React.Fragment>
			<div className={change ?Styles.notnavbar:Styles.Navbar}>
				<div className={Styles.brand}>
					<img src='../../assets/Sivam Traders-logos.jpeg' alt='Logo' />
				</div>
				<div className={Styles.header}>
					<div className={Styles.home}>
						<h1>
							<Link className='link' to='/'>
								Home
							</Link>
						</h1>
					</div>
					<div className={Styles.aboutus}>
						<h1>Aboutus</h1>
					</div>
					<div className={Styles.contactUs}>
						<Link className='link' to='/contact'>
							<h1>ContactUs</h1>
						</Link>
					</div>
					<div className={Styles.login}>
						<h1>
							<Link className='link' to='/login'>
								Login
							</Link>
						</h1>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default header;
