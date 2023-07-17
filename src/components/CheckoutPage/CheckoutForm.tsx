import type { FC } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchAllAddresses } from "../../apis/address.api";
import { placeOrder } from "../../apis/checkout.api";
import { Address } from "../../interfaces/address.interface";
import { RootState } from "../../redux/store";

interface CheckoutFormProps {}

const CheckoutForm: FC<CheckoutFormProps> = () => {
	const { cartItems } = useSelector((state: RootState) => state.cart);
	const [cartTotal, setCartTotal] = useState<number>(0);
	const [addresses, setAddresses] = useState<Address[]>();

	const [selectedAddress, setSelectedAddress] = useState<Address>();

	const user = useSelector((state: RootState) => state.user.user);

	useEffect(() => {
		calculateTotal();
		loadAddresses();
	}, [cartItems]);

	useEffect(() => {}, [selectedAddress]);

	const calculateTotal = () => {
		let total = 0;
		cartItems?.map((item) => {
			total += item.quantity * item.product.base_price;
		});

		setCartTotal(total);
	};

	const loadAddresses = async () => {
		const data = await fetchAllAddresses();
		if (!data.status) return alert(data.msg);

		setAddresses(data.data);
	};

	const checkout = async () => {
		if (!selectedAddress) return alert('You need to choose an address!');

		const data = await placeOrder(selectedAddress.id);
		if (!data.status) return alert(data.msg);

		window.location.replace(data.data.paymentUrl);
	};

	return (
		<div className="container mt-7">
			<form action="#" className="form">
				<div className="row">
					<div className="col-lg-7 mb-6 mb-lg-0 check-detail">
						<label>Choose from saved address</label>
						<div className="select-box">
							<select
								onChange={(e) => {
									setSelectedAddress(
										addresses?.find((add) => add.id === e.target.value)
									);
								}}
								name="address"
								className="form-control"
							>
								<option>--Select--</option>
								{addresses &&
									addresses.map((address) => (
										<option key={address.id} value={address.id}>
											{address.name}
										</option>
									))}
							</select>
						</div>
						<h3 className="title text-left mt-3 mb-6">Billing Details</h3>
						<div className="row">
							<div className="col-xs-6">
								<label>First Name*</label>
								<input
									type="text"
									className="form-control"
									name="first-name"
									required
									disabled
									defaultValue={user?.first_name}
								/>
							</div>
							<div className="col-xs-6">
								<label>Last Name*</label>
								<input
									type="text"
									className="form-control"
									name="last-name"
									required
									disabled
									defaultValue={user?.last_name}
								/>
							</div>
						</div>
						{/* <label>Company Name (optional)</label>
						<input type="text" className="form-control" name="company-name" /> */}
						{/* <label>Country / Region*</label>
						<div className="select-box">
							<select name="country" className="form-control">
								<option value="us" selected>
									United States (US)
								</option>
								<option value="uk"> United Kingdom</option>
								<option value="fr">France</option>
								<option value="aus">Austria</option>
							</select>
						</div> */}
						<label>Street Address</label>
						<input
							type="text"
							className="form-control"
							name="address1"
							required
							disabled
							placeholder="House number and street name"
							defaultValue={selectedAddress?.address_1}
						/>
						<input
							type="text"
							className="form-control"
							name="address2"
							required
							disabled
							placeholder="Apartment, suite, unit, etc. (optional)"
							defaultValue={selectedAddress?.address_2}
						/>
						<div className="row">
							<div className="col-xs-6">
								<label>Town / City</label>
								<input
									type="text"
									className="form-control"
									name="city"
									required
									disabled
									defaultValue={selectedAddress?.city}
								/>
							</div>
							<div className="col-xs-6">
								<label>State / Country*</label>
								<input
									type="text"
									className="form-control"
									name="state"
									required
									disabled
									defaultValue={selectedAddress?.state}
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
									disabled
									required
									defaultValue={selectedAddress?.zip}
								/>
							</div>
							{/* <div className="col-xs-6">
								<label>Phone*</label>
								<input
									type="text"
									className="form-control"
									name="phone"
									required

								/>
							</div> */}
						</div>
						<label>Email Address*</label>
						<input
							type="text"
							className="form-control"
							name="email-address"
							required
							disabled
							defaultValue={user?.email}
						/>
						{/* <div className="form-checkbox">
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
						</div> */}
						{/* <h2 className="title pt-2 mb-6">Additional Information</h2>
						<label>Order Notes (optional)</label>
						<textarea
							className="form-control mb-0"
							cols={30}
							rows={5}
							placeholder="Write Your Review Here..."
						></textarea> */}
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
												<tr key={item.id}>
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
											<td className="summary-subtotal-price">${cartTotal}</td>
										</tr>
										<tr className="summary-total">
											<td>
												<h4 className="summary-subtitle">Total</h4>
											</td>
											<td>
												<p className="summary-total-price ls-s">${cartTotal}</p>
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
