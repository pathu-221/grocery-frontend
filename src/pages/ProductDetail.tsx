import type { FC } from "react";
import ProductGallery from "../components/ProductDetailPage/ProductGallery";
import ProductGalleryDetails from "../components/ProductDetailPage/ProductGalleryDetails";
import ProductContent from "../components/ProductDetailPage/ProductContent";
import ProductRelated from "../components/ProductDetailPage/ProductRelated";

interface ProductDetailPageProps {}

const ProductDetailPage: FC<ProductDetailPageProps> = () => {
	return (
		<main className="main single-product">
			{/** top small nav */}
			<nav className="breadcrumb-nav">
				<div className="container">
					<div className="product-navigation">
						<ul className="breadcrumb">
							<li>
								<a href="demo1.html">Home</a>
							</li>
							<li>
								<a href="product-simple.html">Products</a>
							</li>
							<li>Default</li>
						</ul>
						<div className="product-image-nav">
							<a href="#" className="product-nav product-nav-prev">
								<figure>
									<img
										src="images/products/product-single/navigation/prev.jpg"
										width="150"
										height="150"
										alt="nav-prev"
									/>
								</figure>
								<i className="p-icon-arrow-long-left"></i>
							</a>
							<a href="#" className="product-nav product-nav-next">
								<figure>
									<img
										src="images/products/product-single/navigation/next.jpg"
										width="150"
										height="150"
										alt="nav-next"
									/>
								</figure>
								<i className="p-icon-arrow-long-right"></i>
							</a>
						</div>
					</div>
				</div>
			</nav>

			<div className="page-content">
				<div className="container">
					<div className="product product-single product-simple row mb-8">
						<div className="col-md-7">
							<ProductGallery />
						</div>
						<div className="col-md-5">
							<ProductGalleryDetails />
						</div>
					</div>
					<ProductContent />
				</div>
				<ProductRelated />
			</div>
		</main>
	);
};

export default ProductDetailPage;
