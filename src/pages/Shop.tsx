import type { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import FilterOptions from "../components/FilterOptions";
import ProductDetails from "../components/ProductDetails";
import { fetchAllProducts } from "../apis/product.api";
import { useState, useEffect } from "react";
import { Product } from "../interfaces/product.interface";

interface ShopPageProps {}

const ShopPage: FC<ShopPageProps> = () => {
	const [products, setProducts] = useState<Product[]>();
	const [sortCriteria, setSortCriteria] = useState("");

	const navigate = useNavigate();

	const urlParams = new URLSearchParams(window.location.search);
	const sortBy = urlParams.get("sortBy") || undefined;
	let category = urlParams.get("category") || undefined;

	const loadProducts = async () => {
		const data = await fetchAllProducts(category, sortBy);
		if (!data.status) return;
		setProducts(data.data);
	};

	useEffect(() => {
		loadProducts();
	}, []);

	useEffect(() => {
		loadProducts();
	}, [sortCriteria, category]);

	const handleSortByChange = (criteria: string) => {
		setSortCriteria(criteria);
		navigate({
			pathname: "/shop",
			search: `?sortBy=${criteria}`,
		});
	};

	const manipulateString = (inputString: string, newSubstring: string) => {
		// Check if the substring exists in the string
		const substringIndex = inputString.indexOf(newSubstring);

		if (substringIndex !== -1) {
			// Remove the existing substring along with the comma
			if (inputString.length === newSubstring.length) return inputString = '';
			inputString =
				inputString.slice(0, substringIndex - 1) +
				inputString.slice(substringIndex + newSubstring.length + 1);
		} else {
			// Add the new substring along with a comma
			if (inputString.length > 0 && !inputString.endsWith(",")) {
				inputString += ",";
			}
			inputString += newSubstring;
		}

		return inputString;
	}

	const handleCategoryChange = (categoryName: string) => {

		if (!category) category = categoryName;
		else {
			category = manipulateString(category, categoryName);
		}
		navigate({
			pathname: "/shop",
			search: `?sortBy=${sortCriteria}&category=${category}`,
		});
		console.log({ category, categoryName });

	};

	return (
		<main className="main">
			{/* <div
				className="page-header cph-header pl-4 pr-4"
				style={{ backgroundColor: " #fff7ec" }}
			>
				<h1 className="page-title font-weight-light text-capitalize">
					Panda Shop
				</h1>
				<div className="category-container row justify-content-center cols-2 cols-xs-3 cols-sm-4 cols-md-6 pt-6">
					<div className="category category-ellipse mb-4 mb-md-0">
						<a href="#">
							<figure>
								<img
									src="images/shop/cat.jpg"
									alt="category"
									width="160"
									height="161"
								/>
							</figure>
						</a>
						<div className="category-content">
							<h3 className="category-name">
								<a href="#">Canned</a>
							</h3>
						</div>
					</div>
					<div className="category category-ellipse mb-4 mb-md-0">
						<a href="#">
							<figure>
								<img
									src="images/shop/cat.jpg"
									alt="category"
									width="160"
									height="161"
								/>
							</figure>
						</a>
						<div className="category-content">
							<h3 className="category-name">
								<a href="#">Fruits</a>
							</h3>
						</div>
					</div>
					<div className="category category-ellipse mb-4 mb-md-0">
						<a href="#">
							<figure>
								<img
									src="images/shop/cat.jpg"
									alt="category"
									width="160"
									height="161"
								/>
							</figure>
						</a>
						<div className="category-content">
							<h3 className="category-name">
								<a href="#">Vegetables</a>
							</h3>
						</div>
					</div>
					<div className="category category-ellipse">
						<a href="#">
							<figure>
								<img
									src="images/shop/cat.jpg"
									alt="category"
									width="160"
									height="161"
								/>
							</figure>
						</a>
						<div className="category-content">
							<h3 className="category-name">
								<a href="#">Meats</a>
							</h3>
						</div>
					</div>
					<div className="category category-ellipse">
						<a href="#">
							<figure>
								<img
									src="images/shop/cat.jpg"
									alt="category"
									width="160"
									height="161"
								/>
							</figure>
						</a>
						<div className="category-content">
							<h3 className="category-name">
								<a href="#">Coffee</a>
							</h3>
						</div>
					</div>
					<div className="category category-ellipse">
						<a href="#">
							<figure>
								<img
									src="images/shop/cat.jpg"
									alt="category"
									width="160"
									height="161"
								/>
							</figure>
						</a>
						<div className="category-content">
							<h3 className="category-name">
								<a href="#">Snack</a>
							</h3>
						</div>
					</div>
				</div>
			</div> */}
			<nav className="breadcrumb-nav has-border">
				<div className="container">
					<ul className="breadcrumb">
						<li>
							<Link to={"/"}>Home</Link>
						</li>
						<li>Shop</li>
					</ul>
				</div>
			</nav>
			<div className="page-content mb-10 shop-page">
				<div className="container">
					<div className="row main-content-wrap">
						<FilterOptions onClick={handleCategoryChange} />
						<div className="col-lg-9 main-content pl-lg-6">
							<nav className="toolbox sticky-toolbox sticky-content fix-top">
								<div className="toolbox-left">
									<a
										href="#"
										className="toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-icon-right d-lg-none"
									>
										<span>Filter</span>
										<i className="p-icon-category-1 ml-md-1"></i>
									</a>
									<div className="toolbox-item toolbox-sort select-menu">
										<label>Sort By :</label>
										<select
											onChange={(e) => handleSortByChange(e.target.value)}
											name="orderby"
										>
											<option value="default" selected={true}>
												Default Sorting
											</option>
											<option value="latest">Sort By The Latest</option>
											<option value="asc">Sort By Price: Low To High</option>
											<option value="desc">Sort By Price: High To Low</option>
										</select>
									</div>
								</div>
								<div className="toolbox-right">
									<div className="toolbox-item toolbox-show select-box">
										<label>Show :</label>
										<select name="count">
											<option value="12">12</option>
											<option value="24">24</option>
											<option value="36">36</option>
										</select>
									</div>
									{/* <div className="toolbox-item toolbox-layout">
										<a
											href="shop-4-cols.html"
											className="p-icon-grid btn-layout active"
										></a>
									</div> */}
								</div>
							</nav>
							<div className="row product-wrapper cols-lg-4 cols-md-3 cols-2">
								{products &&
									products.map((product) => (
										<ProductDetails key={product.id} product={product} />
									))}
							</div>

							<nav className="toolbox toolbox-pagination pt-2 pb-6">
								<p className="toolbox-item show-info">
									Showing <span>1-12 of 60</span> Products
								</p>
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
							</nav>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ShopPage;
