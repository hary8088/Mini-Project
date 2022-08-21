import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import Styles from "../items/order.module.css";
import Orderin from "../items/orderin";
import { db } from "../../firebase/firebase-config";
import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	doc,
	setDoc,
	deleteDoc,
} from "firebase/firestore";
import Completedin from "../completed/completedin";

export default function DataTable() {
	const [data, usedata] = useState([]);
	const orderCollectionRef = collection(db, "orders");

	const [data1, usedata1] = useState([]);
	const completedCollectionRef = collection(db, "completed");
	useEffect(() => {
		const getProduct = async () => {
			await getDocs(orderCollectionRef)
				.then((snapshot) => {
					let product = [];
					snapshot.docs.forEach((doc) => {
						product.push({ ...doc.data(), id: doc.id });
					});
					console.log("Product is: ", product[0].name);
					usedata(product);
					console.log(data);
				})
				.catch((err) => {
					console.log(err.message);
				});
				await getDocs(completedCollectionRef)
				.then((snapshot) => {
					let product = [];
					snapshot.docs.forEach((doc) => {
						product.push({ ...doc.data(), id: doc.id });
					});
					console.log("Product is: ", product[0].name);
					usedata1(product);
					console.log(data1);
				})
				.catch((err) => {
					console.log(err.message);
				});

			// usedata(data1.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			// console.log(data1.val());
		};
		getProduct();
	}, []);
	return (
		<>
			<div className={Styles.oarea}>
				{data.map((doc) => {
					return (
						<div>
							<Orderin
								name={doc.name}
								phone={doc.phone}
								quantity={doc.quantity}
								total={doc.total}
								email={doc.email}
								address={doc.address}
								id={doc.id}
								item_name={doc.item_name}
							/>
						</div>
					);
				})}
			</div>
			<div className={Styles.oarea}>
				{data1.map((doc) => {
					return (
						<div>
							<Completedin
								name={doc.name}
								phone={doc.phone}
								quantity={doc.quantity}
								total={doc.total}
								email={doc.email}
								address={doc.address}
								id={doc.id}
								item_name={doc.item_name}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}
