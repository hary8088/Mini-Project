import React from "react";
import { useState } from "react";
import Styles from "../contact/contact.module.css";
import Header from "../header/header";
import { db } from "../../firebase/firebase-config";
import Footer from "../footer/footer";

import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	doc,
	setDoc,
} from "firebase/firestore";

const contact = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [buyer, setBuyer] = useState("");
	const [message, setMessage] = useState("");

	const submitQuery = async () => {
		console.log("Name: ", name);
		const docRef = doc(db, "query_index", "index");
		const docSnap = await getDoc(docRef);

		let id_array = [];
		id_array.push(docSnap.data());
		console.log("index: ", docSnap.data());
		let id = id_array[0].id;

		id = id + 1;

		await setDoc(doc(db, "query_index", "index"), {
			id: id,
		});

		await setDoc(doc(db, "queries", id.toString()), {
			name: name,
			phone: phone,
			email: email,
			subject: subject,
			buyer: buyer,
			message: message,
			id: id,
		});
	};
	return (
		<>
			<Header />
			<div className={Styles.content}>
				<div className={Styles.map}></div>
				<div className={Styles.mainHolder}>
					<div className={Styles.main}>
						<div className={Styles.heading}>
							<h1>Reach us!</h1>
						</div>
						<div className={Styles.gst}>
							<h1>( GSTIN ) - 33BICPS7155R2ZI </h1>
						</div>
						<div className={Styles.boxes}>
							<div className={Styles.box1}>
								<div className={Styles.boxHead}>Registered Office</div>
								<div className={Styles.address}>
									Koottai Kaadu
									<br /> 5th Street, Dharapuram Road, Tirupur - 641 604.{" "}
									<br /> Tamil Nadu, India
								</div>
							</div>


							<div className={Styles.box1}>
								<div className={Styles.boxHead}>Registered Office</div>
								<div className={Styles.address}>
									Bathrakaliamman Kovil
									<br /> 1st Steet, Tiruchengode, Nammakal - 637211.{" "}
									<br /> Tamil Nadu, India
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={Styles.formHold}>
					<div className={Styles.form}>
						<div className={Styles.formHead}>
							<h1>Leave a Message</h1>
						</div>
						<div className={Styles.row}>
							<input
								type='text'
								name=''
								id=''
								placeholder='Your Name'
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								type='text'
								name=''
								id=''
								placeholder='Phone Number'
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div className={Styles.row}>
							<input
								type='text'
								name=''
								id=''
								placeholder='E-mail'
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								type='text'
								name=''
								id=''
								placeholder='Company'
								onChange={(e) => setBuyer(e.target.value)}
							/>
						</div>
						<div className={Styles.row}>
							<input
								type='text'
								name=''
								id=''
								placeholder='Subject'
								onChange={(e) => setSubject(e.target.value)}
							/>
						</div>
						<div className={Styles.row}>
							<textarea
								name=''
								id=''
								cols='80'
								rows='10'
								placeholder='Your message'
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</div>
						<div className={Styles.row}>
							<button onClick={(e) => submitQuery(e)}>SUBMIT</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default contact;
