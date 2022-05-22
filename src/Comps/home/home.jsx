import React from "react";
import Styles from "./home.module.css";
import { MdOutlineVerified } from "react-icons/md";
import Products from "../Product/Products";
import Header from "../header/header";
import Footer from "../footer/footer";

function home() {
	return (
		<>
			<Header />
			<div className={Styles.homeCon}>
				<div className={Styles.heading}>
					<h1>
						We are here...<br></br>Why do you fear?
					</h1>
				</div>

				{/* <img src={img1} width={1264} alt="Building" /> */}
			</div>
			<div className={Styles.data}>
				<div className={Styles.list}>
					<li>Quality Service</li>
					<MdOutlineVerified className={Styles.icon} />
				</div>
				<div className={Styles.list}>
					<li>Best Market Deals</li>
					<MdOutlineVerified className={Styles.icon} />
				</div>
				<div className={Styles.list}>
					<li>Free Shipping</li>
					<MdOutlineVerified className={Styles.icon} />
				</div>
				<div className={Styles.list}>
					<li>Authorised Dealer </li>
					<MdOutlineVerified className={Styles.icon} />
				</div>
			</div>
			<Products />
			<Footer />
		</>
	);
}

export default home;
