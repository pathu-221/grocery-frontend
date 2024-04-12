import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.tsx";
import { useEffect } from "react";
import Header from "./components/Header.tsx";
import MobileMenu from "./components/MobileMenu.tsx";
import HomePage from "./pages/Home.tsx";
import ShopPage from "./pages/Shop.tsx";
import ProductDetailPage from "./pages/ProductDetail.tsx";
import CartPage from "./pages/Cart.tsx";
import CheckoutPage from "./pages/Checkout.tsx";
import OrderCompletePage from "./pages/OrderComplete.tsx";
import MyAccountPage from "./pages/MyAccount.tsx";
import { Toaster } from "react-hot-toast";
import { useAppDispatch } from "./redux/store.ts";
import { authenticate } from "./apis/auth.api.ts";
import { addUser } from "./redux/user/userSlice.ts";
import { getCartItems } from "./redux/cart/cartThunk.ts";
import { useNavigate } from "react-router-dom";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		loadUser();
		window.onpopstate = (event) => {
			location.reload();
		};
	}, []);

	const loadUser = async () => {
		const data = await authenticate();
		if (!data.status) return;

		const user = data.data;
		dispatch(addUser(user));
		dispatch(getCartItems());
	};

	return (
		<>
			<div className="home">
				<div className="page-wrapper">
					<Toaster position="bottom-right" />
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<ShopPage />} />
						<Route path="/product" element={<ProductDetailPage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/checkout" element={<CheckoutPage />} />
						<Route path="/myAccount" element={<MyAccountPage />} />
						<Route path="/orderComplete" element={<OrderCompletePage />} />
					</Routes>
					<MobileMenu />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
