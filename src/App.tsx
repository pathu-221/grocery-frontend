import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import MobileMenu from "./components/MobileMenu.tsx";
import HomePage from "./pages/Home.tsx";
import ShopPage from "./pages/Shop.tsx";

function App() {

	return (
		<>
			<div className="home">
				<div className="page-wrapper">
					<Header />

					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<ShopPage />} />
					</Routes>
					<MobileMenu />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
