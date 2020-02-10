// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyAFF8cqzEcjwFDw3KcjhXq4epP2xWW8s3g",
		authDomain: "opt-in-crowds.firebaseapp.com",
		databaseURL: "https://opt-in-crowds.firebaseio.com",
		projectId: "opt-in-crowds",
		storageBucket: "opt-in-crowds.appspot.com",
		messagingSenderId: "731101583235",
		appId: "1:731101583235:web:573e8f63282c4df5"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	const db = firebase.firestore();
	const fb = firebase; // so that fb values/methods can be accessed later (may be wonky)
	//console.log(firebase.firestore.FieldValue.serverTimestamp())
