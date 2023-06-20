import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import MobileMenu from "./components/MobileMenu.tsx";
import HomePage from "./pages/Home.tsx";
import ShopPage from "./pages/Shop.tsx";
import ProductDetailPage from "./pages/ProductDetail.tsx";
import CartPage from "./pages/Cart.tsx";

function App() {

	return (
		<>
			<div className="home">
				<div className="page-wrapper">
					<Header />

					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<ShopPage />} />
						<Route path="/product" element={<ProductDetailPage />} />
						<Route path="/cart" element={<CartPage />} />
					</Routes>
					<MobileMenu />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
