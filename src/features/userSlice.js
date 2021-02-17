import { createSlice } from "@reduxjs/toolkit";

// just like [userName, seruserName] = useState(null);
// initial state
const initialState = {
	userName: null,
	userEmail: null
};

// slice is a component of the redux app store.
// action.payload is the result that'll get after SignIn with Google 
// basic userName and userEmail
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setActiveUsers: (state, action) => {
			state.userName = action.payload.userName;
			state.userEmail = action.payload.userEmail;
		},
		setUserLogOutState: (state) => {
			state.userName = null;
			state.userEmail = null;
		}
	}
});

export const { setActiveUsers, setUserLogOutState } = userSlice.actions;

// returning the user value
export const selectUserName = state => state.user.userName;
export const selectUserEmail = state => state.user.userEmail;

// exporting the slice to configure Redux Store in the app/store.js
export default userSlice.reducer;
