import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartItem } from "../../interfaces/cart.interface";
import { fetchAllCartItems } from "../../apis/cart.api";

interface cartApiResponse {
    data: CartItem[],
    msg: string,
}
export const getCartItems = createAsyncThunk<cartApiResponse>('cart/getCartItems',
    async (_, { rejectWithValue }) => {
    
    const data = await fetchAllCartItems();
    if (!data.status) rejectWithValue(data.msg);

    return data as cartApiResponse 
})