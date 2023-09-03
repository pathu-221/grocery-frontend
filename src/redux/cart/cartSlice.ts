import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../interfaces/cart.interface";
import {
	getCartItems,
	addToCart,
	deleteFromCart,
	updateCart,
} from "./cartThunk";
import showToast from "../../helpers/showToast";

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
	reducers: {
		addItem: (state, action: PayloadAction<{ id: string }>) => {
			state.cartItems?.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					cartItem.quantity += 1;
				}
			});
		},
		removeItem: (state, action: PayloadAction<{ id: string }>) => {
			state.cartItems?.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					if (cartItem.quantity > 1) cartItem.quantity -= 1;
					else if (cartItem.quantity === 0) {
						return null; //indicated this item should be removed
					}
					return cartItem;
				}
			});
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCartItems.fulfilled, (state, { payload }) => {
				state.cartItems = payload.data;
			})
			.addCase(getCartItems.rejected, (state, action) => {
				if (action.payload) state.error = action.payload;
			});

		builder.addCase(addToCart.fulfilled, (state, { payload }) => {
			const existingCartItem = state.cartItems?.find(
				(cartItem) => cartItem.id === payload.data.id
			);

			if (existingCartItem) {
				// Item already exists, update the quantity
				existingCartItem.quantity = payload.data.quantity;
			} else {
				// Item doesn't exist, add it to cartItems array
				state.cartItems?.push({ ...payload.data });
			}

			showToast("success", payload.msg);
		});

		builder.addCase(deleteFromCart.fulfilled, (_, { payload }) => {
			console.log({ payload });
			showToast("success", payload.msg);
		});
		builder.addCase(updateCart.fulfilled, (_, { payload }) => {
			showToast("success", payload.msg);
		});
	},
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
