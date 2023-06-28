import type { FC } from "react";
import { Product } from "../interfaces/product.interface";
import { useNavigate } from "react-router";

interface ProductDetailsProps {
	product?: Product;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
	const navigate = useNavigate();
	return (
		<div className="product shadow-media text-center">
			<figure className="product-media">
				<a
					//this is temporary will switch to href when every product is loaded from database
					style={{ cursor: 'pointer'}}
					onClick={() => {
						navigate({
							pathname: "/product",
							search: product && `?productId=${product.id}`,
						});
						window.location.reload();
					}}
				>
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
					<a href="#" className="btn-product-icon btn-compare" title="Compare">
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
					<a href="product-simple.html">{product?.name || "Peanuts"}</a>
				</h5>
				<span className="product-price">
					<del className="old-price">$28.00</del>
					<ins className="new-price">${product?.base_price || "18.00"}</ins>
				</span>
			</div>
		</div>
	);
};

export default ProductDetails;
