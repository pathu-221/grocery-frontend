

import type { FC } from 'react';

interface CartTotalProps {
	cartTotal: number
}

const CartTotal: FC<CartTotalProps> = ({ cartTotal }) => {


    return (
			<aside className="col-lg-4 sticky-sidebar-wrapper">
				<div className="sticky-sidebar" data-sticky-options="{'bottom': 20}">
					<div className="summary mb-4">
						<h3 className="summary-title">Cart Totals</h3>
						<table className="shipping mb-2">
							<tbody>
								<tr className="summary-subtotal">
									<td>
										<h4 className="summary-subtitle">Subtotal</h4>
									</td>
									<td>
									<p className="summary-subtotal-price">${cartTotal}</p>
									</td>
								</tr>
								{/* <tr className="sumnary-shipping shipping-row-last">
									<td colSpan={2}>
										<h4 className="summary-subtitle pb-3">
											Calculate Shipping
										</h4>
										<ul>
											<li>
												<input
													type="radio"
													id="flat_rate"
													name="shipping"
													className="custom-control-input"
													checked
													readOnly
												/>
												<label
													className="custom-control-label"
													htmlFor="flat_rate"
												>
													Flat rate
												</label>
											</li>
											<li>
												<input
													type="radio"
													id="free-shipping"
													name="shipping"
													className="custom-control-input"
												/>
												<label
													className="custom-control-label"
													htmlFor="free-shipping"
												>
													Free shipping
												</label>
											</li>

											<li>
												<input
													type="radio"
													id="local_pickup"
													name="shipping"
													className="custom-control-input"
												/>
												<label
													className="custom-control-label"
													htmlFor="local_pickup"
												>
													Local pickup
												</label>
											</li>
										</ul>
									</td>
								</tr> */}
							</tbody>
						</table>
						{/* <div className="shipping-address">
							<label className="mb-4">Shipping to CA.</label>
							<div className="select-box">
								<select name="country" className="form-control">
									<option value="us" defaultChecked>
										United States (US)
									</option>
									<option value="uk"> United Kingdom</option>
									<option value="fr">France</option>
									<option value="aus">Austria</option>
								</select>
							</div>
							<div className="select-box">
								<select name="country" className="form-control">
									<option value="us" defaultValue={"us"}>
										California
									</option>
									<option value="uk">Alaska</option>
									<option value="fr">Delaware</option>
									<option value="aus">Hawaii</option>
								</select>
							</div>
							<input
								type="text"
								className="form-control"
								name="code"
								placeholder="Town / City"
							/>
							<input
								type="text"
								className="form-control"
								name="code"
								placeholder="Postcode / ZIP"
							/>
							<a href="#" className="btn btn-dark btn-outline">
								Update total
							</a>
						</div> */}
						<table className="total">
							<tbody>
								<tr className="summary-subtotal">
									<td>
										<h4 className="summary-subtitle">Total</h4>
									</td>
									<td>
										<p className="summary-total-price ls-s">${ cartTotal}</p>
									</td>
								</tr>
							</tbody>
						</table>
						<a href="/checkout" className="btn btn-dim btn-checkout btn-block">
							Proceed to checkout
						</a>
					</div>
				</div>
			</aside>
		);
}

export default CartTotal;
