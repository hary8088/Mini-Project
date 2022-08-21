import React, { useEffect, useState } from "react";
import Styles from "./order.module.css";
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
function Order2() {
	const [data, usedata] = useState([]);
	const orderCollectionRef = collection(db, "orders");

	const deleteOrder = async (id) => {
		console.log("Id in delete order is: ", id);
		await deleteDoc(doc(db, "orders", id));
	};
	useEffect(() => {
		const getProduct = async () => {
			await getDocs(orderCollectionRef)
				.then((snapshot) => {
					let product = [];
					snapshot.docs.forEach((doc) => {
						product.push({ ...doc.data(), id: doc.id });
					});
					// console.log("Product is: ", product[0].id);
					usedata(product);
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
						<div className={Styles.box}>
							<div className={Styles.summary}>Order Summary</div>
							<div className={Styles.id}>Order id:{doc.id}</div>
							<div className={Styles.category}>Item name: {doc.item_name}</div>
							<div className={Styles.dsc}>
								Name: {doc.name}
								<br />
								Quantity: {doc.quantity}
							</div>
							<div className={Styles.id}>Total: {doc.total}</div>
							<div className={Styles.id}>Phone Number:{doc.phone}</div>
							<div className={Styles.id}>Email: {doc.email}</div>
							<div className={Styles.btn}>
								<div className={Styles.accept}>
									<button>Approve</button>
								</div>

								<div className={Styles.deny}>
									<button onClick={(e) => deleteOrder(doc.id)}>Deny</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className={Styles.content}>
				{/* <div className={Styles.box}>
					<div className={Styles.summary}>Order Summary</div>
					<div className={Styles.id}>Order id:34</div>
					<div className={Styles.category}>Category: Paints</div>
					<div className={Styles.dsc}>
						Asian Paints (yellow)
						<br />
						Quantity: 500ml
					</div>
					<div className={Styles.btn}>
						<div className={Styles.accept}>
							<button>Approve</button>
						</div>

						<div className={Styles.deny}>
							<button>Deny</button>
						</div>
					</div>
				</div>
				<div className={Styles.box}>
					<div className={Styles.summary}>Order Summary</div>
					<div className={Styles.id}>Order id:34</div>
					<div className={Styles.category}>Category: Paints</div>
					<div className={Styles.dsc}>
						Asian Paints (yellow)
						<br />
						Quantity: 500ml
					</div>
					<div className={Styles.btn}>
						<div className={Styles.accept}>
							<button>Approve</button>
						</div>

						<div className={Styles.deny}>
							<button>Deny</button>
						</div>
					</div>
				</div>
				<div className={Styles.box}>
					<div className={Styles.summary}>Order Summary</div>
					<div className={Styles.id}>Order id:34</div>
					<div className={Styles.category}>Category: Paints</div>
					<div className={Styles.dsc}>
						Asian Paints (yellow)
						<br />
						Quantity: 500ml
					</div>
					<div className={Styles.btn}>
						<div className={Styles.accept}>
							<button>Approve</button>
						</div>

						<div className={Styles.deny}>
							<button>Deny</button>
						</div>
					</div>
				</div> */}
			</div>
		</>
	);
}

export default Order2;
