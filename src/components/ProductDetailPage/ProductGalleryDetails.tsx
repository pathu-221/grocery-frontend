import type { FC } from "react";
import { Product } from "../../interfaces/product.interface";
import { addItemToCart } from "../../apis/cart.api";
import showToast from "../../helpers/showToast";

interface ProductGalleryDetailsProps {
	product?: Product;
}

const ProductGalleryDetails: FC<ProductGalleryDetailsProps> = ({ product }) => {

	const addToCart = async () => {
		if (!product) return
		
		const data = await addItemToCart(product?.id);
		showToast('success', data.msg);
		console.log({ data });
	}

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
				<del className="old-price">$24.00</del>
				<ins className="new-price">${product?.base_price || "18"}.00</ins>
			</p>
			<p className="product-short-desc">
				Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
				libero eu augue. Morbi purus liberpuro ate adipiscing.
			</p>
			<ul className="list list-circle">
				<li>
					<i className="far fa-circle"></i>Nunc id cursus metus aliquam.
				</li>
				<li>
					<i className="far fa-circle"></i>Vel pretium lectus quam id leo in
					vitae turpis massa.
				</li>
				<li>
					<i className="far fa-circle"></i>Eget sit amet tellus cras adipiscing
					enim eu.
				</li>
				<li>
					<i className="far fa-circle"></i>Tellus rutrumn tellus pellentesque eu
					tincidunt tortor
				</li>
			</ul>
			<div className="product-form product-unit mb-2 pt-1">
				<label>WEIGHT UNIT</label>
				<div className="product-form-group pt-1">
					<div className="product-variations mb-1">
						<a href="#">EACH</a>
						<a href="#">POUND</a>
						<a href="#">1LB</a>
						<a href="#">1KG</a>
						<a href="#">500G</a>
					</div>
					<a
						href="#"
						className="product-variation-clean"
						style={{ display: "none" }}
					>
						Clean All
					</a>
				</div>
			</div>
			<div className="product-variation-price">
				<span>$239.00</span>
			</div>
			<div className="product-form product-qty pt-1">
				<div className="product-form-group">
					<div className="input-group">
						<button className="quantity-minus p-icon-minus-solid"></button>
						<input
							className="quantity form-control"
							type="number"
							min="1"
							max="1000000"
						/>
						<button className="quantity-plus p-icon-plus-solid"></button>
					</div>
					<button
						className="btn-product btn-cart ls-normal font-weight-semi-bold"
						onClick={() => addToCart() }
					>
						<i className="p-icon-cart-solid"></i>ADD TO CART
					</button>
				</div>
			</div>
			<div className="product-action pt-5 pb-3">
				<a href="#" className="btn-product btn-compare mr-5">
					<i className="p-icon-compare-solid"></i>ADD TO COMPARE
				</a>
				<a href="#" className="btn-product btn-wishlist">
					<i className="p-icon-heart-solid"></i>ADD TO WISHLIST
				</a>
			</div>
			<hr className="product-divider" />

			<div className="product-meta">
				<label>CATEGORIES:</label>
				<a href="#">fruit</a> , <a href="#">daily needs</a>
				<br />
				<label>sku:</label>
				<a href="#">mS46891357</a>
				<br />
				<label>tag:</label>
				<a href="#">organic</a> , <a href="#">greenhouse</a> ,{" "}
				<a href="#">fat</a> , <a href="#">healthy</a> , <a href="#">dairy</a> ,
				<a href="#">vitamin</a>
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
