import { type FC, useState, useEffect } from "react";
import ProductDetails from "../ProductDetails";
import { Product } from "../../interfaces/product.interface";
import showToast from "../../helpers/showToast";
import { fetchFeaturedProducts } from "../../apis/product.api";

interface FeaturedProps {}

const Featured: FC<FeaturedProps> = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		loadNewProducts();
	}, []);

	const loadNewProducts = async () => {
		const response = await fetchFeaturedProducts();
		if (!response.status) return showToast("danger", response.msg);
		if (response.data.length > 5) response.data.length = 5;
		setProducts(response.data);
	};

	return (
		<section className="feature-section appear-animate">
			<div className="container mt-10 pt-8 mb-10 pb-2">
				<h2 className="title title-underline2 justify-content-center mb-8">
					<span>Our Featured</span>
				</h2>
				{products.length && (
					<div
						className="owl-carousel owl-theme owl-nav-arrow owl-nav-outer owl-nav-image-center row cols-lg-5 cols-md-3 cols-2"
						data-owl-options="{
                                            'items': 5,
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
                                                    'items': 5
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
			</div>
			<div className="banner banner-fixed banner1 appear-animate">
				<figure>
					<img
						src="images/banners/banner_last.jpg"
						width="1920"
						height="500"
						alt="banner"
						style={{ backgroundColor: "#f6f1ec" }}
					/>
				</figure>
				<div className="banner-content y-50 pb-1">
					<h3
						className="banner-subtitle title-underline2 font-weight-normal text-uppercase text-dim pb-1 appear-animate"
						data-animation-options="{
                                            'name': 'fadeInUpShorter',
                                            'delay': '.2s'
                                        }"
					>
						<span>100% Organic</span>
					</h3>
					<h2
						className="banner-title text-dark lh-1 mb-7 appear-animate"
						data-animation-options="{
                                            'name': 'fadeInUpShorter',
                                            'delay': '.4s'
                                        }"
					>
						Fresh Vegetables
						<br />
						for you
					</h2>
					<a
						href="/shop"
						className="btn btn-dark appear-animate"
						data-animation-options="{
                                            'name': 'fadeInUpShorter',
                                            'delay': '.6s'
                                        }"
					>
						SHop now<i className="p-icon-arrow-long-right"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Featured;
