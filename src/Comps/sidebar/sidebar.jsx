import React from "react";
import Styles from "../sidebar/sidebar.module.css";
import {
	FaStream,
	FaShoppingBasket,
	FaShuttleVan,
	FaBorderAll,
	FaCreditCard,
	FaPauseCircle,
	FaCheck,
	FaEnvelope,
	FaHeart,
} from "react-icons/fa";
import { Link, Route, Router, Routes } from "react-router-dom";

function SideBar() {
	return (
		<div className={Styles.main1}>
			<div className={Styles.logo}></div>
			<div className={Styles.content}>
				<div className={Styles.row}>
					<div className={Styles.title}>Main</div>
					<div className={Styles.li_content}>
						<li>
							<div className={Styles.content_holder}>
								<div className={Styles.icon}>
									<FaStream />
								</div>
								<div className={Styles.inlist}>
									<Link to='/admin/'>Dashboard</Link>
								</div>
							</div>
						</li>
					</div>
				</div>
				<div className={Styles.row}>
					<div className={Styles.title}>List</div>
					<div className={Styles.li_content}>
						<li>
							<div className={Styles.content_holder}>
								<div className={Styles.icon}>
									<FaShoppingBasket />
								</div>
								<div className={Styles.inlist}>
									<Link to='/admin/products'>Stocks</Link>
								</div>
							</div>
						</li>
						<li>
							<div className={Styles.content_holder}>
								<div className={Styles.icon}>
									<FaBorderAll />
								</div>
								<div className={Styles.inlist}>
									<Link to='/admin/orders'>Orders</Link>
								</div>
							</div>
						</li>
						<li>
							<div className={Styles.content_holder}>
								{/* <div className={Styles.icon}> */}
								<FaShuttleVan className={Styles.icon} />
								{/* </div> */}
								<div className={Styles.inlist}>Delivery</div>
							</div>
						</li>
					</div>
				</div>
				<div className={Styles.row}>
					<div className={Styles.title}>Transactions</div>
					<div className={Styles.li_content}>
						<li>
							<div className={Styles.content_holder}>
								<div className={Styles.icon}>
									<FaCreditCard />
								</div>
								<div className={Styles.inlist}>
									<Link to='/admin/transactions'>All transactions</Link>
								</div>
							</div>
						</li>
						<li>
							<div className={Styles.content_holder}>
								<div className={Styles.icon}>
									<FaCheck />
								</div>
								<div className={Styles.inlist}><Link to='/admin/completed'>Completed</Link></div>
							</div>
						</li>
						<li>
							<div className={Styles.content_holder}>
								<div className={Styles.icon}>
									<FaPauseCircle />
								</div>
								<div className={Styles.inlist}><Link to='/admin/pending'>Pending</Link></div>
							</div>
						</li>
					</div>
				</div>
				<div className={Styles.row}>
					<div className={Styles.title}>Queries</div>
					<div className={Styles.li_content}>
						<li>
							<div className={Styles.content_holder}>
								<div className={Styles.icon}>
									<FaEnvelope />
								</div>
								<div className={Styles.inlist}>
									<Link to='/admin/query'>Query</Link>
								</div>
							</div>
						</li>
						<li>
							<div className={Styles.content_holder}>
								<div className={Styles.icon}>
									<FaHeart />
								</div>
								<div className={Styles.inlist}>Reviews</div>
							</div>
						</li>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
