import React, { useEffect } from "react";
import "../query/query.css";
import Single_query from "./single_query";
import { db } from "../../firebase/firebase-config";
import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	doc,
	setDoc,
} from "firebase/firestore";
import { useState } from "react";
function Query() {
	const queryCollectionRef = collection(db, "queries");
	const [data, useData] = useState([]);

	useEffect(() => {
		const getQuery = async () => {
			await getDocs(queryCollectionRef)
				.then((snapshot) => {
					let query = [];
					snapshot.docs.forEach((doc) => {
						query.push({ ...doc.data(), id: doc.id });
					});
					// console.log("Product is: ", product[0].id);
					useData(query);
				})
				.catch((err) => {
					console.log(err.message);
				});
		};

		getQuery();
	}, []);
	return (
		<>
			<div className='query'>
				{data.map((doc) => {
					return (
						<div className='query-1'>
							<Single_query
								name={doc.name}
								phone={doc.phone}
								subject={doc.subject}
								email={doc.email}
								buyer={doc.buyer}
								message={doc.message}
								id={doc.id}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Query;
