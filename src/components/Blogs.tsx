import type { FC } from "react";

interface BlogsProps {}

const Blogs: FC<BlogsProps> = () => {
	return (
		<section className="recent-section container mt-10 pt-7 mb-10 pb-6">
			<h4 className="subtitle title-underline2 text-uppercase text-center">
				<span>Our Blog</span>
			</h4>
			<h2 className="title justify-content-center text-center">
				Recent Stories And Articles
			</h2>
			<div
				className="owl-carousel owl-theme row cols-lg-3 cols-sm-2 cols-1 mb-10 pb-8"
				data-owl-options="{
                                        'items': 3,
                                        'nav': false,
                                        'dots': true,
                                        'margin': 20,
                                        'loop': false,
                                        'responsive': {
                                            '0': {
                                                'items': 1
                                            },
                                            '568': {
                                                'items': 2
                                            },
                                            '992': {
                                                'items': 3
                                            }
                                        }
                                }"
			>
				<div className="post post-border post-center overlay-zoom overlay-dark">
					<figure className="post-media">
						<a href="blog-single.html">
							<img
								src="images/blog/400x250.jpg"
								width="400"
								height="250"
								alt="post"
							/>
						</a>
						<div className="post-calendar">18 Feb 2021</div>
					</figure>
					<div className="post-details">
						<p className="post-cats">
							<a href="blog.html">Vegetable</a>,<a href="blog.html">Fruit</a>
						</p>
						<h3 className="post-title">
							<a href="blog-single.html">
								Aliquam id diam maecenas
								<br />
								ultricies get mauris
							</a>
						</h3>
						<div className="post-meta">
							<a href="blog.html" className="post-author">
								<img
									src="images/agents/1.jpg"
									className="post-agent"
									width="31"
									height="31"
									alt="agent"
								/>
								By<span>Anna</span>
							</a>
							<a
								href="blog-single.html#post-comments"
								className="post-comments hash-scroll"
							>
								<i className="p-icon-email"></i>0
							</a>
							<div className="post-share">
								<i className="p-icon-socials"></i>
								<div className="social-links dirVertical">
									<a
										href="#"
										title="Facebook"
										className="social-link fab fa-facebook-f"
									></a>
									<a
										href="#"
										title="Twitter"
										className="social-link fab fa-twitter"
									></a>
									<a
										href="#"
										title="Pinterest"
										className="social-link fab fa-pinterest"
									></a>
									<a
										href="#"
										title="Linkedin"
										className="social-link fab fa-linkedin-in"
									></a>
								</div>
							</div>
						</div>
						<p className="post-content">
							Lorem ipsum dolor sit amet,anadipis sed do sed doeiu smod tempo...
							<a href="blog-single.html" className="ml-2 text-primary">
								(read more)
							</a>
						</p>
					</div>
				</div>
				<div className="post post-border post-center overlay-zoom overlay-dark">
					<figure className="post-media">
						<a href="blog-single.html">
							<img
								src="images/blog/400x250.jpg"
								width="400"
								height="250"
								alt="post"
							/>
						</a>
						<div className="post-calendar">18 Feb 2021</div>
					</figure>
					<div className="post-details">
						<p className="post-cats">
							<a href="blog.html">Vegetable</a>,<a href="blog.html"> Fruit</a>
						</p>
						<h3 className="post-title">
							<a href="blog-single.html">
								Aliquam id diam maecenas
								<br />
								ultricies get mauris
							</a>
						</h3>
						<div className="post-meta">
							<a href="blog.html" className="post-author">
								<img
									src="images/agents/2.jpg"
									className="post-agent"
									width="31"
									height="31"
									alt="agent"
								/>
								By<span>Anna</span>
							</a>
							<a
								href="blog-single.html#post-comments"
								className="post-comments hash-scroll"
							>
								<i className="p-icon-email"></i>0
							</a>
							<div className="post-share">
								<i className="p-icon-socials"></i>
								<div className="social-links dirVertical">
									<a
										href="#"
										title="Facebook"
										className="social-link fab fa-facebook-f"
									></a>
									<a
										href="#"
										title="Twitter"
										className="social-link fab fa-twitter"
									></a>
									<a
										href="#"
										title="Pinterest"
										className="social-link fab fa-pinterest"
									></a>
									<a
										href="#"
										title="Linkedin"
										className="social-link fab fa-linkedin-in"
									></a>
								</div>
							</div>
						</div>
						<p className="post-content">
							Lorem ipsum dolor sit amet,anadipis sed do sed doeiu smod tempo...
							<a href="blog-single.html" className="ml-2 text-primary">
								(read more)
							</a>
						</p>
					</div>
				</div>
				<div className="post post-border post-center overlay-zoom overlay-dark">
					<figure className="post-media">
						<a href="blog-single.html">
							<img
								src="images/blog/400x250.jpg"
								width="400"
								height="250"
								alt="post"
							/>
						</a>
						<div className="post-calendar">18 Feb 2021</div>
					</figure>
					<div className="post-details">
						<p className="post-cats">
							<a href="blog.html">Vegetable</a>,<a href="blog.html"> Fruit</a>
						</p>
						<h3 className="post-title">
							<a href="blog-single.html">
								Aliquam id diam maecenas
								<br />
								ultricies get mauris
							</a>
						</h3>
						<div className="post-meta">
							<a href="blog.html" className="post-author">
								<img
									src="images/agents/3.jpg"
									className="post-agent"
									width="31"
									height="31"
									alt="agent"
								/>
								By<span>Anna</span>
							</a>
							<a
								href="blog-single.html#post-comments"
								className="post-comments hash-scroll"
							>
								<i className="p-icon-email"></i>0
							</a>
							<div className="post-share">
								<i className="p-icon-socials"></i>
								<div className="social-links dirVertical">
									<a
										href="#"
										title="Facebook"
										className="social-link fab fa-facebook-f"
									></a>
									<a
										href="#"
										title="Twitter"
										className="social-link fab fa-twitter"
									></a>
									<a
										href="#"
										title="Pinterest"
										className="social-link fab fa-pinterest"
									></a>
									<a
										href="#"
										title="Linkedin"
										className="social-link fab fa-linkedin-in"
									></a>
								</div>
							</div>
						</div>
						<p className="post-content">
							Lorem ipsum dolor sit amet,anadipis sed do sed doeiu smod tempo...
							<a href="blog-single.html" className="ml-2 text-primary">
								(read more)
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="row appear-animate">
				<div className="col-xl-4 col-md-6">
					<h4 className="title title-underline title-line mb-4">Trending</h4>

					<div className="product product-list-sm mb-4">
						<figure className="product-media">
							<a href="product-simple.html">
								<img
									src="images/products/150x188.jpg"
									alt="product"
									width="150"
									height="188"
								/>
							</a>
						</figure>
						<div className="product-details">
							<div className="ratings-container">
								<div className="ratings-full">
									<span className="ratings" style={{ width: "60%" }}></span>
									<span className="tooltiptext tooltip-top"></span>
								</div>
								<a href="product-simple.html" className="rating-reviews">
									(12)
								</a>
							</div>
							<h5 className="product-name">
								<a href="product-simple.html">Vegetability Oil</a>
							</h5>
							<span className="product-price">
								<del className="old-price">$90.00</del>
								<ins className="new-price">$36.00</ins>
							</span>
						</div>
					</div>
					<div className="product product-list-sm mb-4">
						<figure className="product-media">
							<a href="product-simple.html">
								<img
									src="images/products/150x188.jpg"
									alt="product"
									width="150"
									height="188"
								/>
							</a>
						</figure>
						<div className="product-details">
							<div className="ratings-container">
								<div className="ratings-full">
									<span className="ratings" style={{ width: "60%" }}></span>
									<span className="tooltiptext tooltip-top"></span>
								</div>
								<a href="product-simple.html" className="rating-reviews">
									(12)
								</a>
							</div>
							<h5 className="product-name">
								<a href="product-simple.html">Fresh Chestnut</a>
							</h5>
							<span className="product-price">
								<del className="old-price">$90.00</del>
								<ins className="new-price">$36.00</ins>
							</span>
						</div>
					</div>
					<div className="product product-list-sm mb-4">
						<figure className="product-media">
							<a href="product-simple.html">
								<img
									src="images/products/150x188.jpg"
									alt="product"
									width="150"
									height="188"
								/>
							</a>
						</figure>
						<div className="product-details">
							<div className="ratings-container">
								<div className="ratings-full">
									<span className="ratings" style={{ width: "60%" }}></span>
									<span className="tooltiptext tooltip-top"></span>
								</div>
								<a href="product-simple.html" className="rating-reviews">
									(12)
								</a>
							</div>
							<h5 className="product-name">
								<a href="product-simple.html">Crown Daisy</a>
							</h5>
							<span className="product-price">
								<del className="old-price">$90.00</del>
								<ins className="new-price">$36.00</ins>
							</span>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6">
					<h4 className="title title-underline title-line mb-4">
						Best Selling
					</h4>

					<div className="product product-list-sm mb-4">
						<figure className="product-media">
							<a href="product-simple.html">
								<img
									src="images/products/150x188.jpg"
									alt="product"
									width="150"
									height="188"
								/>
							</a>
						</figure>
						<div className="product-details">
							<div className="ratings-container">
								<div className="ratings-full">
									<span className="ratings" style={{ width: "60%" }}></span>
									<span className="tooltiptext tooltip-top"></span>
								</div>
								<a href="product-simple.html" className="rating-reviews">
									(12)
								</a>
							</div>
							<h5 className="product-name">
								<a href="product-simple.html">Dry Jujube</a>
							</h5>
							<span className="product-price">
								<del className="old-price">$90.00</del>
								<ins className="new-price">$36.00</ins>
							</span>
						</div>
					</div>
					<div className="product product-list-sm mb-4">
						<figure className="product-media">
							<a href="product-simple.html">
								<img
									src="images/products/150x188.jpg"
									alt="product"
									width="150"
									height="188"
								/>
							</a>
						</figure>
						<div className="product-details">
							<div className="ratings-container">
								<div className="ratings-full">
									<span className="ratings" style={{ width: "60%" }}></span>
									<span className="tooltiptext tooltip-top"></span>
								</div>
								<a href="product-simple.html" className="rating-reviews">
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
					<div className="product product-list-sm mb-4">
						<figure className="product-media">
							<a href="product-simple.html">
								<img
									src="images/products/150x188.jpg"
									alt="product"
									width="150"
									height="188"
								/>
							</a>
						</figure>
						<div className="product-details">
							<div className="ratings-container">
								<div className="ratings-full">
									<span className="ratings" style={{ width: "60%" }}></span>
									<span className="tooltiptext tooltip-top"></span>
								</div>
								<a href="product-simple.html" className="rating-reviews">
									(12)
								</a>
							</div>
							<h5 className="product-name">
								<a href="product-simple.html">Carrot Sap</a>
							</h5>
							<span className="product-price">
								<del className="old-price">$90.00</del>
								<ins className="new-price">$36.00</ins>
							</span>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6">
					<h4 className="title title-underline title-line mb-4">Top Rated</h4>

					<div className="product product-list-sm mb-4">
						<figure className="product-media">
							<a href="product-simple.html">
								<img
									src="images/products/150x188.jpg"
									alt="product"
									width="150"
									height="188"
								/>
							</a>
						</figure>
						<div className="product-details">
							<div className="ratings-container">
								<div className="ratings-full">
									<span className="ratings" style={{ width: "60%" }}></span>
									<span className="tooltiptext tooltip-top"></span>
								</div>
								<a href="product-simple.html" className="rating-reviews">
									(12)
								</a>
							</div>
							<h5 className="product-name">
								<a href="product-simple.html">Chocolate Bun</a>
							</h5>
							<span className="product-price">
								<del className="old-price">$90.00</del>
								<ins className="new-price">$36.00</ins>
							</span>
						</div>
					</div>
					<div className="product product-list-sm mb-4">
						<figure className="product-media">
							<a href="product-simple.html">
								<img
									src="images/products/150x188.jpg"
									alt="product"
									width="150"
									height="188"
								/>
							</a>
						</figure>
						<div className="product-details">
							<div className="ratings-container">
								<div className="ratings-full">
									<span className="ratings" style={{ width: "60%" }}></span>
									<span className="tooltiptext tooltip-top"></span>
								</div>
								<a href="product-simple.html" className="rating-reviews">
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
					<div className="product product-list-sm mb-4">
						<figure className="product-media">
							<a href="product-simple.html">
								<img
									src="images/products/150x188.jpg"
									alt="product"
									width="150"
									height="188"
								/>
							</a>
						</figure>
						<div className="product-details">
							<div className="ratings-container">
								<div className="ratings-full">
									<span className="ratings" style={{ width: "60%" }}></span>
									<span className="tooltiptext tooltip-top"></span>
								</div>
								<a href="product-simple.html" className="rating-reviews">
									(12)
								</a>
							</div>
							<h5 className="product-name">
								<a href="product-simple.html">Ice Coffee</a>
							</h5>
							<span className="product-price">
								<del className="old-price">$90.00</del>
								<ins className="new-price">$36.00</ins>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs;
