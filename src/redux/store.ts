import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice';
import cartReducer from './cart/cartSlice';
import { useDispatch } from "react-redux";
// ...

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
