import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItem } from "../../interfaces/cart.interface";
import { getCartItems } from "./cartThunk";

// Define a type for the slice state
interface cartState {
	cartItems: CartItem[] | null;
	error: any;
}

// Define the initial state using that type
const initialState: cartState = {
	cartItems: null,
	error: null,
};

export const cartSlice = createSlice({
	name: "counter",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCartItems.fulfilled, (state, { payload }) => {
				state.cartItems = payload.data;
			})
			.addCase(getCartItems.rejected, (state, action) => {
				if (action.payload) state.error = action.payload;
			});
	},
});

export const {} = cartSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default cartSlice.reducer;
