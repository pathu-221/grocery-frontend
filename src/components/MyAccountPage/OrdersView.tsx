import type { FC } from "react";
import { Order } from "../../interfaces/order.interface";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface OrdersViewProps {
	order: Order;
	back: () => void
}

const OrdersView: FC<OrdersViewProps> = ({ order, back }) => {
	const user = useSelector((state: RootState) => state.user.user);

	if (!user) return <h1>Sign in to continue</h1>
	
	return (
		<div className="order">
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
						{order.order_items.map((orderItem) => (
							<tr key={orderItem.id}>
								<td className="product-name">
									{orderItem.product.name}{" "}
									<span>
										<i className="p-icon-times"></i>
										{orderItem.product_quantity}
									</span>
								</td>
								<td className="product-price">${orderItem.product_price}</td>
							</tr>
						))}
						<tr className="summary-subtotal">
							<td>
								<h4 className="summary-subtitle">Subtotal:</h4>
							</td>
							<td className="summary-value font-weight-normal">
								${order.grand_total}
							</td>
						</tr>
						<tr className="summary-subtotal">
							<td>
								<h4 className="summary-subtitle">Payment method:</h4>
							</td>
							<td className="summary-value">{order.payment_type}</td>
						</tr>
						<tr className="summary-subtotal">
							<td>
								<h4 className="summary-subtitle">Total:</h4>
							</td>
							<td>
								<p className="summary-total-price">${order.grand_total}</p>
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
								{`${user.first_name} ${user.last_name}`}
								<br />
								{order.shipping_address_1}
								<br />
								{order.shipping_city}
								<br />
								{`${order.shipping_state} - ${order.shipping_zip}`}
							</p>
							<p>{user.email}</p>
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
			<div className="ib-wrapper">
				<a
					onClick={() => back()}
					href="#orders"
					className="btn btn-dark btn-sm back-order"
				>
					<i className="p-icon-arrow-long-left ml-0 mr-1"></i>Back to list
				</a>
			</div>
		</div>
	);
};

export default OrdersView;
