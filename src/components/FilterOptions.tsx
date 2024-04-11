import type { FC } from "react";
import { useState, useEffect } from "react";
import { Category } from "../interfaces/category.interface";
import { fetchAllCategories } from "../apis/category.api";
import showToast from "../helpers/showToast";

interface FilterOptionsProps {
	onClick: (category: string) => void;
	selectedCategories: string[];
}

const FilterOptions: FC<FilterOptionsProps> = ({ onClick }) => {
	const [categories, setCategories] = useState<Category[]>();

	const urlParams = new URLSearchParams(window.location.search);

	const category = urlParams.get("category") || undefined;
	const [selectedCategories, _] = useState<string[]>([
		...(category?.split(",") || ""),
	]);

	
	useEffect(() => {
		loadCategories();
	}, []);

	const loadCategories = async () => {
		const data = await fetchAllCategories();
		if (!data.status) return showToast("danger", data.msg);

		setCategories(data.data);
	};

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
							<span className="title-text">Categories</span>
						</h3>
						<ul className="widget-body filter-items active opened">
							{categories &&
								categories.map((category) => (
									<li
										key={category.id}
										className={`${
											selectedCategories.includes(category.name) ? "active" : ""
										}`}
										onClick={() => onClick(category.name)}
									>
										<a href="#">{category.name}</a>
									</li>
								))}
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
				</div>
			</div>
		</aside>
	);
};

export default FilterOptions;
