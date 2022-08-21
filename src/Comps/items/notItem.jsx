import React, { useEffect, useState } from "react";
import Styles from "../items/notItem.module.css";
import A_product from "../others/product_a";
import { db } from "../../firebase/firebase-config";
import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	doc,
	setDoc,
} from "firebase/firestore";
function NotItems() {
	const productCollectionRef = collection(db, "products");
	const product_indexCollectionRef = collection(db, "product_index");

	const [data1, usedata1] = useState([]);
	const orderCollectionRef = collection(db, "completed");
	const [data, usedata] = useState([]);
	const [stock, useStock] = useState(true);
	useEffect(() => {
		const getProduct = async () => {
			await getDocs(productCollectionRef)
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
			await getDocs(orderCollectionRef)
				.then((snapshot) => {
					let product = [];
					snapshot.docs.forEach((doc) => {
						product.push({ ...doc.data(), id: doc.id });
					});
					console.log("Product is: ", product[0].name);
					usedata1(product);
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
	let sum = 0;
	return (
		<>
			<div className={Styles.main}>
				<div className={Styles.box_holder}>
					<div className={Styles.title}>Monthly Status</div>
					<div className={Styles.row}>
						<div className={Styles.box}>
						Total Sales
							<div className={Styles.heading}>
								
								{data1.map((doc) => {
									console.log(parseInt(doc.total));
									sum = sum + parseInt(doc.total);
									// console.log(sum);
								})}
								₹{sum}
							</div>
							
						</div>
						<div className={Styles.box}>
							<div className={Styles.heading}>Sales Expected</div>
							<div className={Styles.heading}> ₹ 1,00,000</div>
							
						</div>
					</div>
					<div className={Styles.refilled}>
						<div>Items to be refilled</div>
						<div className='i-contentArea'>
							{data.map((doc) => {
								if (doc.quantity < 50) {
									// useStock(false);
									return (
										<div>
											<div className='item'>
												<A_product
													name={doc.name}
													desc={doc.desc}
													quantity={doc.quantity}
													category={doc.category}
													id={doc.id}
													url={doc.url}
												/>
											</div>
										</div>
									);
								}
							})}
						</div>
						<div>
							{/* {() => {
								if (useStock) {
									return <>All Stocks are available</>;
								}
							}} */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default NotItems;
