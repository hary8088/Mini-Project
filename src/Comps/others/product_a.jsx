import React, { useState } from "react";
import "../others/product_a.css";
import Modal from "react-modal";
import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	doc,
	setDoc,
	deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

function A_product(props) {
	const [modal, setmodal] = useState(false);
	const [name, setname] = useState(props.name);
	const [quantity, setquantity] = useState(props.quantity);
	const [category, setcategory] = useState(props.category);
	const [desc, setdesc] = useState(props.desc);
	function handlechange(e) {
		// setmodal(true);
		setmodal(modal ? false : true);
		console.log("pressed");
	}
	// async function deleteProduct() {
	// 	await deleteDoc(doc(db,"products",props.id.toString()));
	// }
	const deleteProduct = async () => {
		await deleteDoc(doc(db, "products", props.id.toString()));
	};
	const updateProduct = async () => {
		await setDoc(doc(db, "products", props.id.toString()), {
			name: name,
			quantity: quantity,
			desc: desc,
			id: props.id,
			category: category,
			url: props.url,
		});
		handlechange();
	};
	return (
		<div>
			<div className='box-i'>
				<div className='image'>
					<img src={props.url} alt={props.name} />
				</div>
				<div className='content'>
					<div className='content in'>
						<div className='child name'>{props.name}</div>
						<div className='child desc'>{props.desc}</div>
					</div>

					<div className='child quantity'>{props.quantity}</div>
				</div>
				<div className='button-d'>
					<div>
						<button className='add' onClick={(e) => handlechange()}>
							Add
						</button>
					</div>
					<div>
						<button className='remove' onClick={(e) => deleteProduct(e)}>
							Remove
						</button>
					</div>
				</div>
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
							value={name}
							onChange={(e) => setname(e.target.value)}
						/>
					</div>
					<div className='m-content'>
						<input
							type='text'
							placeholder='Quantity'
							value={quantity}
							onChange={(e) => setquantity(e.target.value)}
						/>
					</div>
					<div className='m-content'>
						<input
							type='text'
							value={desc}
							placeholder='Description'
							onChange={(e) => setdesc(e.target.value)}
						/>
					</div>
					<div className='m-content'>
						<select
							name='category'
							onChange={(e) => setcategory(e.target.value)}
							placeholder={category}
						>
							<option value={props.category}>{props.category}</option>
							<option value='paint'>Paints</option>
							<option value='steel'>Steel</option>
							<option value='cement'>Cement</option>
							<option value='others'>Others</option>
						</select>
					</div>
					<div className='m-button'>
						<button className='m-button-in' onClick={(e) => updateProduct(e)}>
							Add
						</button>
						<button className='m-button-in' onClick={(e) => handlechange(e)}>
							Close
						</button>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default A_product;
