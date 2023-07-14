import type { FC } from "react";
import ProductDetails from "../ProductDetails";

interface TopProductsProps {}

const TopProducts: FC<TopProductsProps> = () => {
	return (
		<section className="container mt-10 pt-7 mb-7 appear-animate">
			<h2 className="title-underline2 text-center mb-2">
				<span>Top Products</span>
			</h2>
			<div className="tab tab-nav-center product-tab product-tab-type2">
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<a className="nav-link active" href="#canned">
							<figure>
								<img
									src="images/elements/product_tab/nav-1.jpg"
									width="160"
									height="130"
									alt="Nav img"
								/>
							</figure>
							<div className="nav-title">Canned</div>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#fruits2">
							<figure>
								<img
									src="images/elements/product_tab/nav-2.jpg"
									width="160"
									height="130"
									alt="Nav img"
								/>
							</figure>
							<div className="nav-title">Fruits</div>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#coffees">
							<figure>
								<img
									src="images/elements/product_tab/nav-3.jpg"
									width="160"
									height="130"
									alt="Nav img"
								/>
							</figure>
							<div className="nav-title">Coffees</div>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#meats">
							<figure>
								<img
									src="images/elements/product_tab/nav-4.jpg"
									width="160"
									height="130"
									alt="Nav img"
								/>
							</figure>
							<div className="nav-title">Meats</div>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#vegetables">
							<figure>
								<img
									src="images/elements/product_tab/nav-5.jpg"
									width="160"
									height="130"
									alt="Nav img"
								/>
							</figure>
							<div className="nav-title">Vegetables</div>
						</a>
					</li>
				</ul>
				<div className="tab-content">
					<div className="tab-pane active" id="canned">
						<div
							className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
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
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                        }"
						>
							<ProductDetails />
							{/* <!-- End .product --> */}
							<ProductDetails />
							{/* <!-- End .product --> */}
							<ProductDetails />
							{/* <!-- End .product --> */}
							<ProductDetails />
							{/* <!-- End .product --> */}
						</div>
					</div>
					<div className="tab-pane" id="fruits2">
						<div
							className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
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
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                        }"
						>
							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
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
											<span className="ratings" style={{ width: "50%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Fresh Peach</a>
									</h5>
									<span className="product-price">
										<span className="price">$42.00</span>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
									</a>
									<div className="product-label-group">
										<label className="product-label label-sale">-40%</label>
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
											<span className="ratings" style={{ width: "50%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Fresh Mulberry</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$28.00</del>
										<ins className="new-price">$12.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
									</a>
									<div className="product-label-group">
										<label className="product-label label-new">New</label>
										<label className="product-label label-sale">-38%</label>
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
											<span className="ratings" style={{ width: "50%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Fresh Cherry</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$90.00</del>
										<ins className="new-price">$36.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
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
											<span className="ratings" style={{ width: "50%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Organic Palmetto</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$22.00</del>
										<ins className="new-price">$16.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}
						</div>
					</div>
					<div className="tab-pane" id="coffees">
						<div
							className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
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
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                        }"
						>
							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
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
											<span
												className="ratings"
												style={{ width: "100%" }}
											></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Salted Caramel</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$22.00</del>
										<ins className="new-price">$16.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
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
											<span className="ratings" style={{ width: "50%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Broccoli</a>
									</h5>
									<span className="product-price">
										<span className="price">$42.00</span>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
									</a>
									<div className="product-label-group">
										<label className="product-label label-sale">-40%</label>
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
											<span className="ratings" style={{ width: "0%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Peanuts</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$28.00</del>
										<ins className="new-price">$12.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
									</a>
									<div className="product-label-group">
										<label className="product-label label-new">New</label>
										<label className="product-label label-sale">-38%</label>
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
											<span className="ratings" style={{ width: "50%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Peas</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$90.00</del>
										<ins className="new-price">$36.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}
						</div>
					</div>
					<div className="tab-pane" id="meats">
						<div
							className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
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
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                        }"
						>
							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
									</a>
									<div className="product-label-group">
										<label className="product-label label-new">New</label>
										<label className="product-label label-sale">-38%</label>
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
											<span className="ratings" style={{ width: "0%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Fresh Pork</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$90.00</del>
										<ins className="new-price">$36.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
									</a>
									<div className="product-label-group">
										<label className="product-label label-sale">-40%</label>
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
											<span className="ratings" style={{ width: "50%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Prime Beef</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$28.00</del>
										<ins className="new-price">$12.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
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
											<span className="ratings" style={{ width: "50%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Salted Beef</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$22.00</del>
										<ins className="new-price">$16.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}
						</div>
					</div>
					<div className="tab-pane" id="vegetables">
						<div
							className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
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
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                        }"
						>
							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
									</a>
									<div className="product-label-group">
										<label className="product-label label-sale">-40%</label>
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
											<span className="ratings" style={{ width: "20%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Peanuts</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$28.00</del>
										<ins className="new-price">$12.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
									</a>
									<div className="product-label-group">
										<label className="product-label label-new">New</label>
										<label className="product-label label-sale">-38%</label>
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
											<span className="ratings" style={{ width: "50%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Peas</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$90.00</del>
										<ins className="new-price">$36.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/products/295x369.jpg"
											alt="product"
											width="295"
											height="369"
										/>
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
											<span
												className="ratings"
												style={{ width: "100%" }}
											></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Salted Caramel</a>
									</h5>
									<span className="product-price">
										<del className="old-price">$22.00</del>
										<ins className="new-price">$16.00</ins>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}

							<div className="product shadow-media text-center">
								<figure className="product-media">
									<a href="product-simple.html">
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
											<span className="ratings" style={{ width: "50%" }}></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
										<a
											href="product-simple.html#content-reviews"
											className="rating-reviews"
										>
											(12)
										</a>
									</div>
									<h5 className="product-name">
										<a href="product-simple.html">Broccoli</a>
									</h5>
									<span className="product-price">
										<span className="price">$42.00</span>
									</span>
								</div>
							</div>
							{/* <!-- End .product --> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopProducts;
