import type { FC } from "react";
import { Order } from "../../interfaces/order.interface";

interface OrdersProps {
	onClick: (order: Order) => void;
	orders: Order[];
}

const Orders: FC<OrdersProps> = ({ onClick, orders }) => {
	const formatOrderDate = (date: string) => {
		const formattedDate = new Date(date).toLocaleDateString("en-us", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
		return formattedDate;
	};

	return (
		<div className="tab-pane" id="orders">
			test
			<table className="order-table">
				<thead>
					<tr>
						<th>Order</th>
						<th>Date</th>
						<th>Status</th>
						<th>Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{orders &&
						orders.map((order) => (
							<tr key={order.id}>
								<td className="order-number">
									<a href="#">#{order.id}</a>
								</td>
								<td className="order-date">
									<span>{formatOrderDate(order.updated_at)}</span>
								</td>
								<td className="order-status">
									<span>{order.payment_status}</span>
								</td>
								<td className="order-total">
									<span>
										${order.grand_total} for {order.order_items.length} items
									</span>
								</td>
								<td className="order-action">
									<a
										className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
										onClick={() => {
											onClick(order);
										}}
									>
										View
									</a>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Orders;
