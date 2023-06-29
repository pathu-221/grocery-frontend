import type { FC } from "react";
import { useState, useEffect } from "react";
import { placeOrder } from "../../apis/checkout.api";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface CheckoutFormProps {}

const CheckoutForm: FC<CheckoutFormProps> = () => {
	const { cartItems } = useSelector((state: RootState) => state.cart);
	const [cartTotal, setCartTotal] = useState<number>(0);

	useEffect(() => {
		calculateTotal();
	}, [cartItems]);

	const calculateTotal = () => {
		let total = 0;
		cartItems?.map((item) => {
			total += item.quantity * item.product.base_price;
		});

		setCartTotal(total);
	};

	const checkout = async () => {
		const data = await placeOrder();
		if (!data.status) return alert(data.msg);

		window.location.replace(data.data.paymentUrl);
	};

	return (
		<div className="container mt-7">
			<form action="#" className="form">
				<div className="row">
					<div className="col-lg-7 mb-6 mb-lg-0 check-detail">
						<h3 className="title text-left mt-3 mb-6">Billing Details</h3>
						<div className="row">
							<div className="col-xs-6">
								<label>First Name*</label>
								<input
									type="text"
									className="form-control"
									name="first-name"
									required
								/>
							</div>
							<div className="col-xs-6">
								<label>Last Name*</label>
								<input
									type="text"
									className="form-control"
									name="last-name"
									required
								/>
							</div>
						</div>
						<label>Company Name (optional)</label>
						<input type="text" className="form-control" name="company-name" />
						<label>Country / Region*</label>
						<div className="select-box">
							<select name="country" className="form-control">
								<option value="us" selected>
									United States (US)
								</option>
								<option value="uk"> United Kingdom</option>
								<option value="fr">France</option>
								<option value="aus">Austria</option>
							</select>
						</div>
						<label>Street Address</label>
						<input
							type="text"
							className="form-control"
							name="address1"
							required
							placeholder="House number and street name"
						/>
						<input
							type="text"
							className="form-control"
							name="address2"
							required
							placeholder="Apartment, suite, unit, etc. (optional)"
						/>
						<div className="row">
							<div className="col-xs-6">
								<label>Town / City</label>
								<input
									type="text"
									className="form-control"
									name="city"
									required
								/>
							</div>
							<div className="col-xs-6">
								<label>State / Country*</label>
								<input
									type="text"
									className="form-control"
									name="state"
									required
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-6">
								<label>Postcode / ZIP*</label>
								<input
									type="text"
									className="form-control"
									name="zip"
									required
								/>
							</div>
							<div className="col-xs-6">
								<label>Phone*</label>
								<input
									type="text"
									className="form-control"
									name="phone"
									required
								/>
							</div>
						</div>
						<label>Email Address*</label>
						<input
							type="text"
							className="form-control"
							name="email-address"
							required
						/>
						<div className="form-checkbox">
							<input
								type="checkbox"
								className="custom-checkbox"
								id="create-account"
								name="create-account"
							/>
							<label className="form-control-label" htmlFor="create-account">
								Create an account?
							</label>
						</div>
						<div className="form-checkbox mb-10">
							<input
								type="checkbox"
								className="custom-checkbox"
								id="different-address"
								name="different-address"
							/>
							<label
								className="form-control-label ls-s"
								htmlFor="different-address"
							>
								Ship to a different address?
							</label>
						</div>
						<h2 className="title pt-2 mb-6">Additional Information</h2>
						<label>Order Notes (optional)</label>
						<textarea
							className="form-control mb-0"
							cols={30}
							rows={5}
							placeholder="Write Your Review Here..."
						></textarea>
					</div>
					<aside className="col-lg-5 sticky-sidebar-wrapper  pl-lg-6">
						<div
							className="sticky-sidebar"
							data-sticky-options="{'bottom': 50}"
						>
							<div className="summary pt-5">
								<h3 className="title">Your Order</h3>
								<table className="order-sidebar">
									<thead>
										<tr>
											<th>Product</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{cartItems &&
											cartItems.map((item) => (
												<tr>
													<td className="product-name">
														{item.product.name}
														<span className="product-quantity">
															×&nbsp;{item.quantity}
														</span>
													</td>
													<td className="product-total text-body">
														${item.quantity * item.product.base_price}
													</td>
												</tr>
											))}
										<tr className="summary-subtotal">
											<td>
												<h4 className="summary-subtitle">Subtotal</h4>
											</td>
                                            <td className="summary-subtotal-price">${ cartTotal }</td>
										</tr>
										<tr className="summary-total">
											<td>
												<h4 className="summary-subtitle">Total</h4>
											</td>
											<td>
                                                <p className="summary-total-price ls-s">${ cartTotal }</p>
											</td>
										</tr>
									</tbody>
								</table>
								<div className="payment accordion radio-type pb-5">
									<h4 className="summary-subtitle ls-m pb-3">
										Payment Methods
									</h4>
									<div className="card">
										<div className="card-header">
											<a href="#collapse1" className="collapse">
												Paypal
											</a>
										</div>
									</div>
									<div className="card">
										{/* <div className="card-header">
											<a href="#collapse2" className="expand">
												Cash on delivery
											</a>
										</div> */}
										<div id="collapse2" className="collapsed">
											<div className="card-body">
												Pay with cash upon delivery.
											</div>
										</div>
									</div>
								</div>
								<button
									onClick={() => {
										checkout();
									}}
									type="button"
									className="btn btn-dim btn-block mt-6"
								>
									Place Order
								</button>
							</div>
						</div>
					</aside>
				</div>
			</form>
		</div>
	);
};

export default CheckoutForm;
