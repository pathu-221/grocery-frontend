import type { FC } from "react";
import { Product } from "../../interfaces/product.interface";
import {
	addToCart as addToCartApi,
	getCartItems,
} from "../../redux/cart/cartThunk";
import { useAppDispatch } from "../../redux/store";
import { Link } from "react-router-dom";

interface ProductGalleryDetailsProps {
	product?: Product;
}

const ProductGalleryDetails: FC<ProductGalleryDetailsProps> = ({ product }) => {
	const dispatch = useAppDispatch();
	const addToCart = async () => {
		if (!product) return;
		dispatch(addToCartApi(product.id));
		dispatch(getCartItems());
	};

	return (
		<div className="product-details">
			<h1 className="product-name">
				{product?.name || "Banana from indonesia"}
			</h1>
			<div className="ratings-container">
				<div className="ratings-full">
					<span className="ratings" style={{ width: "60% " }}></span>
					<span className="tooltiptext tooltip-top"></span>
				</div>
				<a href="#content-reviews" className="link-to-tab rating-reviews">
					( 12 Customer Reviews )
				</a>
			</div>
			<p className="product-price mb-1">
				<ins className="new-price">${product?.base_price || "18.00"}</ins>
			</p>
			<p className="product-short-desc">{product?.description}</p>

			<div className="product-form product-qty pt-1">
				<div className="product-form-group">
					<div className="input-group" style={{ gridColumn: 9 }}>
						<button className="quantity-minus p-icon-minus-solid"></button>
						<input
							className="quantity form-control"
							type="number"
							min="1"
							max="1000000"
							defaultValue={product?.quantity}
						/>
						<button className="quantity-plus p-icon-plus-solid"></button>
					</div>
					<button
						className="btn-product btn-cart ls-normal font-weight-semi-bold"
						onClick={() => {
							addToCart();
						}}
					>
						<i className="p-icon-cart-solid"></i>ADD TO CART
					</button>
				</div>
			</div>
			{/* <div className="product-action pt-5 pb-3">
				<a href="#" className="btn-product btn-compare mr-5">
					<i className="p-icon-compare-solid"></i>ADD TO COMPARE
				</a>
				<a href="#" className="btn-product btn-wishlist">
					<i className="p-icon-heart-solid"></i>ADD TO WISHLIST
				</a>
			</div> */}
			<hr className="product-divider" />

			<div className="product-meta">
				<label>CATEGORIES:</label>
				<Link to={`/shop?category=${product?.category.name}`}>
					{product?.category.name}
				</Link>
				<br />
				<label className="social-label">share:</label>
				<div className="social-links">
					<a href="#" className="social-link fab fa-facebook-f"></a>
					<a href="#" className="social-link fab fa-twitter"></a>
					<a href="#" className="social-link fab fa-pinterest"></a>
					<a href="#" className="social-link fab fa-linkedin-in"></a>
				</div>
			</div>
		</div>
	);
};

export default ProductGalleryDetails;
