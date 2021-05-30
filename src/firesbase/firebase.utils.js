import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAAiP26mmBd9-pmpkoHfAdwrhd0x8Y_C7Y",
	authDomain: "e-commerce-d704b.firebaseapp.com",
	projectId: "e-commerce-d704b",
	storageBucket: "e-commerce-d704b.appspot.com",
	messagingSenderId: "906284432463",
	appId: "1:906284432463:web:36f7b0fa78cb061aaf7e3a",
	measurementId: "G-FRFJKEJW6V",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`user/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (e) {
			console.log(e.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
