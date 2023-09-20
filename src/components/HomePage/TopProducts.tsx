import { useState, useEffect, type FC } from "react";
import ProductDetails from "../ProductDetails";
import { Category } from "../../interfaces/category.interface";
import { fetchAllCategories } from "../../apis/category.api";
import showToast from "../../helpers/showToast";
import { getImgeUrl } from "../../helpers/getImageUrl";
import { Link } from "react-router-dom";

interface TopProductsProps {}

const TopProducts: FC<TopProductsProps> = () => {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		loadCategories();
	}, []);

	const loadCategories = async () => {
		const response = await fetchAllCategories();
		if (!response.status) return showToast("danger", response.msg);
		setCategories(response.data);
	};
	return (
		<section className="container mt-10 pt-7 mb-7 appear-animate">
			<h2 className="title-underline2 text-center mb-2">
				<span>Categories</span>
			</h2>
			<div className="tab tab-nav-center product-tab product-tab-type2">
				<ul className="nav nav-tabs">
					{categories &&
						categories.map((item) => (
							<li className="nav-item">
								<Link
									className="nav-link active"
									to={`/shop/?category=${item.name}`}
								>
									<figure>
										<img
											style={{
												width: "160px",
												height: "130px",
												borderRadius: "18px",
											}}
											src={getImgeUrl(item.image)}
											width="160px"
											height="130px"
											alt="Nav img"
										/>
									</figure>
									<div className="nav-title">{item.name}</div>
								</Link>
							</li>
						))}
				</ul>
				
			</div>
		</section>
	);
};

export default TopProducts;
