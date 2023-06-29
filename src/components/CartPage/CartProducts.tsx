import type { FC } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	deleteFromCart,
	getCartItems,
	updateCart,
} from "../../redux/cart/cartThunk";
import { RootState, useAppDispatch } from "../../redux/store";
import CartTotal from "./CartTotals";
import { addItem, removeItem } from "../../redux/cart/cartSlice";

interface CartProductsProps {}

const CartProducts: FC<CartProductsProps> = () => {
	const dispatch = useAppDispatch();
	const { cartItems, error } = useSelector((state: RootState) => state.cart);
	const [cartTotal, setCartTotal] = useState<number>(0);

	useEffect(() => {
		loadCartItems();
		console.log({ cartItems });
	}, []);

	useEffect(() => {
		calculateTotal();
	}, [cartItems]);

	const loadCartItems = async () => {
		dispatch(getCartItems());
		if (error) return alert(error.msg);
	};

	const calculateTotal = () => {
		let total = 0;
		cartItems?.map((item) => {
			total += item.quantity * item.product.base_price;
		});

		setCartTotal(total);
	};

	const removeProduct = async (productId: string) => {
		await dispatch(deleteFromCart(productId));
		await dispatch(getCartItems());
	};

	const updateCartItems = async () => {
		cartItems?.map(async (item) => {
			await dispatch(
				updateCart({
					carItemId: item.id,
					formData: {
						quantity: item.quantity,
					},
				})
			);
		});
		dispatch(getCartItems());
	};
	return (
		<div className="container mt-7 mb-2">
			<div className="row">
				<div className="col-lg-8 col-md-12 pr-lg-6">
					<table className="shop-table cart-table">
						<thead>
							<tr>
								<th>
									<span>Product</span>
								</th>
								<th></th>
								<th>
									<span>Price</span>
								</th>
								<th>
									<span>quantity</span>
								</th>
								<th>Subtotal</th>
							</tr>
						</thead>
						<tbody>
							{cartItems &&
								cartItems.map((cartItem) => (
									<tr key={cartItem.id}>
										<td className="product-thumbnail">
											<figure>
												<a href="product-simple.html">
													<img
														src="images/subpage/cart/90x112.jpg"
														width="90"
														height="112"
														alt="product"
													/>
												</a>
											</figure>
										</td>
										<td className="product-name">
											<div className="product-name-section">
												<a href="product-simple.html">
													{cartItem.product.name}
												</a>
											</div>
										</td>
										<td className="product-subtotal">
											<span className="amount">
												${cartItem.product.base_price}
											</span>
										</td>
										<td className="product-quantity">
											<div className="input-group">
												<button
													className="quantity-minus p-icon-minus-solid"
													onClick={() => {
														dispatch(removeItem({ id: cartItem.id }));
													}}
												></button>
												<input
													className="quantity 
                                                        form-control"
													type="number"
													min="1"
													max="1000000"
													value={cartItem.quantity}
													readOnly
												/>
												<button
													className="quantity-plus p-icon-plus-solid"
													onClick={() => {
														dispatch(addItem({ id: cartItem.id }));
													}}
												></button>
											</div>
										</td>
										<td className="product-price">
											<span className="amount">
												${cartItem.quantity * cartItem.product.base_price}
											</span>
										</td>
										<td className="product-remove">
											<a
												className="btn-remove"
												title="Remove this product"
												onClick={() => {
													removeProduct(cartItem.id);
												}}
											>
												<i className="p-icon-times"></i>
											</a>
										</td>
									</tr>
								))}
						</tbody>
					</table>
					<div className="cart-actions mb-6 pt-6">
						<a href="shop.html" className="btn btn-dim btn-icon-left mr-4 mb-4">
							<i className="p-icon-arrow-long-left"></i>Continue Shopping
						</a>
						<button type="button" className="btn btn-outline btn-dim"
						onClick={() => updateCartItems()}>
							Update Cart
						</button>
					</div>
					{/* <div className="cart-coupon-box pt-5 pb-8">
						<h4 className="title coupon-title text-capitalize mb-4">
							Coupon Discount
						</h4>
						<form action="#">
							<input
								type="text"
								name="coupon_code"
								className="input-text mb-6"
								id="coupon_code"
								placeholder="Enter coupon code here..."
								required
							/>
							<button type="submit" className="btn btn-dark btn-outline">
								Apply Coupon
							</button>
						</form>
					</div> */}
				</div>
				<CartTotal cartTotal={cartTotal} />
			</div>
		</div>
	);
};

export default CartProducts;
