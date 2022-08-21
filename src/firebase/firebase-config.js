import {initializeApp} from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getStorage}  from "firebase/storage"

const firebaseConfig = {
	apiKey: "AIzaSyAXZwVCTZKXez27P72efEkq44TyLBorjlk",
	authDomain: "shivamtraders-a9ba1.firebaseapp.com",
	projectId: "shivamtraders-a9ba1",
	storageBucket: "shivamtraders-a9ba1.appspot.com",
	messagingSenderId: "543889703753",
	appId: "1:543889703753:web:3e59bbdffc386fdf491098",
	measurementId: "G-GFGP5GCZPW",
};

const app = initializeApp(firebaseConfig);

export const storage=getStorage(app)

export const db = getFirestore(app);
