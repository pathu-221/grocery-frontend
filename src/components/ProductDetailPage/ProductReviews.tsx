import type { FC } from "react";


interface ProductReviewsProps {
}

const ProductReviews: FC<ProductReviewsProps> = ({ }) => {


	return (
		<div className="content-reviews pt-9" id="content-reviews">
			<div className="with-toolbox">
				<h2 className="title title-line title-underline mb-8">
					<span>Customer Reviews</span>
				</h2>
				{/* <div className="toolbox-group">
					<div className="review-toolbox mr-4">
						<select name="orderby" className="form-control">
							<option value="">All Reviews</option>
							<option value="image" selected={true}>
								With Images
							</option>
							<option value="video">With Videos</option>
						</select>
					</div>
					<div className="review-toolbox">
						<select name="orderby" className="form-control">
							<option value="">All Stars</option>
							<option value="five" selected={true}>
								Five Stars
							</option>
							<option value="four">Four Stars</option>
							<option value="three">Three Stars</option>
							<option value="two">Two Stars</option>
							<option value="one">One Stars</option>
							<option value="no">No Stars</option>
						</select>
					</div>
				</div> */}
			</div>
			<div className="row pb-10">
				<div className="col-lg-4 mb-4 sticky-sidebar-wrapper">
					<div
						className="sticky-sidebar pb-3"
						data-sticky-options="{'paddingOffsetTop': 90}"
					>
						<div className="avg-rating-container">
							<mark>4.5</mark>
							<div className="avg-rating">
								<span className="avg-rating-title">Average Rating</span>
								<div className="ratings-container mb-0">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "100%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<span className="rating-reviews">(12)</span>
								</div>
							</div>
						</div>
						<div className="ratings-list mb-4 mb-lg-8">
							<div className="ratings-item">
								<div className="ratings-container mb-0">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "70%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
								</div>
								<div className="rating-percent">
									<span style={{ width: "70%" }}></span>
								</div>
								<div className="progress-value">70%</div>
							</div>
							<div className="ratings-item">
								<div className="ratings-container mb-0">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "30%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
								</div>
								<div className="rating-percent">
									<span style={{ width: "30%" }}></span>
								</div>
								<div className="progress-value">30%</div>
							</div>
							<div className="ratings-item">
								<div className="ratings-container mb-0">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "40%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
								</div>
								<div className="rating-percent">
									<span style={{ width: "40%" }}></span>
								</div>
								<div className="progress-value">40%</div>
							</div>
							<div className="ratings-item">
								<div className="ratings-container mb-0">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "0%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
								</div>
								<div className="rating-percent">
									<span style={{ width: "0%" }}></span>
								</div>
								<div className="progress-value">0%</div>
							</div>
							<div className="ratings-item">
								<div className="ratings-container mb-0">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "0%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
								</div>
								<div className="rating-percent">
									<span style={{ width: "0%" }}></span>
								</div>
								<div className="progress-value">0%</div>
							</div>
						</div>
						{/* <a className="btn btn-dim submit-review-toggle">Submit Review</a> */}
					</div>
				</div>
				<div className="col-lg-8 comments border-no">
					<ul className="comments-list">
						<li>
							<div className="comment">
								<figure className="comment-media">
									<a href="#">
										<img
											src="images/products/product-single/agent/Simple1.jpg"
											width="100"
											height="100"
											alt="avatar"
										/>
									</a>
								</figure>
								<div className="comment-body mt-2 mt-sm-0">
									<div className="comment-rating ratings-container">
										<div className="ratings-full">
											<span
												className="ratings"
												style={{ width: "100%" }}
											></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
									</div>
									<div className="comment-user">
										<span className="comment-date">
											by{" "}
											<span className="font-weight-semi-bold text-uppercase text-dim">
												ANNA
											</span>
											on July 14, 2021
										</span>
									</div>
									<div className="comment-description">Very Good!</div>
									<div className="comment-content">
										<p>
											Lorem ipsum dolor sit amt, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Venenatis tellus in metus enenatis tellus in metus
											vulputate eu scelerisque felis.vulputate eu scelerisque
											felis.
										</p>
									</div>
									<div className="file-input-wrappers">
										<img
											className="btn-play btn-img pwsp"
											src="images/products/product-single/agent/1.jpg"
											width="800"
											height="533"
											alt="product"
										/>
										<img
											className="btn-play btn-img pwsp"
											src="images/products/product-single/agent/2.jpg"
											width="800"
											height="422"
											alt="product"
										/>
										<img
											className="btn-play btn-img pwsp"
											src="images/products/product-single/agent/3.jpg"
											width="800"
											height="533"
											alt="product"
										/>
									</div>
									{/* <div className="feeling mt-5">
										<button className="btn btn-link text-capitalize btn-icon-left btn-slide-up btn-infinite like">
											<i className="fa fa-thumbs-up mb-1"></i>
											Helpful (<span className="count">0</span>)
										</button>
										<button className="btn btn-link text-capitalize btn-icon-left btn-slide-down btn-infinite unlike">
											<i className="fa fa-thumbs-down mb-1"></i>
											Unhelpful (<span className="count">0</span>)
										</button>
									</div> */}
								</div>
							</div>
						</li>
						<li className="mb-1">
							<div className="comment">
								<figure className="comment-media">
									<a href="#">
										<img
											src="images/products/product-single/agent/Simple2.jpg"
											width="100"
											height="100"
											alt="avatar"
										/>
									</a>
								</figure>

								<div className="comment-body mt-2 mt-sm-0">
									<div className="comment-rating ratings-container">
										<div className="ratings-full">
											<span
												className="ratings"
												style={{ width: "100%" }}
											></span>
											<span className="tooltiptext tooltip-top"></span>
										</div>
									</div>
									<div className="comment-user">
										<span className="comment-date">
											by{" "}
											<span className="font-weight-semi-bold text-uppercase text-dim">
												John Doe
											</span>{" "}
											on August 16, 2021
										</span>
									</div>
									<div className="comment-description">Very Good!</div>
									<div className="comment-content">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Venenatis tellus in metus enenatis tellus in metus
											vulputate eu scelerisque felis.vulputate eu scelerisque
											felis.
										</p>
									</div>
									{/* <div className="feeling">
										<button className="btn btn-link text-capitalize btn-icon-left btn-slide-up btn-infinite like">
											<i className="fa fa-thumbs-up mb-1"></i>
											Helpful (<span className="count">0</span>)
										</button>
										<button className="btn btn-link text-capitalize btn-icon-left btn-slide-down btn-infinite unlike">
											<i className="fa fa-thumbs-down mb-1"></i>
											Unhelpful (<span className="count">0</span>)
										</button>
									</div> */}
								</div>
							</div>
						</li>
					</ul>
					{/* <nav className="toolbox toolbox-pagination justify-content-end">
						<ul className="pagination">
							<li className="page-item disabled">
								<a
									className="page-link page-link-prev"
									href="#"
									aria-label="Previous"
									tabIndex={-1}
									aria-disabled="true"
								>
									<i className="p-icon-angle-left"></i>
								</a>
							</li>
							<li className="page-item active" aria-current="page">
								<a className="page-link" href="#">
									1
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									2
								</a>
							</li>
							<li className="page-item page-item-dots"></li>
							<li className="page-item">
								<a className="page-link" href="#">
									5
								</a>
							</li>
							<li className="page-item">
								<a
									className="page-link page-link-next"
									href="#"
									aria-label="Next"
								>
									<i className="p-icon-angle-right"></i>
								</a>
							</li>
						</ul>
					</nav> */}
				</div>
			</div>
		</div>
	);
};

export default ProductReviews;
