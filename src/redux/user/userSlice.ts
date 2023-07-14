import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user.interface";
import { RootState } from "../store";

// Define a type for the slice state
interface UserState {
	user: User | null;
}

// Define the initial state using that type
const initialState: UserState = {
	user: null,
};

export const userSlice = createSlice({
	name: "counter",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<User>) => {
			return {
				...state,
				user: action.payload,
			};
		},
		removeUser: (state) => {
			localStorage.removeItem('token');
			return {
				...state,
				user: null
			}
		}
	},
});

export const { addUser, removeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
