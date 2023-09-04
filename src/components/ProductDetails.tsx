import type { FC } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Product } from "../interfaces/product.interface";
import { addToCart, getCartItems } from "../redux/cart/cartThunk";
import { useAppDispatch } from "../redux/store";

interface ProductDetailsProps {
	product?: Product;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [images, setImages] = useState<string[]>([]);
	useEffect(() => {
		if (product?.images) setImages(JSON.parse(product?.images));
		//if (product?.imag	es) setImages(JSON.parse(product?.images));
	}, []);

	return (
		<div className="product shadow-media text-center">
			<figure className="product-media">
				<a
					//this is temporary will switch to href when every product is loaded from database
					style={{ cursor: "pointer" }}
					onClick={() => {
						navigate({
							pathname: "/product",
							search: product && `?productId=${product.id}`,
						});
						window.location.reload();
					}}
				>
					<img
						src={images[0] || " images/products/295x369.jpg"}
						alt="product"
						// width="295px"
						// height="369px"
						style={{
							height: "200px",
							width: "100%",
						}}
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
						onClick={() => {
							if (product) dispatch(addToCart(product?.id));
							dispatch(getCartItems());
						}}
					>
						<i className="p-icon-cart-solid"></i>
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
					<ins className="new-price">${product?.base_price || "18.00"}</ins>
				</span>
			</div>
		</div>
	);
};

export default ProductDetails;
