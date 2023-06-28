import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.tsx";
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
//import 'tailwindcss/tailwind.css';

function App() {

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
