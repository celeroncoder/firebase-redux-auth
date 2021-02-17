import React from 'react';
import './App.css';
import { auth, provider } from "./firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUsers, setUserLogOutState, selectUserEmail, selectUserName } from "./features/userSlice"; 

function App() {

	const dispatch = useDispatch();

	const userName = useSelector(selectUserName);
	const userEmail = useSelector(selectUserEmail);

	const handleSignIn = () => {
		auth.signInWithPopup(provider).then( (result) => {
			dispatch(setActiveUsers({
				userName: result.user.displayName,
				userEmail: result.user.email
			}))
		})
	};
	const handleSignOut = () => {
		auth.signOut()
		.then(() => dispatch(setUserLogOutState()))
		.catch((err) => alert(err.message));
	};

	return ( 
	  <div className="app">
	    	<h1>This is the Redux auth</h1>
		{
			userName ? <button onClick={handleSignOut}>Sign Out</button> 
			: <button onClick={handleSignIn}>Sign In</button>
		}
	  </div>
	);
}

export default App;
