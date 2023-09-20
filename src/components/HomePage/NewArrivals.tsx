import { type FC, useState, useEffect } from "react";
import ProductDetails from "../ProductDetails";
import { Product } from "../../interfaces/product.interface";
import { fetchAllProducts } from "../../apis/product.api";
import showToast from "../../helpers/showToast";

interface NewArrivalsProps {}

const NewArrivals: FC<NewArrivalsProps> = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		loadNewProducts();
	}, []);

	const loadNewProducts = async () => {
		const response = await fetchAllProducts("", "latest", 5, 1);
		if (!response.status) return showToast("danger", response.msg);
		setProducts(response.data);
	};
	return (
		<section className="new-section container mt-10 pt-8 appear-animate">
			<h2 className="title title-underline2 justify-content-center mb-8">
				<span>New Arrivals</span>
			</h2>
			{products.length && (
				<div
					className="owl-carousel owl-theme owl-nav-arrow owl-nav-outer owl-nav-image-center row cols-lg-4 cols-md-3 cols-2"
					data-owl-options="{
                                    'items': 4,
                                    'nav': false,
                                    'dots': true,
                                    'margin': 20,
                                    'loop': false,
                                    'responsive': {
                                        '0': {
                                            'items': 2
                                        },
                                        '768': {
                                            'items': 3,
                                            'dots': true
                                        },
                                        '992': {
                                            'items': 4
                                        },
                                        '1400': {
                                            'nav': true,
                                            'dots': false
                                        }
                                    }
                                }"
				>
					{products.map((item) => (
						<ProductDetails product={item} />
					))}
				</div>
			)}
		</section>
	);
};

export default NewArrivals;
