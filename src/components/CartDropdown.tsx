import type { FC } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { deleteFromCart, getCartItems } from "../redux/cart/cartThunk";

interface CartDropDownProps {}

const CartDropDown: FC<CartDropDownProps> = () => {
	
	const { cartItems } = useSelector((state: RootState) => state.cart)
	const dispatch = useAppDispatch();
	const [cartTotal, setCartTotal] = useState<number>();

	useEffect(() => {
		dispatch(getCartItems());
	}, []);

	useEffect(() => {
		calculateTotal();
	}, [cartItems]);


	const calculateTotal = () => {
		let total = 0;
		cartItems?.map((cartItem) => {
			total += cartItem.quantity * cartItem.product.base_price;
		});
		setCartTotal(total);
	};

	return (
		<div className="dropdown cart-dropdown off-canvas mr-0 mr-lg-2">
			<a href="#" className="cart-toggle link">
				<i className="p-icon-cart-solid">
					<span className="cart-count">{cartItems ? cartItems.length : 0 }</span>
				</i>
			</a>
			<div className="canvas-overlay"></div>
			<div className="dropdown-box">
				<div className="canvas-header">
					<h4 className="canvas-title">Shopping Cart</h4>
					<a href="#" className="btn btn-dark btn-link btn-close">
						close<i className="p-icon-arrow-long-right"></i>
						<span className="sr-only">Cart</span>
					</a>
				</div>
				<div className="products scrollable">
					{cartItems &&
						cartItems.map((item) => (
							<div className="product product-mini" key={item.id}>
								<figure className="product-media">
									<a href="product-simple.html">
										<img
											src="images/cart/product.jpg"
											alt="product"
											width="84"
											height="105"
										/>
									</a>
									<a href="#"
										onClick={() => {
											dispatch(deleteFromCart(item.id));
											dispatch(getCartItems());
										}}
										title="Remove Product" className="btn-remove">
										<i className="p-icon-times"></i>
										<span className="sr-only">Close</span>
									</a>
								</figure>
								<div className="product-detail">
									<a href="product.html" className="product-name">
										{item.product.name}
									</a>
									<div className="price-box">
										<span className="product-quantity">{item.quantity}</span>
										<span className="product-price">${ item.product.base_price }</span>
									</div>
								</div>
							</div>
						))}
					{/* <!-- End of Cart Product --> */}
				</div>
				{/* <!-- End of Products  --> */}
				<div className="cart-total">
					<label>Subtotal:</label>
					<span className="price">${ cartTotal || '0'}</span>
				</div>
				{/* <!-- End of Cart Total --> */}
				<div className="cart-action">
					<a href="/cart" className="btn btn-outline btn-dim mb-2">
						View Cart
					</a>
					<a href="/checkout" className="btn btn-dim">
						<span>Go To Checkout</span>
					</a>
				</div>
				{/* <!-- End of Cart Action --> */}
			</div>
			{/* <!-- End Dropdown Box --> */}
		</div>
	);
};

export default CartDropDown;
