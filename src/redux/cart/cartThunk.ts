import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	deleteItemFromCart,
	fetchAllCartItems,
	updateCartItem,
} from "../../apis/cart.api";
import { addItemToCart as addItemToCartApi } from "../../apis/cart.api";
interface cartApiResponse {
	data: any;
	msg: string;
}
export const getCartItems = createAsyncThunk<cartApiResponse>(
	"cart/getCartItems",
	async (_, { rejectWithValue }) => {
		const data = await fetchAllCartItems();
		if (!data.status) rejectWithValue(data.msg);

		return data as cartApiResponse;
	}
);

export const addToCart = createAsyncThunk<cartApiResponse, string>(
	"cart/addToCart",
	async (productId, { rejectWithValue }) => {
		const data = await addItemToCartApi(productId);
		if (!data.status) rejectWithValue(data.msg);
		return data as cartApiResponse;
	}
);

export const deleteFromCart = createAsyncThunk<cartApiResponse, string>(
	"cart/deleteFromCart",
	async (productId, { rejectWithValue }) => {
		const data = await deleteItemFromCart(productId);
		if (!data.status) rejectWithValue(data.msg);
		return data as cartApiResponse;
	}
);

export const updateCart = createAsyncThunk<
	cartApiResponse,
	{
		carItemId: string;
		formData: any;
	}
>("cart/updateCart", async ({ carItemId, formData }, { rejectWithValue }) => {
	const data = await updateCartItem(carItemId, formData);
	if (!data.status) rejectWithValue(data.msg);
	return data as cartApiResponse;
});
