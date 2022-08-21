import React, { useState } from "react";
import "../u_product/u_product.css";
import Modal from "react-modal";
import { db } from "../../../firebase/firebase-config";
import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	doc,
	setDoc,
} from "firebase/firestore";

function U_product(props) {
	const [modal, setmodal] = useState(false);
	const [name, setname] = useState("");
	const [phone, setphone] = useState("");
	const [email, setemail] = useState("");
	const [price, setprice] = useState(props.price);
	const [quantity, setquantity] = useState(0);
	const [add, setadd] = useState("");
	function handlechange(e) {
		// setmodal(true);
		setmodal(modal ? false : true);
		console.log("pressed");
	}

	const orderCollectionRef = collection(db, "orders");

	const orderProduct = async () => {
		const docRef = doc(db, "order_index", "index");
		const docSnap = await getDoc(docRef);

		let id_array = [];
		id_array.push(docSnap.data());
		console.log("index: ", docSnap.data());
		let id = id_array[0].id;
		id = id + 1;
		console.log("id after added: ", id);
		await setDoc(doc(db, "order_index", "index"), {
			id: id,
		});
		await setDoc(doc(db, "orders", id.toString()), {
			name: name,
			quantity: quantity,
			email: email,
			item_name: props.name,
			id: id,
			phone: phone,
			total: price * quantity,
			address: add,
		});
		handlechange();
	};
	return (
		<>
			<div className='main-u'>
				<div className='image'>
					<img src={props.url} alt={props.name} />
				</div>
				<div className='product'>
					<div className='info'>
						<div className='info name'>{props.name}</div>
						<div className='info desc'>{props.desc}</div>
					</div>

					<div className='price'>{props.price}</div>
				</div>
				<div className='uk-button'>
					<button onClick={() => handlechange()}>Place Order</button>
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
							placeholder='Buyer Name'
							onChange={(e) => setname(e.target.value)}
						/>
					</div>
					<div className='m-content'>
						<input
							type='text'
							placeholder='Phone Number'
							onChange={(e) => setphone(e.target.value)}
						/>
					</div>
					<div className='m-content'>
						<input
							type='text'
							placeholder='Address'
							onChange={(e) => setadd(e.target.value)}
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
							placeholder='E-mail'
							onChange={(e) => setemail(e.target.value)}
						/>
					</div>
					<div className='react-select-container'>
						{/* <input
								type='text'
								placeholder='Category'
								onChange={(e) => setcategory(e.target.value)}
							/> */}
						{/* <div class='react-select__control'>
								<div class='react-select__option'>
									<Select
										className='m-content'
										options={optionList}
										value={category}
										onChange={(e) => setcategory(e)}
									/>
								</div>
							</div> */}
					</div>
					{/* <div className='m-content'>
							<input
								type='file'
								placeholder='Files'
								onChange={(e) => setimageUpload(e.target.files[0])}
							/>
						</div> */}
					<div className='m-button'>
						<button className='m-button-in' onClick={(e) => orderProduct(e)}>
							Place Order
						</button>
						<button className='m-button-in' onClick={(e) => handlechange(e)}>
							Cancel
						</button>
					</div>
				</Modal>
			</div>
		</>
	);
}

export default U_product;
