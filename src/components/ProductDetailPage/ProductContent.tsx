import type { FC } from "react";
import ProductReviews from "./ProductReviews";

interface ProductContentProps {}

const ProductContent: FC<ProductContentProps> = () => {
	return (
		<div className="product-content">
			{/* <div className="content-description">
				<h2 className="title title-line title-underline mb-lg-8">
					<span>Description</span>
				</h2>
				<h3 className="content-title">About this Product</h3>
				<p className="mb-4 mb-lg-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis
					tellus in metus. Vel pretium lectus quam id leo in vitae turpis massa.
					Nunc id cursus metus aliquam. Libe id faucibus nisl tincidunt eget.
					Aliquam id diam maecenas ultricies mi eget mauris.
				</p>
				<div className="row">
					<div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
						<div className="inner-video banner banner-fixed banner-video overlay-dark">
							<figure>
								<a href="#">
									<img
										src="images/products/product-single/banner/product-dec1.jpg"
										alt="product-banner"
										width="610"
										height="400"
										style={{ backgroundColor: "#526e45" }}
									/>
								</a>
								<video>
									<source src="video/memory-of-a-woman.mp4" type="video/mp4" />
								</video>
							</figure>
							<div className="banner-content text-center y-50 x-50">
								<a
									className="video-btn video-play"
									href="video/memory-of-a-woman.mp4"
									data-video-source="hosted"
								>
									<i className="fas fa-play"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-6 with-content-index pt-3 pt-md-0 content-index-1 pl-2 pl-lg-7">
						<h4 className="content-subtitle">How we start our work</h4>
						<p className="mb-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Venenatis tellus in metus vulputate eu scelerisque felis. Vel
							pretium lectus quam id leo in vitae turpis massa. Nunc id cursus
							metus aliquam. Libero id faucibus nisl tincidunt eget. Aliquam id
							diam maecenas ultricies mi eget mauris. Volutpat ac tincidunt
							vitae semper quis lectus. mattis ullamcorper velit sed.
						</p>
					</div>
				</div>

				<div className="row mt-0 mt-lg-10 pt-8">
					<div className="col-12 col-md-6 col-lg-6 with-content-index content-index-2 pr-2 pr-lg-7">
						<h4 className="content-subtitle">Why People love Panda?</h4>
						<p className="mb-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Venenatis tellus in metus vulputate eu scelerisque felis. Vel
							pretium lectus quam id leo in vitae turpis massa. Nunc id cursus
							metus aliquam. Libero id faucibus nisl tincidunt eget. Aliquam id
							diam maecenas ultricies mi eget mauris. Volutpat ac tincidunt
							vitae semper quis lectus. mattis ullamcorper velit sed.
						</p>
					</div>
					<div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
						<div className="overlay-dark">
							<figure>
								<img
									src="images/products/product-single/banner/product-desc2.jpg"
									alt="product-banner"
									width="610"
									height="400"
									style={{ backgroundColor: "#526e45" }}
								/>
							</figure>
						</div>
					</div>
				</div>
			</div> */}
			<div className="content-specification mt-10 pt-3">
				<h2 className="title title-line title-underline">
					<span>Specifications</span>
				</h2>
				<ul className="list-none">
					<li>
						<label>WEIGHT</label>
						<p>5 kg</p>
					</li>
					<li>
						<label>DIMENSIONS</label>
						<p>10 × 10 × 10 cm</p>
					</li>
					<li>
						<label>WEIGHT UNIT</label>
						<p>1KG, 1LB, 500G, Bound, Each</p>
					</li>
				</ul>
			</div>
			<ProductReviews />
		</div>
	);
};

export default ProductContent;
