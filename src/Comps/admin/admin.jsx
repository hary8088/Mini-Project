import React from "react";
import Styles from "../admin/admin.module.css";
import SideBar from "../sidebar/sidebar";
import Header from "../header/header";
import { Link, Route, Routes } from "react-router-dom";
import Items from "../items/items";
import NotItems from "../items/notItem";
import Order from "../items/order";
import DataTable from "../Transaction/transanction";
import Query from "../query/query";
import Order2 from "../items/order2";
import Completed from "../completed/completed";

function Admin() {
	return (
		<div className={Styles.mainz}>
			{/* <Header /> */}

			<div className={Styles.contentz}>
				<SideBar />
			</div>
			<div className={Styles.mainz-2}>
				<div className={Styles.navz}>
					<div className={Styles.searchz}>
						<input type='text' placeholder='search' />
					</div>
					<div className={Styles.logz}>
						<Link to='/'>Logout </Link>
					</div>
				</div>
				<div className={Styles.contentAreaz}>
					<div className={Styles.routesz}>
						<Routes>
							<Route path='/' element={<NotItems />} />
							<Route path='/products' element={<Items />} />
							<Route path='/orders' element={<Order />} />
							<Route path='/transactions' element={<DataTable />} />
							<Route path='/query' element={<Query/>} />
							<Route path='/pending' element={<Order2/>} />
							<Route path='/completed' element={<Completed/>} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Admin;
