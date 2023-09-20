import type { FC } from "react";
import Banner from "../components/HomePage/Banner";
import Benifits from "../components/HomePage/Benifits";
import Featured from "../components/HomePage/Featured";
import NewArrivals from "../components/HomePage/NewArrivals";
import TopProducts from "../components/HomePage/TopProducts";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
	return (
		<main className="main">
			<div className="page-content">
				<Banner />
				<TopProducts />
				<Benifits />
				<NewArrivals />
				<Featured />
			</div>
		</main>
	);
};

export default HomePage;
