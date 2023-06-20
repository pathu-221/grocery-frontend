import type { FC } from "react";

interface OrdersViewProps {}

const OrdersView: FC<OrdersViewProps> = () => {
	return (
		<div className="tab-pane order" id="orders-view">
			<h2 className="title text-left pb-1">Order Details</h2>
			<div className="order-details">
				<table className="order-details-table">
					<thead>
						<tr className="summary-subtotal">
							<td>
								<h3 className="summary-subtitle">Your Order</h3>
							</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="product-subtitle">Product</td>
							<td></td>
						</tr>
						<tr>
							<td className="product-name">
								Juice{" "}
								<span>
									<i className="p-icon-times"></i>1
								</span>
							</td>
							<td className="product-price">$129.99</td>
						</tr>
						<tr>
							<td className="product-name">
								Greenhouse Cherry{" "}
								<span>
									<i className="p-icon-times"></i>2
								</span>
							</td>
							<td className="product-price">$98.00</td>
						</tr>
						<tr className="summary-subtotal">
							<td>
								<h4 className="summary-subtitle">Subtotal:</h4>
							</td>
							<td className="summary-value font-weight-normal">$325.99</td>
						</tr>
						<tr className="summary-subtotal">
							<td>
								<h4 className="summary-subtitle">Payment method:</h4>
							</td>
							<td className="summary-value">Cash on delivery</td>
						</tr>
						<tr className="summary-subtotal">
							<td>
								<h4 className="summary-subtitle">Total:</h4>
							</td>
							<td>
								<p className="summary-total-price">$325.99</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="row mt-9">
				<div className="col-sm-6">
					<div className="card card-address">
						<div className="card-body">
							<h5 className="card-title lh-2 mb-2">Billing Address</h5>
							<p>
								John Doe
								<br />
								Panda Company
								<br />
								Steven street
								<br />
								El Carjon, CA 92020
							</p>
							<p>nicework125@gmail.com</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card card-address">
						<div className="card-body">
							<h5 className="card-title lh-2 mb-2">Shipping Address</h5>
							<p>You have not set up this type of address yet.</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="mt-0 mb-6" />
			<a href="#orders" className="btn btn-dark btn-sm back-order">
				<i className="p-icon-arrow-long-left ml-0 mr-1"></i>Back to list
			</a>
		</div>
	);
};

export default OrdersView;
