import type { FC } from "react";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../apis/product.api";
import { Product } from "../../interfaces/product.interface";
import ProductDetails from "../ProductDetails";

interface ProductRelatedProps {
	categoryName: string;
}

const ProductRelated: FC<ProductRelatedProps> = ({ categoryName }) => {
	const [relatedProducts, setRelatedProducts] = useState<Product[]>();

	// const returnProductImage = (images: string) => {
	// 	const image = JSON.parse(images) as string[];

	// 	return image[0];
	// };

	useEffect(() => {
		loadRelatedProducts();
	}, []);

	const loadRelatedProducts = async () => {
		const data = await fetchAllProducts(categoryName);
		if (!data.status) return alert(data.msg);

		setRelatedProducts(data.data);
	};
	return (
		<div className="container">
			<section className="mt-3">
				<h2 className="text-center mb-7">Related Products</h2>
				<div
					className="owl-carousel owl-theme owl-nav-outer slider-brand row cols-lg-4 cols-md-3 cols-2"
					data-owl-options="{
                            'nav': true,
                            'dots': false,
                            'margin': 20,
                            'loop': false,
                            'responsive': {
                                '0': {
                                    'items': 2,
                                    'autoplay': true,
                                    'nav': false
                                },
                                '768': {
                                    'items': 3,
                                    'nav': false
                                },
                                '992': {
                                    'items': 4
                                }
                            }
                        }"
				>
					{/* <div className="product-wrap">
						<div className="product text-center">
							<figure className="product-media">
								<a href="#">
									<img
										src="images/products/295x369.jpg"
										alt="product"
										width="295"
										height="369"
									/>
								</a>
								<div className="product-label-group">
									<label className="product-label label-new">New</label>
								</div>
								<div className="product-action-vertical">
									<a
										href="#"
										className="btn-product-icon btn-cart"
										data-toggle="modal"
										data-target="#addCartModal"
										title="Add to Cart"
									>
										<i className="p-icon-cart-solid"></i>
									</a>
									<a
										href="#"
										className="btn-product-icon btn-wishlist"
										title="Add to Wishlist"
									>
										<i className="p-icon-heart-solid"></i>
									</a>
									<a
										href="#"
										className="btn-product-icon btn-compare"
										title="Compare"
									>
										<i className="p-icon-compare-solid"></i>
									</a>
									<a
										href="#"
										className="btn-product-icon btn-quickview"
										title="Quick View"
									>
										<i className="p-icon-search-solid"></i>
									</a>
								</div>
							</figure>
							<div className="product-details">
								<div className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "60% " }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a
										href="product-simple.html#content-reviews"
										className="rating-reviews hash-scroll"
									>
										(12)
									</a>
								</div>
								<h5 className="product-name">
									<a href="#">Peanuts</a>
								</h5>
								<div className="product-price">
									<ins className="new-price">$12.00</ins>
								</div>
							</div>
						</div>
					</div> */}
					{relatedProducts &&
						relatedProducts.map((product) => (
						<ProductDetails product={product} />
						))}
					{/* <div className="product-wrap">
						<div className="product text-center">
							<figure className="product-media">
								<a href="#">
									<img
										src="images/products/295x369.jpg"
										alt="product"
										width="295"
										height="369"
									/>
								</a>
								<div className="product-label-group">
									<label className="product-label label-sale">-24%</label>
								</div>
								<div className="product-action-vertical">
									<a
										href="#"
										className="btn-product-icon btn-cart"
										data-toggle="modal"
										data-target="#addCartModal"
										title="Add to Cart"
									>
										<i className="p-icon-cart-solid"></i>
									</a>
									<a
										href="#"
										className="btn-product-icon btn-wishlist"
										title="Add to Wishlist"
									>
										<i className="p-icon-heart-solid"></i>
									</a>
									<a
										href="#"
										className="btn-product-icon btn-compare"
										title="Compare"
									>
										<i className="p-icon-compare-solid"></i>
									</a>
									<a
										href="#"
										className="btn-product-icon btn-quickview"
										title="Quick View"
									>
										<i className="p-icon-search-solid"></i>
									</a>
								</div>
							</figure>
							<div className="product-details">
								<div className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "60%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a
										href="product-simple.html#content-reviews"
										className="rating-reviews hash-scroll"
									>
										(12)
									</a>
								</div>
								<h5 className="product-name">
									<a href="#">Chocolate Butter Cake</a>
								</h5>
								<div className="product-price">
									<ins className="new-price">$3.00</ins>
								</div>
							</div>
						</div>
					</div> */}
					{/* <div className="product-wrap">
						<div className="product text-center">
							<figure className="product-media">
								<a href="#">
									<img
										src="images/products/295x369.jpg"
										alt="product"
										width="295"
										height="369"
									/>
								</a>
								<div className="product-action-vertical">
									<a
										href="#"
										className="btn-product-icon btn-cart"
										data-toggle="modal"
										data-target="#addCartModal"
										title="Add to Cart"
									>
										<i className="p-icon-cart-solid"></i>
									</a>
									<a
										href="#"
										className="btn-product-icon btn-wishlist"
										title="Add to Wishlist"
									>
										<i className="p-icon-heart-solid"></i>
									</a>
									<a
										href="#"
										className="btn-product-icon btn-compare"
										title="Compare"
									>
										<i className="p-icon-compare-solid"></i>
									</a>
									<a
										href="#"
										className="btn-product-icon btn-quickview"
										title="Quick View"
									>
										<i className="p-icon-search-solid"></i>
									</a>
								</div>
							</figure>
							<div className="product-details">
								<div className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "60% " }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a
										href="product-simple.html#content-reviews"
										className="rating-reviews hash-scroll"
									>
										(12)
									</a>
								</div>
								<h5 className="product-name">
									<a href="#">Cake</a>
								</h5>
								<div className="product-price">
									<ins className="new-price">$2.75</ins>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</section>
		</div>
	);
};

export default ProductRelated;
