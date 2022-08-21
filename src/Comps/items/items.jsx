import React, { useState, useEffect } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import A_product from "../others/product_a";
import "../items/item.css";
import { db } from "../../firebase/firebase-config";
import { storage } from "../../firebase/firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	doc,
	setDoc,
} from "firebase/firestore";
import Modal from "react-modal";
import Select from "react-select";
function Items() {
	const [data, usedata] = useState([]);
	const [modal, setmodal] = useState(false);
	const [name, setname] = useState("");
	const [quantity, setquantity] = useState(0);
	const [price, setprice] = useState(0);
	const [category, setcategory] = useState("");
	const [desc, setdesc] = useState("");
	const [id_image, setid_image] = useState(0);
	const [imageUpload, setimageUpload] = useState(null);
	const [imageList, setimageList] = useState([]);
	const optionList = [
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
	let id_for_image = 0;

	//variable for firestore more like a reference
	const productCollectionRef = collection(db, "products");
	const product_indexCollectionRef = collection(db, "product_index");
	const imageListRef = ref(storage, "images/");

	function uploadImage() {
		if (imageUpload == null) return;

		const imageRef = ref(storage, `images/${id_for_image}`);
		console.log("id in uploadProduct", id_image);
		uploadBytes(imageRef, imageUpload).then(() => {
			alert("Product Added");
		});
	}
	const createProduct = async () => {
		console.log(category);
		const docRef = doc(db, "product_index", "index");
		const docSnap = await getDoc(docRef);

		let id_array = [];
		id_array.push(docSnap.data());
		console.log("index: ", docSnap.data());
		let id = id_array[0].id;

		// setid(id_array[0].id);
		id = id + 1;
		console.log("id after added: ", id);
		// const update_id = setid_image((state) => state + id);
		// update_id();
		setid_image(id);
		setid_image((state) => {
			console.log("the state is", state);
			id_for_image = state;
			return state;
		});

		console.log(id_for_image);

		console.log("id in createProduct", id_image);
		uploadImage();
		let url_for_db;
		await getDownloadURL(ref(storage, `images/${id_for_image}`)).then((url) => {
			console.log("URL is: ", url);
			url_for_db = url;
		});

		console.log(id_array[0].id);
		await setDoc(doc(db, "product_index", "index"), {
			id: id,
		});
		console.log("Category is: ", category);
		await setDoc(doc(db, "products", id.toString()), {
			name: name,
			quantity: quantity,
			desc: desc,
			id: id,
			price: price,
			category: category.value,
			url: url_for_db,
		});
		// await addDoc(productCollectionRef, {
		// 	name: name,
		// 	quantity: quantity,
		// 	desc: desc,
		// 	id: 0,
		// 	category: category,
		// });

		handlechange();
	};
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

			// usedata(data1.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			// console.log(data1.val());
		};
		listAll(imageListRef).then((response) => {
			console.log(response);
		});
		getProduct();
	}, []);
	function handlechange(e) {
		// setmodal(true);
		setmodal(modal ? false : true);
		console.log("pressed");
	}
	return (
		<>
			<div className='i-content'>
				<div className='i-button'>
					<button className='newbutton' onClick={(e) => handlechange(e)}>
						Add New Item
					</button>
				</div>
				<div className='i-contentArea'>
					{data.map((doc) => {
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
					})}
					<Modal
						isOpen={modal}
						onRequestClose={() => handlechange()}
						className='modal'
						overlayClassName='overlay'
					>
						<div className='m-content'>
							<input
								type='text'
								placeholder='Product name'
								onChange={(e) => setname(e.target.value)}
							/>
						</div>
						<div className='m-content'>
							<input
								type='text'
								placeholder='Quantity'
								onChange={(e) => setquantity(e.target.value)}
							/>
						</div>
						<div className='m-content'>
							<input
								type='text'
								placeholder='Description'
								onChange={(e) => setdesc(e.target.value)}
							/>
						</div>
						<div className='m-content'>
							<input
								type='text'
								placeholder='Price per piece'
								onChange={(e) => setprice(e.target.value)}
							/>
						</div>
						<div className='react-select-container'>
							{/* <input
								type='text'
								placeholder='Category'
								onChange={(e) => setcategory(e.target.value)}
							/> */}
							<div class='react-select__control'>
								<div class='react-select__option'>
									<Select
										className='m-content'
										options={optionList}
										value={category}
										onChange={(e) => setcategory(e)}
									/>
								</div>
							</div>
						</div>
						<div className='m-content'>
							<input
								type='file'
								placeholder='Files'
								onChange={(e) => setimageUpload(e.target.files[0])}
							/>
						</div>
						<div className='m-button'>
							<button className='m-button-in' onClick={(e) => createProduct(e)}>
								Add
							</button>
							<button className='m-button-in' onClick={(e) => handlechange(e)}>
								Close
							</button>
						</div>
					</Modal>
				</div>
			</div>
		</>
	);
}

export default Items;
