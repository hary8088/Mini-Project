import React, { useEffect, useState } from "react";
import Styles from "../../Comps/items/order.module.css"
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

import Completedin from "./completedin";
function Completed() {
	const [data, usedata] = useState([]);
	const orderCollectionRef = collection(db, "completed");

	const deleteOrder = async (id) => {
		console.log("Id in delete order is: ", id);
		await deleteDoc(doc(db, "orders", id));
	};

	const completeOrder = async (
		ids,
		name,
		phone,
		quantity,
		total,
		address,
		email,
		itemname
	) => {
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
			name: name,
			quantity: quantity,
			email: email,
			item_name: itemname,
			id: id,
			phone: phone,
			total: total * quantity,
			address: address,
		});
	};
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

export default Completed;
