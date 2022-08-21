import React from "react";
import "../query/single_query.css";
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
function Single_query(props) {
	const deleteQuery = async () => {
		await deleteDoc(doc(db, "queries", props.id.toString()));
	};
	return (
		<>
			<div className='s-box'>
				<div className='in subject'>Subject:"{props.subject}"</div>
				<div className='in name'>Name:{props.name}</div>
				<div className='in name'>Phone Number: {props.phone}</div>
				<div className='in email'>Email: {props.email}</div>
				<div className='in message'>Message: {props.message} </div>
				<div className='s-button'>
					<div className='s-in reply'>
						<a href='http://www.gmail.com'>
							<button>Reply</button>
						</a>
					</div>
					<div className='s-in delete'>
						<button onClick={(e) => deleteQuery(e)}>Delete</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Single_query;
