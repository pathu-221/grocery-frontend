import type { FC } from "react";
import Banner from "../components/Banner";
import Benifits from "../components/Benifits";
import Blogs from "../components/Blogs";
import Featured from "../components/Featured";
import NewArrivals from "../components/NewArrivals";
import TopProducts from "../components/TopProducts";

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
				<Blogs />
			</div>
		</main>
	);
};

export default HomePage;
