import type { FC } from "react";
import ProductDetails from "../ProductCard";

interface NewArrivalsProps {}

const NewArrivals: FC<NewArrivalsProps> = () => {
	return (
		<section className="new-section container mt-10 pt-8 appear-animate">
			<h2 className="title title-underline2 justify-content-center mb-8">
				<span>New Arrivals</span>
			</h2>
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
				<ProductDetails />
				<ProductDetails />
				<ProductDetails />
				<ProductDetails />
			</div>
			<div className="row mt-10 appear-animate">
				<div className="col-md-6">
					<div className="banner banner-fixed banner3 mb-md-0 mb-4">
						<figure>
							<img
								src="images/demos/demo1/banner/banner2.jpg"
								alt="banner"
								width="610"
								height="250"
								style={{ backgroundColor: "#86786b" }}
							/>
						</figure>
						<div className="banner-content y-50">
							<h4 className="banner-subtitle font-weight-normal text-white ls-1 mt-1">
								JUST ARRIVED
							</h4>
							<h3 className="banner-title text-white lh-1 mb-3">
								New DietCoke
							</h3>
							<a
								href="shop.html"
								className="btn btn-underline btn-link text-white"
							>
								Shop Now<i className="p-icon-arrow-long-right pl-1"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="banner banner-fixed banner3">
						<figure>
							<img
								src="images/demos/demo1/banner/banner3.jpg"
								alt="banner"
								width="610"
								height="250"
								style={{ backgroundColor: "#ddd" }}
							/>
						</figure>
						<div className="banner-content y-50">
							<h4 className="banner-subtitle font-weight-normal text-dim ls-1 mt-1">
								BEST SELLING
							</h4>
							<h3 className="banner-title text-dark lh-1 mb-3">
								Special Snack
							</h3>
							<a
								href="shop.html"
								className="btn btn-underline btn-link text-dark"
							>
								Shop Now<i className="p-icon-arrow-long-right pl-1"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewArrivals;
