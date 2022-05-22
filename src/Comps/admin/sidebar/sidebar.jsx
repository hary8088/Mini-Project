import React from "react";
import Styles from "./sidebar.module.css";

function SideBar() {
	return (
		<>
			<div className={Styles.container}>
				<div className={Styles.header}>Shivam Traders</div>
				<div className={Styles.row}>
					<div className={Styles.title}>Main</div>
					<div className={Styles.content}>
						<li>Dashboard</li>
					</div>
				</div>
				<div className={Styles.row}>
					<div className={Styles.title}>List</div>
					<div className={Styles.content}>
						<li>Products</li>
						<li>Orders</li>
						<li>Delivery</li>
					</div>
				</div>
				<div className={Styles.row}>
					<div className={Styles.title}>Transactions</div>
					<div className={Styles.content}>
						<li>All Transaction</li>
						<li>Completed</li>
						<li>Pending</li>
					</div>
				</div>
				<div className={Styles.row}>
					<div className={Styles.title}>Queries</div>
					<div className={Styles.content}>
						<li>Queries</li>
						<li>Reviews</li>
					</div>
				</div>
			</div>
		</>
	);
}

export default SideBar;
