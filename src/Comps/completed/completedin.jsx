import React, { useEffect, useState } from "react";
import Styles from "../items/order.module.css";
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
function Completedin(props) {
	const [data, usedata] = useState([]);
	const orderCollectionRef = collection(db, "completed");

	const deleteOrder = async (id) => {
		console.log("Id in delete order is: ", id);
		await deleteDoc(doc(db, "orders", id));
	};

	const completeOrder = async () => {
		console.log("Complete order is called");
		const docRef = doc(db, "completed_index", "index");
		const docSnap = await getDoc(docRef);

		let id_array = [];
		id_array.push(docSnap.data());
		console.log("index: ", docSnap.data());
		let id = id_array[0].id;
		id = id + 1;
		console.log("id after added: ", id);
		await setDoc(doc(db, "completed_index", "index"), {
			id: id,
		});
		await setDoc(doc(db, "completed", id.toString()), {
			name: props.name,
			quantity: props.quantity,
			email: props.email,
			item_name: props.item_name,
			id: id,
			phone: props.phone,
			total: props.total,
			address: props.address,
		});
	};
	// useEffect(() => {
	// 	const getProduct = async () => {
	// 		await getDocs(orderCollectionRef)
	// 			.then((snapshot) => {
	// 				let product = [];
	// 				snapshot.docs.forEach((doc) => {
	// 					product.push({ ...doc.data(), id: doc.id });
	// 				});
	// 				// console.log("Product is: ", product[0].id);
	// 				usedata(product);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err.message);
	// 			});

	// 		// usedata(data1.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	// 		// console.log(data1.val());
	// 	};
	// 	getProduct();
	// }, []);

	return (
		<>
			<div className={Styles.oarea}>
				<div className={Styles.box}>
					<div className={Styles.summary}>Order Summary</div>
					<div className={Styles.id}>Order id:{props.id}</div>
					<div className={Styles.category}>Item name: {props.item_name}</div>
					<div className={Styles.dsc}>
						Name: {props.name}
						<br />
						Quantity: {props.quantity}
					</div>
					<div className={Styles.id}>Total: ₹{props.total}</div>
					<div className={Styles.id}>Phone Number:{props.phone}</div>
					<div className={Styles.id}>Email: {props.email}</div>
					<div className={Styles.completed}>
                        <div>Order Completed</div>
                        <div>₹ {props.total}</div>
                        </div>
				</div>
			</div>
		</>
	);
}

export default Completedin;
