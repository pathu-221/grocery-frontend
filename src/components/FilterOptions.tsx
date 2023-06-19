import type { FC } from "react";

interface FilterOptionsProps {}

const FilterOptions: FC<FilterOptionsProps> = () => {
	return (
		<aside className="col-lg-3 sidebar widget-sidebar sidebar-fixed sidebar-toggle-remain shop-sidebar sticky-sidebar-wrapper">
			<div className="sidebar-overlay"></div>
			<a className="sidebar-close" href="#">
				<i className="p-icon-times"></i>
			</a>
			<div className="sidebar-content">
				<div className="sticky-sidebar pt-7" data-sticky-options="{'top': 10}">
					<div className="widget widget-collapsible">
						<h3 className="widget-title title-underline">
							<span className="title-text">Filter by Price</span>
						</h3>
						<div className="widget-body">
							<form action="#" className="pt-2">
								<div className="filter-price-slider"></div>

								<div className="filter-actions">
									<button type="submit" className="btn btn-dim btn-filter">
										Filter
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="widget widget-collapsible">
						<h3 className="widget-title title-underline">
							<span className="title-text">Nutrition</span>
						</h3>
						<ul className="widget-body filter-items">
							<li>
								<a href="#">High Fibre</a>
							</li>
							<li>
								<a href="#">Low Calorie</a>
							</li>
							<li>
								<a href="#">No Sugar Added</a>
							</li>
							<li>
								<a href="#">Vegetarian</a>
							</li>
							<li>
								<a href="#">Low Fat</a>
							</li>
							<li>
								<a href="#">Whole Grain</a>
							</li>
						</ul>
					</div>
					<div className="widget widget-collapsible">
						<h3 className="widget-title title-underline">
							<span className="title-text">Brand</span>
						</h3>
						<ul className="widget-body filter-items">
							<li>
								<a href="#">Nestle</a>
							</li>
							<li>
								<a href="#">Nescafe</a>
							</li>
							<li>
								<a href="#">Tropicana</a>
							</li>
							<li>
								<a href="#">Coca Cola</a>
							</li>
							<li>
								<a href="#">Benecol</a>
							</li>
							<li>
								<a href="#">Alpro</a>
							</li>
						</ul>
					</div>
					<div className="widget widget-collapsible">
						<h3 className="widget-title title-underline">
							<span className="title-text">Filter by Rating</span>
						</h3>
						<div className="widget-body">
							<ul className="rating-group filter-items">
								<li className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "100%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a
										href="product-simple.html#content-reviews"
										className="rating-reviews hash-scroll"
									>
										22
									</a>
								</li>
								<li className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "80%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a
										href="product-simple.html#content-reviews"
										className="rating-reviews hash-scroll"
									>
										15
									</a>
								</li>
								<li className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "60%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a
										href="product-simple.html#content-reviews"
										className="rating-reviews hash-scroll"
									>
										18
									</a>
								</li>
								<li className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "40$" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a
										href="product-simple.html#content-reviews"
										className="rating-reviews hash-scroll"
									>
										0
									</a>
								</li>
								<li className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "20%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a
										href="product-simple.html#content-reviews"
										className="rating-reviews hash-scroll"
									>
										0
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="widget widget-collapsible">
						<h3 className="widget-title title-underline">
							<span className="title-text">Product Tags</span>
						</h3>
						<div className="widget-body mt-1">
							<a href="#" className="tag">
								Organic
							</a>
							<a href="#" className="tag">
								greenhouse
							</a>
							<a href="#" className="tag">
								fat
							</a>
							<a href="#" className="tag">
								healthy
							</a>
							<a href="#" className="tag">
								dairy
							</a>
							<a href="#" className="tag">
								vitamin
							</a>
							<a href="#" className="tag">
								diet
							</a>
							<a href="#" className="tag">
								nutrition
							</a>
							<a href="#" className="tag">
								cholesterol
							</a>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default FilterOptions;
