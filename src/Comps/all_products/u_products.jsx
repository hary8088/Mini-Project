import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "../all_products/u_products.css";
import { db } from "../../firebase/firebase-config";
import OneProduct from "../all_products/u_product/u_product";
import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	doc,
	setDoc,
} from "firebase/firestore";
import Select from "react-select";
import Modal from "react-modal";
function U_products() {
	const [data, usedata] = useState([]);
	const [modal, setmodal] = useState(false);
	const [selectedoption, setSelectedoption] = useState("");
	const productCollectionRef = collection(db, "products");
	const product_indexCollectionRef = collection(db, "product_index");

	const optionList = [
		{
			value: "",
			label: "All",
		},
		{
			value: "cement",
			label: "Cement",
		},
		{
			value: "paint",
			label: "Paint",
		},
		{
			value: "steel",
			label: "Steel",
		},
		{
			value: "other",
			label: "Others",
		},
	];
	// const imageListRef = ref(storage, "images/");
	useEffect(
		() => {
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

				// usedata(data1.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
				// console.log(data1.val());
			};
			// listAll(imageListRef).then((response) => {
			// 	console.log(response);
			// });
			getProduct();
			console.log(selectedoption);
		},
		[],
		selectedoption
	);
	function handlechange(e) {
		// setmodal(true);
		// setmodal(modal ? false : true);
		// console.log("pressed");
		setSelectedoption(e);
		console.log(selectedoption);
	}
	return (
		<>
			<Header />
			<div className='main'>
				<div className='filter'>
					{" "}
					<div className='filter-1'>Filter</div>
					<div className='filter-1'>
						<Select
							options={optionList}
							value={selectedoption}
							onChange={(e) => handlechange(e)}
						/>
					</div>
				</div>
				<div className='displayArea'>
					{data.map((doc) => {
						if (selectedoption == "" || selectedoption.value == "") {
							console.log("all is selected");
							return (
								<div className='item'>
									<OneProduct
										name={doc.name}
										desc={doc.desc}
										quantity={doc.quantity}
										category={doc.category}
										id={doc.id}
										url={doc.url}
										price={doc.price}
									/>
								</div>
							);
						} else if (doc.category == selectedoption.value) {
							return (
								<div className='item'>
									<OneProduct
										name={doc.name}
										desc={doc.desc}
										quantity={doc.quantity}
										category={doc.category}
										id={doc.id}
										url={doc.url}
										price={doc.price}
									/>
								</div>
							);
						}
					})}
				</div>
			</div>
			{/* <Modal
				isOpen={modal}
				onRequestClose={() => handlechange()}
				className='modal'
				overlayClassName='overlay'
			></Modal> */}
			<br></br>
			<Footer />
		</>
	);
}

export default U_products;
